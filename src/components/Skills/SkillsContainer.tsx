import { Card } from './interfaces';
import SkillCard from './SkillCard';

interface SkillCards {
  skills: Card[];
}

const SkillsContainer = ({ skills }: SkillCards) => {
  return (
    <div className="skill-card-container">
      {skills.map((skill, index) => (
        <SkillCard key={index} {...skill} />
      ))}
    </div>
  );
};

export default SkillsContainer;
