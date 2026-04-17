import { useState } from "react";
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
  (_, i) => currentYear - (i+18),
);

function Register() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  return (
    <div className="signup-wrapper">
      <div className="signup-client">
        <div className="signup-headers">
          <div className="signup-title">🩺Medico</div>
            <div className="signup-getStarted"> Get started on Medico</div>
            <div> Sign up to access the best healthcare has to offer.</div>
        </div>
        <div className="signup-content">
          <form className="signup-form-data">
            <label> Mobile number or email address</label>
            <input
              type="email"
              placeholder="Mobile number or Email address"
              required
            />
          </form>
          <form className="signup-form-data">
            <label> Password</label>
            <input type="password" placeholder="Password" required />
          </form>
          <label className="DOB-text"> Date of Birth </label>
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

          <form className="signup-form-data">
            <label> Name</label>
            <input type="text" placeholder="Sty Valkyries" required />
          </form>

          <form className="signup-form-data">
            <label> Username</label>
            <input type="text" placeholder="callmesty" required />
          </form>

          <button className="signup-btn" type="submit">
            {" "}
            Sign Up
          </button>
          <button className="already-has-an-account-btn" type="submit">
            {" "}
            Already have an account?{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
