import PropTypes from 'prop-types';
import '../assets/styles/components/About.scss';

function About({ photo }) {
  return (
    <section className="about">
      <h2>Acerca de mí</h2>
      <div className="about__content">
        <figure className="about__photo">
          <img className="about__photo__img" src={photo} alt={photo} />
        </figure>
        <article className="about__description">
          <h3 className="about__description__title">
            {/* <span className="about__description__title__logo">&lt;&gt;</span>{' '} */}
            Luis Flores Álvarez
          </h3>
          <section className="about__description__text">
            <p>
              La curiosidad por la tecnología me ha llevado a la programación,
              la cual pienso es una disciplina fundamental para comprender el
              mundo actual.
            </p>
            <br />
            <p>
              Mi interés por realizar desarrollo frontend surge de la
              fascinación por la parte visual e interactiva de contenidos
              digitales que facilitan al usuario interactuar con la tecnología y
              lograr sus propósitos con ella.
            </p>
          </section>
        </article>
      </div>
    </section>
  );
}

About.propTypes = {
  photo: PropTypes.string.isRequired,
};

export default About;
