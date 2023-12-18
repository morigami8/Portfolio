import { Card } from './interfaces';

interface SkillCards {
  skills: Card[];
}
const SkillCard = ({ skills }: SkillCards) => {
  return (
    <div>
      {skills.map((skill) => {
        return (
          <div>
            <div>{skill.label}</div>
            <div>{skill.logo}</div>
            <div>{skill.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillCard;
