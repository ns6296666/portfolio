import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Heading from "./Heading";
import VerticalTimeLine from "./VerticalTimeLine";

export default function Experience() {
  return (
    <div className="experience">
      <Heading name="EXPERIENCE" className="skill-heading" />
      <VerticalTimeline>
        <VerticalTimeLine />
      </VerticalTimeline>
    </div>
  );
}
