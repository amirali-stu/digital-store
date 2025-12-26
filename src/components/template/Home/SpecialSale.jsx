import { MdKeyboardArrowDown } from "react-icons/md";
import SpecialSaleItem from "./SpecialSaleItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef, useState } from "react";

const slidesCount = 3;

function SpecialSale() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="mb-40 second-container w-full">
      <div className="bg-white md:h-[448px] max-md:h-auto shadow-[0px_0px_15px] shadow-black/5 rounded-xl p-6 flex items-center md:justify-between max-md:flex-col">
        {/* header - pagination */}

        <div className="bg-white/40 rounded-xl md:h-full h-auto max-md:w-full shadow-[inset_0px_0px_10px] shadow-black/3 p-5 flex items-center justify-between flex-col max-md:flex-row ml-4">
          <h3 className="text-xl text-primary md:hidden w-32">فروش ویژه</h3>

          <div className="md:h-full flex md:flex-col max-md:w-52 justify-between max-md:flex-row">
            <button
              ref={prevRef}
              className="p-4 border cursor-pointer border-primary rounded-xl bg-primary/20 text-primary rotate-180 max-md:-rotate-90"
            >
              <MdKeyboardArrowDown />
            </button>

            <div className="flex items-center flex-col gap-y-2 max-md:rotate-90">
              {Array.from({ length: slidesCount }).map((_, i) => (
                <div
                  key={i}
                  onClick={() => swiperInstance?.slideToLoop(i)}
                  className={`rounded-xl cursor-pointer px-6 py-1 transition-all duration-300 ${
                    activeIndex === i ? "bg-primary" : "bg-Neutral-100"
                  }`}
                />
              ))}
            </div>

            <button
              ref={nextRef}
              className="p-4 border cursor-pointer border-primary rounded-xl bg-primary/20 text-primary max-md:rotate-90"
            >
              <MdKeyboardArrowDown />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={30}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          loop={true}
          className="w-full min-w-0"
        >
          <SwiperSlide>
            <SpecialSaleItem />
          </SwiperSlide>
          <SwiperSlide>
            <SpecialSaleItem />
          </SwiperSlide>
          <SwiperSlide>
            <SpecialSaleItem />
          </SwiperSlide>
        </Swiper>
        {/* <SpecialSaleItem /> */}
      </div>
    </section>
  );
}

export default SpecialSale;
