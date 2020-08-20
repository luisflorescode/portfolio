import PropTypes from 'prop-types';

const Carousel = ({ images }) => (
  <div
    id="carouselExampleControls"
    className="carousel slide"
    data-ride="carousel"
  >
    <div className="carousel-inner">
      {images.map((image) => (
        <div
          key={image}
          className={`carousel-item${image === images[0] ? ' active' : ''}`}
        >
          <img className="d-block w-100" src={image} alt={image} />
        </div>
      ))}
    </div>
    <a
      className="carousel-control-prev"
      href="#carouselExampleControls"
      role="button"
      data-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a
      className="carousel-control-next"
      href="#carouselExampleControls"
      role="button"
      data-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
);

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Carousel;
