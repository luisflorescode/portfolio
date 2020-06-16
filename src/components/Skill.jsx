import PropTypes from 'prop-types';
import '../assets/styles/components/Skill.scss';

function Skill({ logo, name }) {
  return (
    <figure className="skill">
      <div className="skill__logo">
        <img className="skill__logo__img" src={logo} alt={name} />
      </div>
      <figcaption className="skill__title">{name}</figcaption>
    </figure>
  );
}

Skill.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Skill;
