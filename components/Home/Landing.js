import Image from "next/image";
import BabyFeet from "../../public/BabyFeet.jpg";
import s from "../../styles/Home/Home.module.css";
export const Landing = () => {
  return (
    <div className={s.imgContainer}>
      <Image src={BabyFeet} alt="Logo" width={1200} height={587} />
    </div>
  );
};
