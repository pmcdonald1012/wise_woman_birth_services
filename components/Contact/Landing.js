import s from "../../styles/Contact/Contact.module.css";
import ContactForm from "./ContactForm";
import { useState } from "react";
import ContactModal from "./Modal";
const Landing = () => {
  const [modalShow, setModalShow] = useState(false);
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
              <ContactForm setModalShow={setModalShow} modalShow={modalShow} />
            </div>
          </div>
        </div>
      </div>
      <ContactModal
        modalShow={modalShow}
        setModalShow={setModalShow}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Landing;
