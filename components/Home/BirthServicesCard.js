import s from "../../styles/Home/Cards.module.css";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
export const BirthServicesCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <Link id={s.link} href="/services">
      <div
        ref={ref}
        className={s.container}
        style={{
          transform: isInView ? "none" : "translateX(-25rem)",
          opacity: isInView ? 1 : 0,
          transition: "1s",
        }}
      >
        <motion.div whileHover={{ scale: 1.1 }}>
          <div id={s.title}>Birth Services</div>
          <div id={s.img}></div>
        </motion.div>
      </div>
    </Link>
  );
};
