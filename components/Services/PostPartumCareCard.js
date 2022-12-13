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
        <div className={s.title}>Post-Partum Care</div>
        <div className={s.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
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
