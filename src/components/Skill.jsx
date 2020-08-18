import PropTypes from 'prop-types';
import '../assets/styles/components/Skill.scss';

function Skill({ logo, name }) {
  return (
    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mt-3 mb-3">
      <figure className="skill">
        <div className="skill__logo">
          <img className="skill__logo__img" src={logo} alt={name} />
        </div>
        <figcaption className="skill__name">{name}</figcaption>
      </figure>
    </div>
  );
}

Skill.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Skill;
