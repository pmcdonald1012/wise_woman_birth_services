import s from "../../styles/Home/Home.module.css";
import { motion, transform } from "framer-motion";
import Link from "next/link";
import { withRouter } from "next/router";
export const ContactBtn = () => {
  return (
    <Link className={s.ContactBtn2} href="/contact">
      <motion.div
        className={s.contactBtn}
        whileHover={{ scale: 1.1, backgroundColor: "#933466", color: "white" }}
      >
        <btn>Contact Now!</btn>
      </motion.div>
    </Link>
  );
};
