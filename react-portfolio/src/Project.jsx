import Heading from "./Heading";
import Link from "react-router-dom";

export default function Project() {
  return (
    <div className="project">
      <Heading name="PROJECTS" />
      <div className="project-cards">
        <Link to="https://ns6296666.github.io/dailyplanner/">
          <div
            className="card project-card"
            style={{ width: "20rem", height: "350px" }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </Link>
        <Link to="https://ns6296666.github.io/WeatherDashboard/">
          <div
            className="card project-card"
            style={{ width: "20rem", height: "350px" }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </Link>
        <Link to="https://www.ssdntech.com/">
          <div
            className="card project-card"
            style={{ width: "20rem", height: "350px" }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
