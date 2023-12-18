import SkillCard from './SkillCard';
import { skills } from './skills.cards';

const Skills = () => {
  return (
    <section>
      <h2>Professional Skills</h2>
      <SkillCard skills={skills} />
    </section>
  );
};

export default Skills;
