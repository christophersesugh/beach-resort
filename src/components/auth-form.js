import React from "react";
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";
import { useAsync } from "../utils/hooks/use-async";

function Form({ buttonText, onSubmit, id1, id2 }) {
  const [showPassword, setShowPassword] = React.useState(false);
  const { run, error, isError, isLoading } = useAsync();

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   run(onSubmit({ email, password }));
  // }

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }
  return (
    <form autoComplete="off" className="auth-form">
      <h4>{buttonText}</h4>
      <label htmlFor={id1}>email:</label>
      <input type="email" placeholder="Email" name="email" id={id1} />
      <label htmlFor={id2}>password:</label>
      <div className="form-control">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          name="password"
          id={id2}
        />
        <button onClick={toggleShowPassword} className="form-control-btn">
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      <div>
        <button type="submit" className="form-btn" disabled={isLoading}>
          {isLoading ? <FaSpinner /> : buttonText}
        </button>
        {isError ? <span style={{ color: "red" }}>{error.message}</span> : null}
      </div>
    </form>
  );
}

export default React.memo(Form);
