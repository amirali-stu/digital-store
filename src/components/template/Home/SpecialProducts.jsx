import { MdOutlineMovieFilter } from "react-icons/md";
import SpecialProductsTemplate from "./SpecialProductsTemplate";

export default function SpecialProducts() {
  return (
    <section className="mb-40 second-container w-full">
      {/* header */}
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <div className="p-3 inline-flex items-center justify-center rounded-xl bg-white text-primary border border-Neutral-100/30 shadow-[0px_6px_16px] shadow-black/6">
            <MdOutlineMovieFilter size={20} />
          </div>
          <h3 className="font-bold text-xl text-[#242424]">محصولات ویژه</h3>
        </div>
        <div  className="flex items-center gap-x-4">
          <button className="text-link p-3 rounded-xl border border-Neutral-100/30 shadow-[0px_6px_16px] shadow-black/6 cursor-pointer">
            مشاهده همه
          </button>
        </div>
      </div>

      {/* products container */}
      <div
        
        className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10"
      >
        <SpecialProductsTemplate />
        <SpecialProductsTemplate />
        <SpecialProductsTemplate />
        <SpecialProductsTemplate />
      </div>
    </section>
  );
}
