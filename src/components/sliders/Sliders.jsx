import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Sliders = () => {
  return (
    <Swiper
      centeredSlides
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      slidesPerView={1}
      loop
      effect="fade"
      fadeEffect={{
        crossFade: true,
      }}
    >
      <SwiperSlide>slider 1</SwiperSlide>
      <SwiperSlide>slider 2</SwiperSlide>
      <SwiperSlide>slider 3</SwiperSlide>
      <SwiperSlide>slider 4</SwiperSlide>
      <SwiperSlide>slider 5</SwiperSlide>
    </Swiper>
  );
};

export default Sliders;
