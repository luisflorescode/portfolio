import PropTypes from 'prop-types';
import '../assets/styles/components/Project.scss';

function Project({ name, screenshot, url }) {
  return (
    <a className="project" href={url} target="_blank" rel="noreferrer">
      <figure className="project__screenshot">
        <img className="project__screenshot__img" src={screenshot} alt={name} />
      </figure>
      <div className="project__title">
        <strong className="project__title__text">{name}</strong>
      </div>
    </a>
  );
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  screenshot: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Project;
