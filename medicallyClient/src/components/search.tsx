import { useState, useEffect } from "react";
import Intro from "./intro";
function Search() {
  const [showH1, setShowH1] = useState(true);

  const [formData, setformData] = useState({
    result: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (true) {
      setformData({
        ...formData,
        [e.target.name]: e.target.value,
      });
      if (submitted === true) {
        setSubmitted(false);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.result) {
      alert("Search for a treatment");
    } else {
      setSubmitted(true);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowH1(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <h1 style={{ color: "green" }}>
        {" "}
        {showH1
          ? "Get your medical treatment(s) at a discounted rate today!"
          : null}
      </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchbar" className="TreatmentText">
          <strong>What treatment are we looking for today?</strong>{" "}
        </label>
        <input
          type="text"
          name="result"
          value={formData.result}
          onChange={handleChange}
        ></input>
      </form>
      <h1> How to use: </h1>
      <ul>
        <li className="TreatmentText">Open live location </li>
        <li className="TreatmentText">Search for particular treatment </li>
        <li className="TreatmentText">
          Medico provides direction to the nearest hospital that offers your
          desired treatment.{" "}
        </li>
      </ul>

      {/* <button type="submit" onClick={() => setClicked(true)}>Open maps</button> */}

      {submitted === true && <Intro treatment={formData.result} />}
    </>
  );
}

export default Search;