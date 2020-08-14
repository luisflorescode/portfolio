import PropTypes from 'prop-types';
import '../assets/styles/components/Communities.scss';
import Community from './Community';

function Communities({ communities }) {
  return (
    <section className="communities">
      <h2>Comunidades</h2>
      <div className="communities__content">
        {communities.map((community) => (
          <Community key={community._id} {...community} />
        ))}
      </div>
    </section>
  );
}

Communities.propTypes = {
  communities: PropTypes.array.isRequired,
};

export default Communities;
