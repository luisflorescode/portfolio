import PropTypes from 'prop-types';
import '../assets/styles/components/Communities.scss';
import Community from './Community';

function Communities({ communities }) {
  return (
    <section id="communities" className="communities">
      <h2>Comunidades</h2>
      <div className="container">
        <div className="row">
          {communities.map((community) => (
            <Community key={community._id} {...community} />
          ))}
        </div>
      </div>
    </section>
  );
}

Communities.propTypes = {
  communities: PropTypes.array.isRequired,
};

export default Communities;
