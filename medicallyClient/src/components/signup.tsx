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
  (_, i) => currentYear - (i + 18),
);

function Register() {
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

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const DoB = `${day} ${month} ${year}`;
    setForm({ ...form, DoB });
    console.log(form);
  }
  return (
    <div className="signup-wrapper">
      <div className="signup-client">
        <div className="signup-headers">
          <div className="signup-title">🩺Medico</div>
          <div className="signup-getStarted"> Get started on Medico</div>
          <div> Sign up to access the best healthcare has to offer.</div>
        </div>
        <div className="signup-content">
          <form className="signup-form-data" onSubmit={handleSubmit}>
            <label> Email address</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Sample@email.com"
              required
            />

            <label> Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
              required
            />

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

            <label> Name</label>
            <input
              name="name"
              onChange={handleChange}
              type="text"
              placeholder="Sty Valkyries"
              required
            />

            <label> Username</label>
            <input
              name="username"
              onChange={handleChange}
              type="text"
              placeholder="callmesty"
              required
            />

            <button className="signup-btn" type="submit">
              {" "}
              Sign Up
            </button>
          </form>

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
