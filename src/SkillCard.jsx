import "./App.css";

export default function SkillCard({ image, name }) {
  return (
    <div className="card skill-card" style={{}}>
      <img src={image} className="skill-img" />
      <p className="skill">{name}</p>
    </div>
  );
}
