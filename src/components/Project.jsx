import PropTypes from 'prop-types';
import { useContext } from 'react';
import ModalContext from '../context/ModalContext';
import '../assets/styles/components/Project.scss';

function Project({ _id, name, screenshots }) {
  const { setModal } = useContext(ModalContext);

  const openProjectDetail = () => {
    setModal({ isOpen: true, projectId: _id });
  };

  return (
    <div className="col-12 col-md-6 col-lg-4 mt-3 mb-3">
      <div
        onClick={openProjectDetail}
        role="button"
        tabIndex="0"
        className="project"
      >
        <figure className="project__screenshot">
          <img
            className="project__screenshot__img"
            src={screenshots[0]}
            alt={name}
          />
        </figure>
        <div className="project__name">
          <strong>{name}</strong>
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  screenshots: PropTypes.array.isRequired,
};

export default Project;
