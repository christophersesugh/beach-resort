import React from "react";

export default function Modal({ children, isModalOpen, setIsModalOpen }) {
  return (
    <div
      className={`${
        isModalOpen === "none" ? "login-modal" : "login-modal show-modal"
      }`}
    >
      <div className="modal-content">
        <button className="close-modal" onClick={() => setIsModalOpen("none")}>
          x
        </button>
        {children}
      </div>
    </div>
  );
}
