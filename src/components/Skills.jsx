import PropTypes from 'prop-types';
import '../assets/styles/components/Skills.scss';
import Skill from './Skill';

function Skills({ skills }) {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="container">
        <div className="row">
          {skills.map((skill) => (
            <Skill key={skill._id} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

Skills.propTypes = {
  skills: PropTypes.array.isRequired,
};

export default Skills;
