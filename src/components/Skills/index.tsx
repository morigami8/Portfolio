import './_skills-card.module.scss';
import SkillCard from './SkillCard';
import { skills } from './skills.cards';

const Skills = () => {
  return (
    <section className="skills-container">
      <h2>Professional Skills</h2>
      <SkillCard skills={skills} />
    </section>
  );
};

export default Skills;
