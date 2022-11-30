import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import s from "../../styles/Contact/ContactForm.module.css";

const ContactForm = ({ setModalShow }) => {
  const [hasValue, sethasValue] = useState("");
  const [hasValue2, sethasValue2] = useState("");
  const [hasValue3, sethasValue3] = useState("");
  const [noValue, setNoValue] = useState(true);

  const form = useRef();

  useEffect(() => {
    if (hasValue && hasValue2 && hasValue3) {
      setNoValue(false);
    } else {
      setNoValue(true);
    }
    console.log(noValue);
  }, [hasValue, hasValue2, hasValue3]);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!noValue) {
      e.target.value = "";
      emailjs
        .sendForm(
          "service_x4bqfck",
          "template_zjd6r81",
          form.current,
          "dRrL7dSzvHP1dGxg0"
        )
        .then(
          (result) => {
            setModalShow(true);
            sethasValue("");
            sethasValue2("");
            sethasValue3("");
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      setNoValue(true);
    }
  };

  const handleChange = (event) => {
    sethasValue(event.target.value);
  };
  const handleChange2 = (event) => {
    sethasValue2(event.target.value);
  };
  const handleChange3 = (event) => {
    sethasValue3(event.target.value);
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={s.form}>
      <label className={s.customField}>
        <input
          className={s.nameInput}
          type="text"
          name="from_name"
          placeholder="Name"
          onChange={handleChange}
          value={hasValue}
        />
      </label>
      <label className={s.customField}>
        <input
          className={s.emailInput}
          type="email"
          name="user_email"
          placeholder="Your Email"
          onChange={handleChange2}
          value={hasValue2}
        />
      </label>
      <label className={s.customField}>
        <textarea
          className={s.messInput}
          name="message"
          placeholder="Message"
          onChange={handleChange3}
          value={hasValue3}
        />
      </label>
      <div>{noValue ? "Please fill out all information" : null} </div>
      <input className={s.submitBtn} type="submit" value="Send"></input>
    </form>
  );
};

export default ContactForm;
