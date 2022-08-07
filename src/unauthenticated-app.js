import React from "react";
import Form from "./components/auth-form";
import Modal from "./components/auth-modal";

export default function UnauthenticatedApp() {
  const [isModalOpen, setIsModalOpen] = React.useState("none");
  return (
    <section className="login-screen">
      <Modal isModalOpen={isModalOpen === "register"}>
        <Form buttonText="Register" />
      </Modal>
      <Modal isModalOpen={isModalOpen === "login"}>
        <Form buttonText="Login" />
      </Modal>

      <button onClick={() => setIsModalOpen("login")}>login</button>
      <button onClick={() => setIsModalOpen("register")}>register</button>
    </section>
  );
}
