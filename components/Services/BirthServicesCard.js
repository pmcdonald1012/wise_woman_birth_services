import s from "../../styles/Services/BirthServicesCard.module.css";
const BirthServicesCard = () => {
  return (
    <div className={s.cont}>
      <div className={s.leftCard}>
        <div className={s.title}>Birth Services</div>
        <div className={s.desc}>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className={s.contactBtn}>Contact Now</div>
      </div>
      <div className={s.rightCard}>
        <div className={s.img}></div>
      </div>
    </div>
  );
};

export default BirthServicesCard;
