import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useNotification from "../hooks/useNotification";

function useLogin() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // Costume Hook Notification
  const [notify] = useNotification();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/login",
        {
          email: form.email,
          password: form.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return response;
    } catch (error) {
      console.log(error);
      const errorMessage =
        error.response.data.message || "An unknown error occurred.";
      return notify(errorMessage, "error");
    }
  };

  return [form, notify, handleInputChange, handleLogin, navigate];
}

export default useLogin;
