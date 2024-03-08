import React, { useState } from "react";
import "./App.css";
import logo from "./assets/footer.svg";
import menu from "./assets/hamburger.svg";
import cancel from "./assets/cancel.svg";
import { Link } from "react-router-dom";
export default function Header() {
  const [menuShown, setMenuShown] = useState(false);

  const menuHandler = () => {
    setMenuShown((prev) => !prev);
  };
  return (
    <div className="first-section">
      <Link to="https://github.com/ns6296666">
        <img src={logo} alt="" className="logo-image" />
      </Link>
      <div className="nav">
        <ul className="list-items">
          <li className="item">
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li className="item">
            <a href="#about">About</a>
          </li>
          <li className="item">
            <a href="#project">Projects</a>
          </li>
          <li className="item">
            <a href="#skill">Skills</a>
          </li>
          <li className="item">
            <a href="#work">Work</a>
          </li>
          <li className="item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div onClick={menuHandler}>
        <img src={!menuShown ? menu : cancel} alt="menu" className="mobile" />
        {/* <img src={cancel} alt="cancel" className="mobile" /> */}
      </div>
    </div>
  );
}
