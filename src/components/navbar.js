import React from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
const logo =
  "https://res.cloudinary.com/christo/image/upload/v1659900065/logo_vmpclo.svg";
export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  function handleToggle() {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button type="button" className="nav-btn" onClick={handleToggle}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
          <li>
            <button>log out</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
