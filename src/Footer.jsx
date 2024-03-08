import { Link } from "react-router-dom";
import git from "./assets/footer.svg";
import linkedin from "./assets/linkedin.svg";
export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-links">
        <Link to="https://github.com/ns6296666">
          <img src={git} alt="git" className="git" />
        </Link>
        <Link to="https://www.linkedin.com/in/nidhisharmaleicester/">
          <img src={linkedin} alt="linkedin" className="git" />
        </Link>
      </div>

      <p>Copyright @ Nidhi Sharma</p>
    </div>
  );
}
