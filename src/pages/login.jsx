import { Link } from "react-router-dom";
import Loader from "../components/loader";
import useLogin from "../hooks/useLogin";
import { useMutation } from "@tanstack/react-query";

function Login() {
  // Costume Hook login
  const [form, notify, handleInputChange, handleLogin, navigate] = useLogin();

  // When User Submit Data
  const handleSubmit = (event) => {
    event.preventDefault();
    return mutate(form);
  };

  // Mutation for login
  const { mutate, isPending } = useMutation({
    mutationFn: handleLogin,
    onSuccess: (response) => {
      if (response.status === 200) {
        notify(response.data.status, "success");
        localStorage.setItem(
          "photo",
          JSON.stringify(response.data.user.photo.url)
        );
        navigate("/");
      }
    },
  });

  // Make Loader component if form is being submitted
  if (isPending) {
    return <Loader />;
  }
  return (
    <section className="login-page">
      <div className="primary-heading text-center">
        <h1 className="font-medium">
          Login <strong>Page</strong>
        </h1>
        <span>get access to exclusive Features by creating account</span>
      </div>
      <form
        className="w-[100%] p-4 text-center"
        onSubmit={(e) => handleSubmit(e)}>
        <input
          type="email"
          placeholder="Email"
          autoComplete="email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          autoComplete="new-password"
          name="password"
          value={form.password}
          onChange={handleInputChange}
        />
        <button type="submit" className="send-data">
          Login Up
        </button>
      </form>
      <p className="login-link text-center text-2xl">
        Already have an account? <Link to="/signup">Signup</Link>
      </p>
    </section>
  );
}

export default Login;
