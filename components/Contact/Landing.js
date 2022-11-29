import s from "../../styles/Contact/Contact.module.css";
import ContactForm from "./ContactForm";
const Landing = () => {
  return (
    <div className={s.cont}>
      <div className={s.getInTouch}>Get In Touch</div>
      <div className={s.subCont}>
        <div className={s.mailLogoCont}>
          <div className={s.logo}></div>
        </div>
        <div className={s.contactFormCont}>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
