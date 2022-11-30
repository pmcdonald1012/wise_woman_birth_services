import s from "../../styles/Contact/Contact.module.css";
import ContactForm from "./ContactForm";
import Modal from "./Modal";
import { useState } from "react";
const Landing = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={s.cont}>
      <div className={s.getInTouch}>Get In Touch</div>
      <div className={s.subCont}>
        <div className={s.mailLogoCont}>
          <div className={s.logo}></div>
        </div>
        <div className={s.contactFormCont}>
          <div>
            <ContactForm showModal={showModal} setShowModal={setShowModal} />
            <Modal showModal={showModal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
