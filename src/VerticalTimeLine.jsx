import { VerticalTimelineElement } from "react-vertical-timeline-component";

export default function VerticalTimeLine({
  date,
  image,
  framework,
  company,
  skills,
  designation,
}) {
  console.log(skills);
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "#fff", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #fff" }}
      date={date ? date : null}
      dateClassName="date"
      iconStyle={{ background: "#AE944F", color: "#fff" }}
      icon={<img src={image} alt="react" className="work-img" />}
    >
      <button className="framework">{framework}</button>
      <p className="vertical-timeline-element-title">{designation}</p>
      <p className="vertical-timeline-element-subtitle">{company}</p>
      <div>
        {skills?.length > 0
          ? skills.map((skill, index) => (
              <button className="languages" key={index}>
                {skill}
              </button>
            ))
          : null}
      </div>
    </VerticalTimelineElement>
  );
}
