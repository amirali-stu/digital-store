import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Categories() {
  return (
    <section className="second-container w-full mb-22">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={8}
        breakpoints={{
          360: {
            slidesPerView: 2.2,
            spaceBetween: 14,
          },
          430: {
            slidesPerView: 2.9,
            spaceBetween: 6,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 8,
          },
          1024: {
            slidesPerView: 6, // پایین‌تر از دسکتاپ: 2 تا کمتر
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 8, // دسکتاپ
            spaceBetween: 10,
          },
        }}
        loop={true}
        className="!py-2 2xl:!px-10"
      >
        <SwiperSlide>
          <div className="bg-fixed-bg border rounded-3xl w-[136px] h-[136px]  border-Neutral-100/30 cursor-pointer transition-all duration-300 hover:-translate-y-2 shadow-[0px_4px_10px] shadow-black/5 flex-center flex-col gap-y-8">
            <ul className="flex items-center gap-x-4 py-3">
              <li className="w-2 h-2 rounded-full bg-blue-600" />
              <li className="w-2 h-2 rounded-full bg-blue-400" />
              <li className="w-2 h-2 rounded-full bg-blue-600" />
            </ul>
            <p>سایر</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-fixed-bg border rounded-3xl w-[136px] h-[136px]  border-Neutral-100/30 cursor-pointer transition-all duration-300 hover:-translate-y-2 shadow-[0px_4px_10px] shadow-black/5 flex-center flex-col gap-y-8">
            <img
              src="images/categories/headphone.png"
              alt="headphone category"
            />
            <p>هدست</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-fixed-bg border rounded-3xl w-[136px] h-[136px]  border-Neutral-100/30 cursor-pointer transition-all duration-300 hover:-translate-y-2 shadow-[0px_4px_10px] shadow-black/5 flex-center flex-col gap-y-8">
            <img
              src="images/categories/smart-phone.png"
              alt="smart-phone category"
            />
            <p>موبایل</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-fixed-bg border rounded-3xl w-[136px] h-[136px]  border-Neutral-100/30 cursor-pointer transition-all duration-300 hover:-translate-y-2 shadow-[0px_4px_10px] shadow-black/5 flex-center flex-col gap-y-8">
            <img src="images/categories/monitor.png" alt="monitor category" />
            <p>مانیتور</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-fixed-bg border rounded-3xl w-[136px] h-[136px]  border-Neutral-100/30 cursor-pointer transition-all duration-300 hover:-translate-y-2 shadow-[0px_4px_10px] shadow-black/5 flex-center flex-col gap-y-8">
            <img src="images/categories/cpu.png" alt="cpu category" />
            <p>لوازم جانبی</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-fixed-bg border rounded-3xl w-[136px] h-[136px]  border-Neutral-100/30 cursor-pointer transition-all duration-300 hover:-translate-y-2 shadow-[0px_4px_10px] shadow-black/5 flex-center flex-col gap-y-8">
            <img src="images/categories/laptop.png" alt="lap top category" />
            <p>لپ تاپ</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-fixed-bg border rounded-3xl w-[136px] h-[136px]  border-Neutral-100/30 cursor-pointer transition-all duration-300 hover:-translate-y-2 shadow-[0px_4px_10px] shadow-black/5 flex-center flex-col gap-y-8">
            <img src="images/categories/clock.png" alt="clock category" />
            <p>ساعت هوشمند</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-fixed-bg border rounded-3xl w-[136px] h-[136px]  border-Neutral-100/30 cursor-pointer transition-all duration-300 hover:-translate-y-2 shadow-[0px_4px_10px] shadow-black/5 flex-center flex-col gap-y-8">
            <img src="images/categories/camera-01.png" alt="camera category" />
            <p>دوربین</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

//  className="flex items-center justify-center flex-row-reverse gap-x-6"
