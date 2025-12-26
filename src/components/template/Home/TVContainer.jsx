import { MdOutlineMovieFilter } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import LatestProductTemplate from "./LatestProductTemplate";
import TVItem from "./TVItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { Autoplay, Navigation } from "swiper/modules";

export default function TVContainer() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="mb-40 second-container w-full">
      {/* header */}
      <div className="w-full flex items-center justify-between">
        <div  className="flex items-center gap-x-2">
          <div className="p-3 inline-flex items-center justify-center rounded-xl bg-white text-primary border border-Neutral-100/30 shadow-[0px_6px_16px] shadow-black/6">
            <MdOutlineMovieFilter size={20} />
          </div>
          <h3 className="font-bold text-xl text-[#242424]">تلوزیون</h3>
        </div>
        <div className="flex items-center gap-x-4">
          <button className="text-link p-3 rounded-xl border border-Neutral-100/30 shadow-[0px_6px_16px] shadow-black/6 cursor-pointer max-sm:hidden">
            مشاهده همه
          </button>
          <button
            ref={prevRef}
            className="text-Neutral-800 text-sm transition-all duration-300 hover:text-white hover:bg-Neutral-700 font-bold p-3 rounded-xl border border-Neutral-100/30 shadow-[0px_6px_16px] shadow-black/6 cursor-pointer rotate-180"
          >
            <IoIosArrowBack />
          </button>
          <button
            ref={nextRef}
            className="text-Neutral-800 text-sm transition-all duration-300 hover:text-white hover:bg-Neutral-700 font-bold p-3 rounded-xl border border-Neutral-100/30 shadow-[0px_6px_16px] shadow-black/6 cursor-pointer"
          >
            <IoIosArrowBack />
          </button>
        </div>
      </div>

      {/* products container */}
      <div className="w-full overflow-x-hidden">
        <Swiper
          spaceBetween={10}
          slidesPerView="auto"
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="!w-full !h-full !py-5"
        >
          <SwiperSlide className="!w-[360px]">
            <TVItem />
          </SwiperSlide>
          <SwiperSlide className="!w-[360px]">
            <TVItem />
          </SwiperSlide>
          <SwiperSlide className="!w-[360px]">
            <TVItem />
          </SwiperSlide>
          <SwiperSlide className="!w-[360px]">
            <TVItem />
          </SwiperSlide>
          <SwiperSlide className="!w-[360px]">
            <TVItem />
          </SwiperSlide>
          <SwiperSlide className="!w-[360px]">
            <TVItem />
          </SwiperSlide>
          <SwiperSlide className="!w-[360px]">
            <TVItem />
          </SwiperSlide>
          <SwiperSlide className="!w-[360px]">
            <TVItem />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
