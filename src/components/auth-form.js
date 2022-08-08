import React from "react";
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";
import { useAsync } from "../utils/hooks/use-async";

function Form(props) {
  const { buttonText, onSubmit, id1, id2 } = props;

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
      <input type="email" placeholder="Email" name={id1} id={id1} />
      <label htmlFor={id2}>password:</label>
      <div className="form-control">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          name={id2}
          id={id2}
        />
        <button
          type="button"
          onClick={toggleShowPassword}
          className="form-control-btn"
        >
          {showPassword ? (
            <FaEyeSlash aria-label="hide password" />
          ) : (
            <FaEye aria-label="show password" />
          )}
        </button>
      </div>
      <div>
        <button type="submit" className="form-btn" disabled={isLoading}>
          {isLoading ? <FaSpinner aria-label="loading" /> : buttonText}
        </button>
        {isError ? (
          <span style={{ color: "red", textAlign: "center" }}>
            {error.message}
          </span>
        ) : null}
      </div>
    </form>
  );
}

export default Form;
