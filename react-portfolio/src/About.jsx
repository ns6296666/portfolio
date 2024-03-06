import picture from "./assets/picture.avif";
import react from "./assets/react.svg";
import js from "./assets/javascript.svg";
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

        <div>
          <h4>Hi :)</h4>
          <p>
            👋 I am Nidhi Sharma. I have 3 years of experience. I'm working with
            newest front-end framework React. What you are seeing now is
            portfolio template from ns6296666. If you like this portfolio
            template, make sure to ⭐ the repository. Thank you 💜
          </p>
        </div>
      </div>
    </div>
  );
}
