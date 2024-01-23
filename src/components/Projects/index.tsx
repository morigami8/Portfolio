import FrontEndProjects from './FrontEndProjects';
import FullStackProjects from './FullStackProjects';

const Projects = () => {
  return (
    <section className="flex small:flex-col justify-center">
      <FullStackProjects />
      <FrontEndProjects />
    </section>
  );
};

export default Projects;
