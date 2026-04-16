import { SignUp } from "../Api/signupApi";
import LoginField from "./loginField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function GetStarted() {
  const [form, setform] = useState({ email: "", password: "" }); // A form to collect user email and password.
  const [flag, setFlag] = useState(false);

  async function handleSignup() {
    try {
      await SignUp(form.email, form.password);
    setFlag(true);
    } catch (err) {
      console.log("HandleSignup has an error");
      console.error(err);
    }
  }
  let navig = useNavigate(); //

  function SomeComponent() {
    navig("/");
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
            handleSignup();
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
         

        <button className="login-button">Sign up</button>
        </form>

        
       
      </div>

      {flag && SomeComponent()}
    </>
  );
}

export default GetStarted;
