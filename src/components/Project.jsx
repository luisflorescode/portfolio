import PropTypes from 'prop-types';
import '../assets/styles/components/Project.scss';

function Project({ name, screenshots, url }) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <a className="project" href={url} target="_blank" rel="noreferrer">
        <figure className="project__screenshot">
          <img
            className="project__screenshot__img"
            src={screenshots[0]}
            alt={name}
          />
        </figure>
        <div className="project__name">
          <strong>{name}</strong>
        </div>
      </a>
    </div>
  );
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  screenshots: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired,
};

export default Project;
