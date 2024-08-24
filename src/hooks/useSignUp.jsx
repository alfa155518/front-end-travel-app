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
      console.log(error);
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

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useMutation } from "@tanstack/react-query";
// import Loader from "../components/loader";
// import axios from "axios";
// import useNotification from "../hooks/useNotification";

// function Login() {
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   // Costume Hook Notification
//   const [notify] = useNotification();

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:8000/api/v1/users/login",
//         {
//           email: form.email,
//           password: form.password,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       return response;
//     } catch (error) {
//       console.log(error);
//       const errorMessage =
//         error.response.data.message || "An unknown error occurred.";
//       return notify(errorMessage, "error");
//     }
//   };

//   const { mutate, isPending } = useMutation({
//     mutationFn: handleLogin,
//     onSuccess: (response) => {
//       if (response.status === 200) {
//         notify(response.data.status, "success");
//         console.log(response);
//         navigate("/");
//       }
//     },
//     onSettled: () => {
//       // Reset form
//       setForm({ email: "", password: "" });
//     },
//   });

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     return mutate(form);
//   };
//   if (isPending) {
//     return <Loader />;
//   }
//   return (
//     <section className="login-page">
//       <div className="primary-heading text-center">
//         <h1 className="font-medium">
//           Login <strong>Page</strong>
//         </h1>
//         <span>get access to exclusive Features by creating account</span>
//       </div>
//       <form
//         className="w-[100%] p-4 text-center"
//         onSubmit={(e) => handleSubmit(e)}>
//         <input
//           type="email"
//           placeholder="Email"
//           autoComplete="email"
//           name="email"
//           value={form.email}
//           onChange={handleInputChange}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           autoComplete="new-password"
//           name="password"
//           value={form.password}
//           onChange={handleInputChange}
//         />
//         <button type="submit" className="send-data">
//           Login Up
//         </button>
//       </form>
//       <p className="login-link text-center text-2xl">
//         Already have an account? <Link to="/signup">Signup</Link>
//       </p>
//     </section>
//   );
// }

// export default Login;
