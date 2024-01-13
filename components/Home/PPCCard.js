import s from "../../styles/Home/Cards.module.css";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
export const PPCCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <Link id={s.link} href="/services">
      <div
        ref={ref}
        className={s.container}
        style={{
          transform: isInView ? "none" : "translateX(25rem)",
          opacity: isInView ? 1 : 0,
          transition: "1s",
        }}
      >
        <motion.div whileHover={{ scale: 1.1 }}>
          <div id={s.title}>Postpartum Care</div>
          <div id={s.img1}></div>
        </motion.div>
      </div>
    </Link>
  );
};
