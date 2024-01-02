import './_skills-card.module.scss';
import { skills } from './skills.cards';
import SkillContainer from './SkillsContainer';

const Skills = () => {
  return (
    <section className="skills-container">
      <h2>Professional Skills</h2>
      <SkillContainer skills={skills} />
    </section>
  );
};

export default Skills;
