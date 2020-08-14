import PropTypes from 'prop-types';
import '../assets/styles/components/Projects.scss';
import Project from './Project';

function Projects({ projects }) {
  return (
    <section className="projects">
      <h2>Proyectos</h2>
      <div className="projects__content">
        {projects.map((project) => (
          <Project key={project._id} {...project} />
        ))}
      </div>
    </section>
  );
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default Projects;
