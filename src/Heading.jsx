import "./App.css";

export default function Heading(props) {
  return (
    <p
      className={
        props.name === "SKILLS"
          ? "skill-heading about-heading text-center"
          : "about-heading text-center"
      }
    >
      {props.name}
    </p>
  );
}
