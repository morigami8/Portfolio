// import FrontEndProjects from './FrontEndProjects';
// import FullStackProjects from './FullStackProjects';
import styles from './_projects.module.scss';
import CarouselContainer from './CarouselContainer';
import { FullStackProjects } from './fullStackProjects.carousel';

const Projects = () => {
  return (
    <section className={`${styles[`projects-container`]} projects-container`}>
      {/* <FullStackProjects />
      <FrontEndProjects /> */}
      <CarouselContainer {...FullStackProjects} />
    </section>
  );
};

export default Projects;
