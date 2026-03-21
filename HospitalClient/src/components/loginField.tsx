import { useState } from "react";
interface props {
  text: string;
  type: string;
  placeholder: string;
  icon: string;
}

const LoginField = ({ text, type, placeholder, icon }: props) => {
  const [form, setform] = useState({email: "", password: ""})
  console.log(form)
  const [isPasswordShown, setISPasswordShown] = useState(false);
  return (
      <div className="input-wrapper">
        <label> {text} </label>
        <input
          name= {type}
          onChange={(e) => {
            setform({
              ...form,
              [e.target.name]: [e.target.value]
            })
          }}
          type={isPasswordShown ? "text" : type}
          placeholder={placeholder}
          className="input-field"
          required
        />
        <i className="material-symbols-rounded">{icon}</i>

        {type === "password" && (
          <i
            onClick={() => setISPasswordShown((prevState) => !prevState)}
            className="material-symbols-rounded eye-icon"
          >
            {" "}
            {isPasswordShown ? "visibility" : "visibility_off"}
          </i>
        )}
      </div>
  );
};

export default LoginField;
