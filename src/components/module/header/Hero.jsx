import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

function HeroSection() {
  return (
    <section
      
      className="second-container w-full block my-4 mb-22"
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000, // هر ۳ ثانیه
          disableOnInteraction: false, // بعد از کلیک کاربر متوقف نشه
        }}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <img src="images/banner/slider1.png" className="w-full h-full rounded-xl" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="images/banner/slider2.png" className="w-full h-full rounded-xl" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default HeroSection;
