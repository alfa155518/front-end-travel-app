import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useNotification from "../hooks/useNotification";
function useSignUp() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    photo: null,
  });

  const navigate = useNavigate();

  // Costume Hook Notification
  const [notify] = useNotification();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormState((prevState) => ({ ...prevState, photo: file }));
  };

  // Submit Data
  const handleSubmit = async () => {
    const formData = new FormData();
    Object.entries(formState).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/signUp",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 201) {
        // Add token to local storage
        await localStorage.setItem("token", response.data.token);
        return response;
      }
    } catch (error) {
      const errorMessage =
        (await error.response?.data?.message) || "An unknown error occurred.";
      return notify(errorMessage, "error");
    }
  };

  return [
    formState,
    navigate,
    notify,
    handleInputChange,
    handleFileChange,
    handleSubmit,
  ];
}

export default useSignUp;
