import { Swiper, SwiperSlide } from 'swiper/react';
// import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

export default function Banner() {
  return (
    <div className="max-w-7xl mx-auto mt-5 px-3 lg:px-0">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return (
              '<span class="' +
              className +
              '" style="background-color: white;"></span>'
            );
          },
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/banner.jpg" alt="banner-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/banner.jpg" alt="banner-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/banner.jpg" alt="banner-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/banner.jpg" alt="banner-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/banner.jpg" alt="banner-img" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
