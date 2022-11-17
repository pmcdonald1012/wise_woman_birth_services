import s from "../../styles/Home/Home.module.css";
import { BirthServicesCard } from "./BirthServicesCard";
import CarouselComp from "./Carousel";
import { PPCCard } from "./PPCCard";
export const Landing = () => {
  return (
    <>
      <div className={s.pinkDiv}>
        <div id={s.whiteDiv}>
          <h3>Wise Wise Woman Birth Services</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. At
            consectetur lorem donec massa sapien faucibus. Accumsan lacus vel
            facilisis volutpat. Purus faucibus ornare suspendisse sed nisi lacus
            sed viverra tellus. Blandit turpis cursus in hac habitasse platea
            dictumst quisque sagittis. Justo laoreet sit amet cursus. Turpis
            egestas sed tempus urna et pharetra. Hac habitasse platea dictumst
            vestibulum rhoncus. Sit amet dictum sit amet justo donec enim diam
            vulputate. Ut etiam sit amet nisl purus in mollis nunc. Vel pharetra
            vel turpis nunc eget lorem. Id cursus metus aliquam eleifend mi.
          </p>
        </div>
        <h3>Services</h3>
      </div>
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
