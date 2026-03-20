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
          <div className="input-wrapper">
            <label> Email or Username</label>
            <input
              type="email"
              placeholder="Sample@gmail.com"
              className="input-field"
              required
            />
          </div>
          <div className="input-wrapper">
            <label> Password</label>
            <input
              type="password"
              placeholder="password"
              className="input-field"
              required
            />
          </div>
          <a href="http://google.com" className="forgot-password">
            {" "}
            Forgot password?{" "}
          </a>

          <button className="login-button">Log in</button>
        </form>

        <p className="seperator">
          <span>or</span>
        </p>
          <button className="social-button">
            <img src="Google.svg" /> {/**Fill it up  */}
            continue with google
          </button>

        <p className="signup-wrapper">
          {" "}
          Don't have an account? <a href="#" className="signup-text">Signup</a>
        </p>
      </div>
    </>
  );
}

export default Intro;
