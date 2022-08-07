import React from "react";

export default function Form({ buttonText, onSubmit }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ email, password });
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className="form-control">
        <label htmlFor="email">email</label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="password">password</label>
        <input
          type="email"
          placeholder="Password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-btns">
        {" "}
        <button type="submit">{buttonText}</button>
      </div>
    </form>
  );
}
