import PropTypes from 'prop-types';
import '../assets/styles/components/Skills.scss';
import Skill from './Skill';

function Skills({ skills }) {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills__content">
        {skills.map((skill) => (
          <Skill key={skill.name} {...skill} />
        ))}
      </div>
    </section>
  );
}

Skills.propTypes = {
  skills: PropTypes.array.isRequired,
};

export default Skills;
