import Heading from "./Heading";
import { Link } from "react-router-dom";
import physio from "./assets/physio.jpeg";
import education from "./assets/education.png";
import ssdn from "./assets/ssdn.jpeg";
export default function Project() {
  return (
    <div className="project" id="project">
      <Heading name="PROJECTS" />
      <div className="project-cards">
        <div
          className="card project-card"
          style={{ width: "20rem", height: "280px" }}
        >
          <Link to="https://ns6296666.github.io/dailyplanner/">
            <img src={physio} className="card-img-top physio" alt="planner" />
          </Link>
          <div className="card-body">
            <span>2022</span>
            <p className="card-title">
              <Link to="https://prophysio.in/" className="text-center">
                ProPhysio
              </Link>
            </p>
          </div>
        </div>

        <div
          className="card project-card"
          style={{ width: "20rem", height: "280px" }}
        >
          <Link to="https://ns6296666.github.io/WeatherDashboard/">
            <img src={education} className="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
            <span>2023</span>
            <p className="card-title">
              <Link to="https://www.educationmandal.com/">
                Education Mandal
              </Link>
            </p>
          </div>
        </div>

        <div
          className="card project-card"
          style={{ width: "20rem", height: "280px" }}
        >
          <Link to="https://www.ssdntech.com/">
            <img src={ssdn} className="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
            <span>2023</span>
            <p className="card-title">
              <Link to="https://www.ssdntech.com/">E-Commerce</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
