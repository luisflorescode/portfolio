import '../assets/styles/components/Hero.scss';

function Hero() {
  return (
    <section className="hero">
      <img
        className="hero__background"
        src="https://i.imgur.com/fZHMjHe.jpg"
        alt="Hero"
      />
      <div className="hero__content">
        <strong className="hero__content__title">Frontend Developer</strong>
      </div>
    </section>
  );
}

export default Hero;
