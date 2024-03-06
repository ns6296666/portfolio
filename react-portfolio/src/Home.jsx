import "./App.css";
import logo from "./assets/github.svg";
export default function Home() {
  return (
    <div className="first-section">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="" className="logo-image" />
        </div>
      </header>
    </div>
  );
}
