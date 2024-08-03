// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCreative } from "swiper/modules";

import styled from "@emotion/styled";

const Image = styled.img`
  width: 100%;
  height: auto;
`;

export default function Swipper() {
  return (
    <>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        creativeEffect={{
          prev: {
            shadow: true,
            origin: "left center",
            translate: ["-10%", 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: "right center",
            translate: ["10%", 0, -200],
            rotate: [0, -100, 0],
          },
        }}
        modules={[EffectCreative, Autoplay]}
        className="mySwiper6"
      >
        <SwiperSlide>
          <Image src="img1.jpg" alt="img-ads" className="responsive-img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="img2.jpg" alt="img-ads" className="responsive-img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="img3.jpg" alt="img-ads" className="responsive-img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="img4.jpg" alt="img-ads" className="responsive-img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="img5.jpg" alt="img-ads" className="responsive-img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="img7.jpg" alt="img-ads" className="responsive-img" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
