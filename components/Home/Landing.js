import s from "../../styles/Home/Home.module.css";
import { BirthServicesCard } from "./BirthServicesCard";
import CarouselComp from "./Carousel";
import { PPCCard } from "./PPCCard";
export const Landing = () => {
  return (
    <>
      <div className={s.pinkDiv}>
        <div id={s.whiteDiv}>
          <h3>Wise Woman Birth Services</h3>
          <div id={s.line}></div>
          <p>
            Welcome to Wise Woman Birth Services. I provide birth and postpartum
            doula services. Bringing a baby into this world requires a lot of
            preparation. I am here to help women along that path-the path to
            being a wise woman who is ready to birth her baby and raise her
            child. As a birth doula, I want to be there to help you believe in
            yourself and in your body, remove fear and stress, and be confident
            in your ability to birth. I want to hold space for you. Space to
            achieve the birth you desire. I also am there for you postpartum,
            caring for you and your baby in whatever way you need.
          </p>
        </div>
      </div>
      <h3 id={s.servTitle}>Services</h3>
      <div id={s.servicesContainer}>
        <BirthServicesCard />
        <PPCCard />
      </div>
      <div className={s.tcontainer}>
        <h1>Testimonials</h1>
        <CarouselComp />
      </div>
    </>
  );
};
