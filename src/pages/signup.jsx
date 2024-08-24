import { useMutation } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Loader from "../components/loader";
import useSignUp from "../hooks/useSignUp";
import "../sass/pages/signup.css";
function Signup() {
  // 1) Use custom hook to manage form state and functions
  const [
    formState,
    navigate,
    notify,
    handleInputChange,
    handleFileChange,
    handleSubmit,
  ] = useSignUp();

  // 2) Use Mutation hook to handle form submission
  const { mutate, isPending } = useMutation({
    mutationFn: handleSubmit,
    onSuccess: (response) => {
      console.log(response);
      notify(response.data.status, "success");
      navigate("/login");
    },
  });

  // 3) SignUp Function to handle form submission
  const handelSignUp = (event) => {
    event.preventDefault();
    return mutate(formState);
  };

  // 4) Make Loader component if form is being submitted
  if (isPending) {
    return <Loader />;
  }

  return (
    <section className="signup-page">
      <div className="primary-heading text-center">
        <h1 className="font-medium">
          Create <strong>Account</strong>
        </h1>
        <span>get access to exclusive Features by creating account</span>
      </div>
      <form
        className="w-[100%] p-4 text-center"
        onSubmit={(e) => handelSignUp(e)}>
        <input
          autoFocus
          type="text"
          placeholder="Name"
          autoComplete="name"
          name="name"
          value={formState.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Email"
          autoComplete="email"
          name="email"
          value={formState.email}
          onChange={handleInputChange}
        />
        <input
          name="phone"
          type="phone"
          placeholder="+2015555555"
          value={formState.phone}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          autoComplete="new-password"
          name="password"
          value={formState.password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          autoComplete="new-password"
          name="confirmPassword"
          value={formState.confirmPassword}
          onChange={handleInputChange}
        />
        <div className="input-image text-center mt-4">
          <input
            type="file"
            id="file"
            name="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
          <label
            htmlFor="file"
            className="cursor-pointer p-4 font-semibold text-2xl uppercase tracking-wide text-center ">
            Upload Image
          </label>
        </div>
        <button type="submit" className="send-data">
          Sign Up
        </button>
      </form>
      <p className="login-link text-center text-2xl">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </section>
  );
}

export default Signup;
