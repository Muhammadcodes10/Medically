import { useEffect, useState } from "react";
import LoginApi  from "../apis/loginApi";

function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  async function handleLogin() {
    console.log("Handle login is ran!");
    await LoginApi(form.username, form.password)
      .then((response) => {
        console.log("login successful:", response);
      })
      .catch((error) => {
        console.error("login failed:", error);
      });
  }

  useEffect(() => {
    console.log("The email is: ", form.username);
    console.log("The password is: ", form.password);
  }, [form]);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    handleLogin();
  }
  return (
    <>
      <div className="login-wrapper">
        <div className="signup-client">
          <div className="signup-headers">
            <div className="signup-title">🩺Medico</div>
            <div className="signup-getStarted">Welcome back to Medico</div>
            <div>Log in to access the best healthcare has to offer.</div>
          </div>
          <div className="signup-content">
            <form className="signup-form-data" onSubmit={handleSubmit}>
              <label> Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                required
              />

              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Password"
                required
              />

              <button className="signup-btn" type="submit">
                Log in
              </button>
            </form>

            <button className="already-has-an-account-btn">
              Don't have an account?
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
