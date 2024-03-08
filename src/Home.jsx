import "./App.css";
import { Link } from "react-router-dom";
import logo from "./assets/github.svg";
import CV from "./assets/CV.pdf";
import computer from "./assets/computer.svg";
import Header from "./Header";
export default function Home() {
  return (
    <div className="header">
      <div className="first-section">
        <div className="logo">
          <Link to="https://github.com/ns6296666">
            <img src={logo} alt="" className="logo-image" />
          </Link>
        </div>
        <div className="heading">
          <img src={computer} alt="" className="code-image" />
          <h1 className="name">NIDHI SHARMA</h1>

          <div className="wrapper">
            <div className="static-txt">I'm a</div>
            <ul className="dynamic-txts">
              <li>
                <span>Developer</span>
              </li>
              <li>
                <span>Freelancer</span>
              </li>
            </ul>
          </div>

          <p className="resume">
            <a href={CV} target="_blank" rel="noopener noreferrer">
              Click me
            </a>
          </p>
        </div>
      </div>
      <Header />
    </div>
  );
}
