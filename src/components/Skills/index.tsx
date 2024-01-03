import './_skills-card.module.scss';
import { skills } from './skills.cards';
import SkillsContainer from './SkillsContainer';

const Skills = () => {
  return (
    <section className="skills-container">
      <h2>Professional Skills</h2>
      <SkillsContainer skills={skills} />
    </section>
  );
};

export default Skills;
