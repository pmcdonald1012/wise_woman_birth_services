import s from "../../styles/Contact/Contact.module.css";
import ContactForm from "./ContactForm";
import { useState } from "react";
import ContactModal from "./Modal";
const Landing = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className={s.cont}>
        <div className={s.getInTouch}>Get In Touch</div>
        <div className={s.subCont}>
          <div className={s.mailLogoCont}>
            <div className={s.logo}></div>
          </div>
          <div className={s.contactFormCont}>
            <div>
              <ContactForm setShowModal={setShowModal} showModal={showModal} />
            </div>
          </div>
        </div>
      </div>
      <ContactModal
        showModal={showModal}
        setShowModal={setShowModal}
        onHide={() => setShowModal(false)}
      />
      <div className={s.crContainer}>
        <h3>© 2023 Wise Woman Birth Services. All Rights Reserved.</h3>
      </div>
    </>
  );
};

export default Landing;
