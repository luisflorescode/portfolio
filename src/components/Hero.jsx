import PropTypes from 'prop-types';
import '../assets/styles/components/Hero.scss';

function Hero({ background }) {
  return (
    <section className="hero">
      <img className="hero__background" src={background} alt="Hero" />
      <div className="hero__content">
        <h1 className="hero__content__title">Frontend Developer</h1>
      </div>
    </section>
  );
}

Hero.propTypes = {
  background: PropTypes.string.isRequired,
};

export default Hero;
