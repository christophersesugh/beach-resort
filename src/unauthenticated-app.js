import React from "react";
import Form from "./components/auth-form";
import Modal from "./components/auth-modal";
import Banner from "./components/banner";
import { useAuth } from "./context/auth-context";

export default function UnauthenticatedApp() {
  const [isModalOpen, setIsModalOpen] = React.useState("none");
  const { register, login } = useAuth();
  return (
    <section className="auth-screen">
      <Banner title="beach resort" subtitle="register/Login to explore!">
        <button onClick={() => setIsModalOpen("login")} className="btn">
          login
        </button>
        <button onClick={() => setIsModalOpen("register")} className="btn">
          register
        </button>
      </Banner>

      <Modal isOpen={isModalOpen === "login"} setIsOpen={setIsModalOpen}>
        <Form buttonText="Login" onSubmit={login} />
      </Modal>
      <Modal isOpen={isModalOpen === "register"} setIsOpen={setIsModalOpen}>
        <Form buttonText="Register" onSubmit={register} />
      </Modal>
    </section>
  );
}
