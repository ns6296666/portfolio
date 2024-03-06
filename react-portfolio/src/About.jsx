import picture from "./assets/picture.avif";
import react from "./assets/react.svg";
import js from "./assets/javascript.svg";
import cross from "./assets/cross.svg";
import mini from "./assets/mini.svg";
import max from "./assets/max.svg";
export default function About() {
  return (
    <div className="about">
      <p className="about-heading text-center">ABOUT ME</p>
      <div className="about-content">
        <div className="image-container">
          <img src={picture} className="picture" />
          <div className="course-img">
            <img src={react} className="react" />
            <img src={js} className="react" />
          </div>
        </div>

        <div className="right-content">
          <div className="about-head">
            <img src={cross} className="react" />
            <img src={max} className="react" />
            <img src={mini} className="react" />
          </div>
          <div className="description">
            <h4>Hi :)</h4>
            <br />
            <p>
              👋 I am Nidhi Sharma. I have 3 years of experience. I'm working
              with newest front-end framework React. What you are seeing now is
              portfolio template from ns6296666. If you like this portfolio
              template, make sure to ⭐ the repository. Thank you 💜
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
