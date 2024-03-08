import React from "react";
import "./App.css";
import logo from "./assets/footer.svg";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="first-section">
      <Link to="https://github.com/ns6296666">
        <img src={logo} alt="" className="logo-image" />
      </Link>
      <div className="nav">
        <ul className="list-items">
          <li className="item">
            <a href="#home">Home</a>
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
    </div>
  );
}
