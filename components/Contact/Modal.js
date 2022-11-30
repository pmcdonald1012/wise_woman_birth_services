import s from "../../styles/Contact/Modal.module.css";
const Modal = ({ showModal, setShowModal }) => {
  if (showModal) {
    return <div className={s.cont}>Modal</div>;
  } else {
    return null;
  }
};

export default Modal;
