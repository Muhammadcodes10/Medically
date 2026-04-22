import { useEffect, useState } from "react";
import { SignupApi } from "../apis/signupApi";
import { useNavigate } from "react-router-dom";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const currentYear = new Date().getFullYear();
const years = Array.from(
  { length: currentYear - 1900 + 1 },
  (_, i) => currentYear - (i + 18),
);

function Register() {
  const [emailError, setEmailError] = useState(""); // ← new
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    DoB: "",
    username: "",
  });
  const navigate = useNavigate();

  function useRedirect() {
    navigate("/");
  }

  async function sendData() {
    await SignupApi(
      form.email,
      form.password,
      form.DoB,
      form.name,
      form.username,
    )
      .then((response) => {
        console.log("Signup successful:", response);
      })
      .catch((error) => {
        if (error.message === "User already exists") {
          // ← catch it here
          setEmailError("User already exists.");
        }
        console.error("Signup failed:", error);
      });
  }

  useEffect(() => {
    const DoB = `${day} ${month} ${year}`;
    setForm({ ...form, DoB });
  }, [day, month, year]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendData();
  }

  return (
    <div className="signup-wrapper">
      <div className="signup-client">
        <div className="signup-headers">
          <div className="signup-title">🩺Medico</div>
          <div className="signup-getStarted">Get started on Medico</div>
          <div>Sign up to access the best healthcare has to offer.</div>
        </div>
        <div className="signup-content">
          <form className="signup-form-data" onSubmit={handleSubmit}>
            <label>Email address</label>
            <input
              type="email"
              name="email"
              onChange={(e) => {
                handleChange(e);
                setEmailError(""); //  clears error when user retypes
              }}
              placeholder="Sample@email.com"
              style={{
                border: emailError ? "2px solid red" : "",
              }} //  red border
              required
            />
            {emailError && ( // red message with login link
              <p
                style={{
                  color: "red",
                  margin: "0.3rem -0.8rem 0rem 0.4rem",
                  fontSize: "0.8em",
                }}
              >
                {emailError}{" "}
                <span
                  onClick={() => useRedirect()}
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                >
                  Log in instead.
                </span>
              </p>
            )}

            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
              required
            />

            <label className="DOB-text">Date of Birth</label>
            <div className="date-of-birth">
              <select value={day} onChange={(e) => setDay(e.target.value)}>
                {days.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              <select value={month} onChange={(e) => setMonth(e.target.value)}>
                {months.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
              <select value={year} onChange={(e) => setYear(e.target.value)}>
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>

            <label>Name</label>
            <input
              name="name"
              onChange={handleChange}
              type="text"
              placeholder="Sty Valkyries"
              required
            />

            <label>Username</label>
            <input
              name="username"
              onChange={handleChange}
              type="text"
              placeholder="callmesty"
              required
            />

            <button
              className="signup-btn"
              type="submit"
              onClick={() => {
                form.email === "" ||
                form.password === "" ||
                form.name === "" ||
                form.username === "" ||
                form.DoB === ""
                  ? null
                  : navigate("/checkEmail");
              }} 
            >
              Sign Up
            </button>
          </form>

          <button
            className="already-has-an-account-btn"
            onClick={() => navigate("/login")} // ← fixed this too
          >
            Already have an account?
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
