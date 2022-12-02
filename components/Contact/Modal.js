import s from "../../styles/Contact/Modal.module.css";
import { motion } from "framer-motion";
const ContactModal = ({ showModal, onHide }) => {
  if (!showModal) return null;

  return (
    <>
      <div className={s.overlay}>
        <div className={s.blur}></div>
      </div>
      <div className={s.modal}>
        <h1>Thank You!</h1>
        <h2>Your messsage has been sent!</h2>

        <motion.button
          onClick={onHide}
          className={s.closeBtn}
          whileHover={{
            scale: 1.1,
            backgroundColor: "white",
            color: "#933466",
          }}
        >
          <div>Okay</div>
        </motion.button>
      </div>
    </>
  );
};

export default ContactModal;
