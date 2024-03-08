import Heading from "./Heading";
import "./App.css";
import SkillCard from "./SkillCard";
import html from "./assets/html.svg";
import css from "./assets/css.svg";
import javascript from "./assets/javascript.svg";
import bootstrap from "./assets/bootstrap.svg";
import node from "./assets/node.svg";
import react from "./assets/react.svg";

export default function Skills() {
  return (
    <div className="skills-section" id="skill">
      <Heading name="SKILLS" className="skill-heading" />
      <div className="skills-cards">
        <SkillCard image={html} name="HTML 5" />
        <SkillCard image={css} name="CSS 3" />
        <SkillCard image={javascript} name="javascript" />
        <SkillCard image={bootstrap} name="Bootstrap" />
        <SkillCard image={node} name="Node.js" />
        <SkillCard image={react} name="React.js" />
        <SkillCard image={react} name="React Native" />
      </div>
    </div>
  );
}
