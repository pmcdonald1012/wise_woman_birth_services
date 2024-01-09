import useEmblaCarousel from "embla-carousel-react";
import React, { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import s from "../../styles/Home/Carousel.module.css";
const CarouselComp = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
    }
  }, [emblaApi]);
  return (
    <>
      <div className={s.container}>
        <div className={s.embla} ref={emblaRef}>
          <div className={s.embla__container}>
            <div className={s.embla__slide}>
              <div className={s.slide_container}>
                <p>
                  We had a fantastic experience with Lisa. she is one of a kind.
                  Very laid back and so easy to get along with. Lisa went above
                  and beyond to visit us at home, make sure we were prepared for
                  our unmedicated hospital birth and to provide comfort and
                  support where we needed it. She is amazing and I highly
                  recommend her as a doula to any family.
                </p>
                <h3>~L.K.</h3>
              </div>
            </div>
            <div className={s.embla__slide}>
              <div className={s.slide_container}>
                <p>
                  Once my husband and I decided that we wanted to consider
                  hiring a doula we knew the right person for our family was
                  Lisa. From the very beginning she put us at ease, educated us
                  and made pregnancy then labor and delivery during a pandemic a
                  little easier.
                </p>
                <h3>~C.W.</h3>
              </div>
            </div>
            <div className={s.embla__slide}>
              <div className={s.slide_container}>
                <p>
                  Lisa McDonald was an amazing doula during my last few weeks of
                  pregnancy and especially during labor. Since this was my first
                  child, I had almost no idea on how to approach the impending
                  birth. I knew I wanted it to be a natural birth, but I also
                  knew I was going to be delivering in a hospital. Lisa listened
                  to my wants and concerns as an experienced mother and
                  knowledgeable doula, giving me many resources on how to
                  prepare myself for a natural labor and how to minimize time
                  spent at the hospital.
                </p>
                <h3>~M.P.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselComp;
