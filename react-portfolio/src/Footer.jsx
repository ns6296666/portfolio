import { Link } from "react-router-dom";
import git from "./assets/footer.svg";
export default function Footer() {
  return (
    <div className="footer">
      <Link to="https://github.com/ns6296666">
        <img src={git} alt="git" className="git" />
      </Link>

      <p>Copyright @ Nidhi Sharma</p>
    </div>
  );
}
