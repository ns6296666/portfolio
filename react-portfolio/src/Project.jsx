import Heading from "./Heading";
import { Link } from "react-router-dom";
import planner from "./assets/planner.jpg";
import forecast from "./assets/forecast.avif";
import ssdn from "./assets/ssdn.jpeg";
export default function Project() {
  return (
    <div className="project">
      <Heading name="PROJECTS" />
      <div className="project-cards">
        <div
          className="card project-card"
          style={{ width: "20rem", height: "350px" }}
        >
          <Link to="https://ns6296666.github.io/dailyplanner/">
            <img src={planner} className="card-img-top" alt="planner" />
          </Link>
          <div className="card-body">
            <span>2024</span>
            <p className="card-title">
              <Link
                to="https://ns6296666.github.io/dailyplanner/"
                className="text-center"
              >
                Daily Planner
              </Link>
            </p>
          </div>
        </div>

        <div
          className="card project-card"
          style={{ width: "20rem", height: "350px" }}
        >
          <Link to="https://ns6296666.github.io/WeatherDashboard/">
            <img src={forecast} className="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
            <span>2024</span>
            <p className="card-title">
              <Link to="https://ns6296666.github.io/WeatherDashboard/">
                Weather Forecast
              </Link>
            </p>
          </div>
        </div>

        <div
          className="card project-card"
          style={{ width: "20rem", height: "350px" }}
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
