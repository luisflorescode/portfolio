import PropTypes from 'prop-types';
import '../assets/styles/components/Community.scss';

function Community({ name, rol, photo, url }) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
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
    </div>
  );
}

Community.propTypes = {
  name: PropTypes.string.isRequired,
  rol: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Community;
