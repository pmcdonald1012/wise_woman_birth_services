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
                  Ornare aenean euismod elementum nisi quis. Quam quisque id
                  diam vel quam elementum pulvinar etiam non. Libero id faucibus
                  nisl tincidunt eget. tempus urna et pharetra pharetra massa
                  massa.
                </p>
                <h3>Erica</h3>
              </div>
            </div>
            <div className={s.embla__slide}>
              <div className={s.slide_container}>
                <p>
                  Ornare elementum nisi quis. Quam quisque id diam vel quam
                  elementum pulvinar etiam non. Libero id faucibus nisl
                  tincidunt eget. Egestas sed tempus urna et pharetra pharetra
                  massa massa.
                </p>
                <h3>Marty</h3>
              </div>
            </div>
            <div className={s.embla__slide}>
              <div className={s.slide_container}>
                <p>
                  Ornare aenean euismod elementum nisi quis. Quam quisque id
                  diam vel quam elementum pulvinar etiam non. Libero id faucibus
                  nisl tincidunt eget. Egestas sed tempus urna et pharetra
                  pharetra massa massa.
                </p>
                <h3>Jason</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselComp;
