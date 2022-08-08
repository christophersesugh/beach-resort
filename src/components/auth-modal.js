import React from "react";

export default function Modal({ children, isOpen, setIsOpen }) {
  return (
    <div
      className={`${isOpen ? "login-modal show-modal" : "login-modal"}`}
      role="dialog"
    >
      <div className="login-modal-content">
        <button className="close-modal" onClick={() => setIsOpen("none")}>
          x
        </button>
        <h2>beach resort</h2>
        {children}
      </div>
    </div>
  );
}
