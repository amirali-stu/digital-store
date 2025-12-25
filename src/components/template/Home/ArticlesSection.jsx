import { LuBookOpenText } from "react-icons/lu";
import { IoIosArrowBack } from "react-icons/io";
import Articles from "./Articles";

export default function ArticlesSection() {
  return (
    <section className="mb-40 second-container w-full">
      {/* header */}
      <div className="w-full flex items-center justify-between">
        <div data-aos="fade-left" className="flex items-center gap-x-2">
          <div className="p-3 inline-flex items-center justify-center rounded-xl bg-white text-primary border border-Neutral-100/30 shadow-[0px_6px_16px] shadow-black/6">
            <LuBookOpenText size={20} />
          </div>
          <h3 className="font-bold text-xl text-[#242424]">مقالات</h3>
        </div>
        <div data-aos="fade-right" className="flex items-center gap-x-4">
          <button className="text-link p-3 rounded-xl border border-Neutral-100/30 shadow-[0px_6px_16px] shadow-black/6 cursor-pointer">
            مشاهده همه
          </button>
          <button className="text-Neutral-800 text-sm transition-all duration-300 hover:text-white hover:bg-Neutral-700 font-bold p-3 rounded-xl border border-Neutral-100/30 shadow-[0px_6px_16px] shadow-black/6 cursor-pointer rotate-180">
            <IoIosArrowBack />
          </button>
          <button className="text-Neutral-800 text-sm transition-all duration-300 hover:text-white hover:bg-Neutral-700 font-bold p-3 rounded-xl border border-Neutral-100/30 shadow-[0px_6px_16px] shadow-black/6 cursor-pointer">
            <IoIosArrowBack />
          </button>
        </div>
      </div>

      {/* products container */}
      <div
        data-aos="zoom-in"
        className="w-full flex items-center gap-x-4 mt-10"
      >
        <Articles />
        <Articles />
        <Articles />
        <Articles />
      </div>
    </section>
  );
}
