import { GoSearch } from "react-icons/go";
import { TbShoppingCart } from "react-icons/tb";
import { LuLogIn } from "react-icons/lu";
import { useState } from "react";

export default function TopHeader() {
  const [focusOnSearchInput, setFocusOnSearchInput] = useState(false);

  return (
    <div className="second-container flex items-center justify-between py-4 border-b border-Neutral-100/50">
      <div className="flex items-center gap-x-4">
        <button
          data-aos="fade-left"
          className="bg-[#69BCF4] font-semibold text-lg
         text-white flex items-center gap-x-1 p-2 rounded-xl cursor-pointer"
        >
          <img src="images/phone-icon.svg" className="w-8 h-8" />
          اولترا مارکت
        </button>
        <div
          data-aos="fade-left"
          className={`border h-10 w-96 p-3 border-Neutral-100 rounded-xl bg-Neutral-50 flex items-center gap-x-2 transition-all duration-300 ${
            focusOnSearchInput
              ? "bg-white shadow-[0px_0px_15px] shadow-blue-300"
              : ""
          }`}
          onClick={() => setFocusOnSearchInput(!focusOnSearchInput)}
        >
          <button type="submit" className="cursor-pointer text-xl">
            <GoSearch />
          </button>
          <input
            type="text"
            className="outline-0 bg-transparent border-0 w-full h-full text-sm placeholder:text-Neutral-700 text-black leading-5"
            placeholder="جستجوی نام کالا، برند ویا ..."
          />
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <div data-aos="fade-right" className="p-2 border border-Neutral-100 text-blue-400 flex-center rounded-xl text-xl">
          <TbShoppingCart />
        </div>
        <a data-aos="fade-right" href="#">
          <div className="py-2 px-4 border cursor-pointer rounded-xl border-Neutral-100 text-Neutral-800 flex-center gap-x-2">
            <span>ورود / ثبت نام</span>
            <LuLogIn className="rotate-180" />
          </div>
        </a>
      </div>
    </div>
  );
}
