import PropTypes from 'prop-types';
import '../assets/styles/components/Community.scss';

function Community({ name, rol, photo, url }) {
  return (
    <a className="community" href={url} target="_blank" rel="noreferrer">
      <figure className="community__photo">
        <img className="community__photo__img" src={photo} alt={name} />
      </figure>
      <div className="community__data">
        <strong>{name}</strong>
        <br />
        <span>{rol}</span>
      </div>
    </a>
  );
}

Community.propTypes = {
  name: PropTypes.string.isRequired,
  rol: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Community;
