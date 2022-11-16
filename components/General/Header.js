import s from "../../styles/General/Header.module.css";
import Logo from "../../public/Logo.png";
import Image from "next/image";
import { Beau_Rivage } from "@next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";
const inter = Beau_Rivage({ weight: "400" });
const Header = () => {
  return (
    <>
      <div className={s.semicircle}>
        <Image
          className={s.logo}
          src={Logo}
          alt="Logo"
          width={85}
          height={137}
        />
        <div className={s.namecontainer}>
          <h2 className={inter.className}>Wise Woman</h2>
          <h3 className={inter.className}>Birth Services</h3>
        </div>
      </div>
      <div className={s.subcontainer}>
        <motion.h2
          className={s.btn}
          whileHover={{
            color: "#933466",
            scale: 1.2,
            borderBottomColor: "#933466",
          }}
          id={s.home_btn}
        >
          <Link className={s.link} href="/">
            Home
          </Link>
        </motion.h2>
        <motion.h2
          className={s.btn}
          whileHover={{
            color: "#933466",
            scale: 1.2,
            borderBottomColor: "#933466",
          }}
          id={s.about_btn}
        >
          <Link className={s.link} href="/about">
            About
          </Link>
        </motion.h2>
        <div id={s.spacer}></div>
        <div id={s.spacer}></div>
        <div id={s.spacer}></div>
        <motion.h2
          className={s.btn}
          whileHover={{
            color: "#933466",
            scale: 1.2,
            borderBottomColor: "#933466",
          }}
          id={s.services_btn}
        >
          <Link className={s.link} href="/services">
            Services
          </Link>
        </motion.h2>
        <motion.h2
          className={s.btn}
          whileHover={{
            color: "#933466",
            scale: 1.2,
            borderBottomColor: "#933466",
          }}
          id={s.contact_btn}
        >
          <Link className={s.link} href="/contact">
            Contact
          </Link>
        </motion.h2>
      </div>
    </>
  );
};

export default Header;
