import { checkLogin } from "../Api/loginApi";
import LoginField from "./loginField";
import SocialLogin from "./socialLogin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import homePage from "./homePage";

function Intro() {
  const [form, setform] = useState({ email: "", password: "" });
  const [jwt, setJwt] = useState("");

  async function handleCheck() {
    try {
      const answer = await checkLogin(form.email, form.password);
      console.log("Handlecheck worked");
      setJwt(JSON.stringify(answer));
      console.log("The token that was generated is: " + jwt);
    } catch (err) {
      console.log("Handlecheck has an error");
      console.error(err);
    }
  }
  let navig = useNavigate();

  function SomeComponent() {
    navig("/homePage");
  }
  return (
    <>
      <div className="container">
        <div className="login-text-wrapper">
          <h1 className="login-text">🩺Medico</h1>

          <p className="login-details-text">Enter your login details below</p>
        </div>

        <form
          className="login-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleCheck();
          }}
        >
          <LoginField
            text={"Enter email or username"}
            type={"email"}
            placeholder={"Sample@gmail.com"}
            icon={"mail"}
            form={form}
            setForm={setform}
          />
          <LoginField
            text={"password"}
            type={"password"}
            placeholder={"Not 1-9"}
            icon={"lock"}
            form={form}
            setForm={setform}
          />
          <a href="http://google.com" className="forgot-password">
            {" "}
            Forgot password?{" "}
          </a>

          <button className="login-button">Log in</button>
        </form>

        <p className="seperator">
          <span>or</span>
        </p>
        <SocialLogin />
        <p className="signup-wrapper">
          {" "}
          Don't have an account?{" "}
          <a href="#" className="signup-text">
            Signup
          </a>
        </p>
      </div>

      {jwt.length > 0 && SomeComponent()}
    </>
  );
}

export default Intro;
