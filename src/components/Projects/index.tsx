import FrontEndProjects from './FrontEndProjects';
import FullStackProjects from './FullStackProjects';
import styles from './_projects.module.scss';

const Projects = () => {
  return (
    <section className={`${styles[`projects-container`]} projects-container`}>
      <FullStackProjects />
      <FrontEndProjects />
    </section>
  );
};

export default Projects;
