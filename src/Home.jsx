import "./App.css";

import CV from "./assets/CV.pdf";
import computer from "./assets/computer.svg";
import Header from "./Header";
export default function Home() {
  return (
    <div className="heading" id="home">
      <img src={computer} alt="" className="code-image" />
      <h1 className="name">NIDHI SHARMA</h1>

      <div className="wrapper">
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
  );
}
