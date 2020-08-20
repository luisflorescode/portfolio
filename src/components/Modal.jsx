import { useContext } from 'react';
import PropTypes from 'prop-types';
import ModalContext from '../context/ModalContext';
import '../assets/styles/components/Modal.scss';
import Close from '../assets/icons/close.svg';

const Modal = ({ children }) => {
  const { setModal } = useContext(ModalContext);

  const closeModal = () => {
    setModal({ isOpen: false, projectId: '' });
  };

  return (
    <div className="modal">
      <figure onClick={closeModal} className="modal__close">
        <Close className="modal__close-icon" />
      </figure>
      {children}
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Modal;
