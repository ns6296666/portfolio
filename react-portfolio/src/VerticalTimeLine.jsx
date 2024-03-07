import { VerticalTimelineElement } from "react-vertical-timeline-component";

import react from "./assets/react.svg";

export default function VerticalTimeLine() {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "#fff", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #fff" }}
      date="2023 - present"
      dateClassName="date"
      iconStyle={{ background: "#AE944F", color: "#fff" }}
      icon={<img src={react} alt="react" className="skill-img" />}
    >
      <button className="framework">React Native</button>
      <p className="vertical-timeline-element-title">React Native Intern</p>
      <p className="vertical-timeline-element-subtitle">Natter</p>
      <div>
        <button className="languages">React Native</button>
        <button className="languages">javascript</button>
        <button className="languages">CSS 3</button>
        <button className="languages">Redux</button>
        <button className="languages">React Query</button>
        <button className="languages">Jotai</button>
      </div>
    </VerticalTimelineElement>
  );
}
