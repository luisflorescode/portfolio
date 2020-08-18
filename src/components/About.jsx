import PropTypes from 'prop-types';
import '../assets/styles/components/About.scss';

function About({ photo, description }) {
  return (
    <section id="about" className="about">
      <h2>Acerca de mí</h2>
      <div className="container about__content">
        <div className="row justify-content-center align-items-center">
          <figure className="col-7 col-lg-5 mt-4 mb-4 about__photo">
            <img className="about__photo__img" src={photo} alt={photo} />
          </figure>
          <div className="col-12 col-lg-7 align-self-center">
            <article className="about__description">
              <h3 className="about__description__title">
                <span className="about__description__title__logo">
                  &lt;&gt;
                </span>{' '}
                Luis Flores Álvarez
              </h3>
              <section className="about__description__text">
                <p>{description}</p>
              </section>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

About.propTypes = {
  photo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default About;
