import { GoArrowLeft } from "react-icons/go";
import AmazingDiscountProduct from "./AmazingDiscountProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function AmazingDiscounts() {
  return (
    <section className="second-container w-full mb-40">
      <div className="w-full rounded-4xl bg-blue-500 lg:h-[420px] h-[480px] flex lg:items-center max-lg:flex-col p-4 overflow-x-hidden ">
        <div className="rounded-lg lg:border-l-4 lg:w-[240px] w-full lg:h-full lg:border-l-white pl-4 flex lg:flex-col justify-between">
          <div
            
            className="inline-flex max-lg:h-12 lg:rounded-2xl rounded-xl bg-white lg:p-8 p-2 lg:flex-col items-center lg:gap-y-4 gap-x-2"
          >
            <img
              src="images/discount/image-sale.svg"
              alt="discount product"
              className="w-[68px] h-[68px] p-4 bg-blue-500 rounded-2xl max-lg:hidden"
            />

            <h3 className="lg:text-4xl text-lg lg:font-bold lg:max-w-[134px] text-center text-wrap text-blue-600">
              تخفیفات شگفت انگیر
            </h3>
          </div>
          <button
            
            className="bg-white max-lg:h-12 lg:rounded-3xl rounded-xl border border-Neutral-100/20 inline-flex items-center justify-center gap-x-2 lg:p-3.5 p-2 cursor-pointer"
          >
            <p>مشاهده همه</p> <GoArrowLeft />
          </button>
        </div>

        <div className="w-full overflow-x-hidden">
          <Swiper
            slidesPerView="auto"
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="!w-full !h-full lg:!mr-5 max-lg:!py-3"
          >
            <SwiperSlide className="!w-[280px]">
              <AmazingDiscountProduct />
            </SwiperSlide>
            <SwiperSlide className="!w-[280px]">
              <AmazingDiscountProduct />
            </SwiperSlide>
            <SwiperSlide className="!w-[280px]">
              <AmazingDiscountProduct />
            </SwiperSlide>
            <SwiperSlide className="!w-[280px]">
              <AmazingDiscountProduct />
            </SwiperSlide>
            <SwiperSlide className="!w-[280px]">
              <AmazingDiscountProduct />
            </SwiperSlide>
            <SwiperSlide className="!w-[280px]">
              <AmazingDiscountProduct />
            </SwiperSlide>
            <SwiperSlide className="!w-[280px]">
              <AmazingDiscountProduct />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
