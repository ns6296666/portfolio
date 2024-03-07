import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Heading from "./Heading";
import VerticalTimeLine from "./VerticalTimeLine";
import react from "./assets/reacts.svg";
import star from "./assets/star.svg";

export default function Experience() {
  return (
    <div className="experience">
      <Heading name="EXPERIENCE" className="skill-heading" />
      <VerticalTimeline>
        <VerticalTimeLine
          date="2023 - present"
          image={react}
          framework="React Native"
          designation=" React Native Intern"
          company="Natter"
          skills={[
            "React Native",
            "Javascript",
            "Redux",
            "Jotai",
            "React Query",
          ]}
        />
        <VerticalTimeLine
          date="2022 - 2023"
          image={react}
          framework="React.js"
          designation="Frontend Developer"
          company="Ezdat Technology Pvt. Ltd."
          skills={[
            "React.js",
            "Javascript",
            "Redux",
            "Bootstrap",
            "HTML 5",
            "CSS 3",
          ]}
        />
        <VerticalTimeLine
          date="2022 - 2022"
          image={react}
          framework="React.js"
          designation="Software Developer"
          company="Ritzyware"
          skills={[
            "React.js",
            "Javascript",
            "Redux",
            "Bootstrap",
            "HTML 5",
            "CSS 3",
            "Material UI",
          ]}
        />
        <VerticalTimelineElement
          iconStyle={{ background: "#AE944F", color: "#fff" }}
          icon={<img src={star} alt="react" className="skill-img" />}
        />
        <div className="extra-div"></div>
      </VerticalTimeline>
    </div>
  );
}
