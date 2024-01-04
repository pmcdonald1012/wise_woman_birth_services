import s from "../../styles/Services/BirthServicesCard.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
const BirthServicesCard = () => {
  return (
    <div className={s.cont}>
      <div className={s.leftCard}>
        <div className={s.title}>Birth Services</div>
        <div className={s.desc}>
          Wise Woman Birth Services offers birth doula services in the metro
          Denver area and up to 30 miles north of Denver. Services include
          physical, emotional, and educational support throughout your
          pregnancy, labor and birth of your baby. Training and preparation will
          occur before you go into labor and continuous support will be present
          the entire time either at your home or
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
      <div className={s.rightCard}>
        <div className={s.img}></div>
      </div>
    </div>
  );
};

export default BirthServicesCard;
