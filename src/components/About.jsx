import PropTypes from 'prop-types';
import '../assets/styles/components/About.scss';

function About({ photo, description }) {
  return (
    <section className="about">
      <h2>Acerca de mí</h2>
      <div className="about__content">
        <figure className="about__photo">
          <img className="about__photo__img" src={photo} alt={photo} />
        </figure>
        <article className="about__description">
          <h3 className="about__description__title">
            <span className="about__description__title__logo">&lt;&gt;</span>{' '}
            Luis Flores Álvarez
          </h3>
          <section className="about__description__text">
            <p>{description}</p>
          </section>
        </article>
      </div>
    </section>
  );
}

About.propTypes = {
  photo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default About;
