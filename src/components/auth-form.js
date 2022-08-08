import React from "react";
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";
import { useAsync } from "../utils/hooks/use-async";

function Form(props) {
  const { buttonText, onSubmit } = props;

  const [showPassword, setShowPassword] = React.useState(false);
  const { run, error, isError, isLoading } = useAsync();

  function handleSubmit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    run(onSubmit({ email: email.value, password: password.value }));
  }

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="auth-form">
      <h4>{buttonText}</h4>
      <label htmlFor="email">email:</label>
      <input type="email" placeholder="Email" name="email" required />
      <label htmlFor="password">password:</label>
      <div className="form-control">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          name="password"
          required
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
