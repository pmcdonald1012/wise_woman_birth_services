import s from "../../styles/Services/PPCCard.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
const PostPartumCareCard = () => {
  return (
    <div className={s.cont}>
      <div className={s.rightCard}>
        <div className={s.img}></div>
      </div>
      <div className={s.leftCard}>
        <div className={s.title}>Postpartum Care</div>
        <div className={s.desc}>
          Wise Woman Birth Services offers postpartum doula support that helps
          families through the first weeks after the birth of their child. The
          postpartum doula’s role is to provide maternal and newborn care in a
          non-medical capacity. Every family has different needs, from daytime
          help with newborn care, meals, laundry, and breastfeeding education,
          to nighttime help so parents can get much needed sleep.
        </div>
        <motion.div
          whileHover={{
            scale: 1.1,
            backgroundColor: "#933466",
            color: "#ffffff",
          }}
        >
          <Link href={"/contact"} className={s.contactBtn}>
            <div className={s.contactBtn}>Contact Now</div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default PostPartumCareCard;
