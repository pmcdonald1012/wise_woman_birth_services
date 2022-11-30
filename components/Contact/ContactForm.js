import { useRef } from "react";
import emailjs from "@emailjs/browser";
import s from "../../styles/Contact/ContactForm.module.css";

const ContactForm = ({ showModal, setShowModal }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setShowModal(true);
    emailjs
      .sendForm(
        "service_x4bqfck",
        "template_zjd6r81",
        form.current,
        "dRrL7dSzvHP1dGxg0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  if (!showModal) {
    return (
      <form ref={form} onSubmit={sendEmail} className={s.form}>
        <label className={s.customField}>
          <input
            className={s.nameInput}
            type="text"
            name="from_name"
            placeholder="Name"
          />
        </label>
        <label className={s.customField}>
          <input
            className={s.emailInput}
            type="email"
            name="user_email"
            placeholder="Your Email"
          />
        </label>
        <label className={s.customField}>
          <textarea
            className={s.messInput}
            name="message"
            placeholder="Message"
          />
        </label>
        <input className={s.submitBtn} type="submit" value="Send"></input>
      </form>
    );
  } else {
    return null;
  }
};

export default ContactForm;
