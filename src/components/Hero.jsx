import PropTypes from 'prop-types';
import '../assets/styles/components/Hero.scss';

function Hero({ background }) {
  return (
    <section className="hero">
      <img className="hero__background" src={background} alt="Hero" />
      <div className="hero__content">
        <strong className="hero__content__title">Frontend Developer</strong>
      </div>
    </section>
  );
}

Hero.propTypes = {
  background: PropTypes.string.isRequired,
};

export default Hero;
