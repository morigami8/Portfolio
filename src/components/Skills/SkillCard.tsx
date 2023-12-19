import { Card } from './interfaces';

interface SkillCards {
  skills: Card[];
}
const SkillCard = ({ skills }: SkillCards) => {
  return (
    <div className="skill-card-container">
      {skills.map((skill, index) => {
        return (
          <div className="skill-card" key={index}>
            <div className="skill-logo skill-item">{skill.logo}</div>
            <div className="skill-label skill-item">{skill.label}</div>
            <div className="skill-desc skill-item">
              <p>{skill.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillCard;
