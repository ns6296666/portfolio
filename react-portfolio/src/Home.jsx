import "./App.css";
import { Link } from "react-router-dom";
import logo from "./assets/github.svg";
import computer from "./assets/computer.svg";
export default function Home() {
  return (
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
          <div className="static-txt"> I am</div>
          <ul className="dynamic-txts">
            <li className="degination">
              <span>FRONTEND DEVELOPER</span>
            </li>
            <li className="degination">
              <span>Mobile Application DEVELOPER</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
