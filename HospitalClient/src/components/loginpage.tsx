import LoginField from "./loginField";
import SocialLogin from "./socialLogin";

function Intro() {
  return (
    <>
      <div className="container">
        <div className="login-text-wrapper">
          <h1 className="login-text">
            🩺Medico
          </h1>
            
            <p className="login-details-text">Enter your login details below</p>
        </div>

        <form className="login-form">
          <LoginField text={"Enter email or username"}type={"email"} placeholder={"Sample@gmail.com"} icon={"mail"}/>
          <LoginField  text={"password"}type={"password"} placeholder={"Not 1-9"} icon={"lock"}/>
          <a href="http://google.com" className="forgot-password">
            {" "}
            Forgot password?{" "}
          </a>

          <button className="login-button">Log in</button>
        </form>

        <p className="seperator">
          <span>or</span>
        </p>
          <SocialLogin/>
        <p className="signup-wrapper">
          {" "}
          Don't have an account? <a href="#" className="signup-text">Signup</a>
        </p>
      </div>
    </>
  );
}

export default Intro;
