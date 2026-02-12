import { GoSearch } from "react-icons/go";
import { TbShoppingCart } from "react-icons/tb";
import { LuLogIn } from "react-icons/lu";
import { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { IoMenu, IoClose } from "react-icons/io5";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function TopHeader() {
  const [focusOnSearchInput, setFocusOnSearchInput] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <div className="second-container">
      <div className="flex items-center justify-between py-4 border-b border-Neutral-100/50 max-md:hidden">
        <div className="flex items-center gap-x-4">
          <button
            className="bg-[#69BCF4] font-semibold text-lg
         text-white flex items-center gap-x-1 p-2 rounded-xl cursor-pointer"
          >
            <img src="images/phone-icon.svg" className="w-8 h-8" />
            اولترا مارکت
          </button>
          <div
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
          <div className="p-2 border border-Neutral-100 text-blue-400 flex-center rounded-xl text-xl">
            <TbShoppingCart />
          </div>
          <a href="#">
            <div className="py-2 px-4 border cursor-pointer rounded-xl border-Neutral-100 text-Neutral-800 flex-center gap-x-2">
              <span>ورود / ثبت نام</span>
              <LuLogIn className="rotate-180" />
            </div>
          </a>
        </div>
      </div>
      <div className="flex items-center justify-between py-2 md:hidden">
        <IoMenu
          size={20}
          className="text-secondary"
          onClick={() => setSidebarActive(!sidebarActive)}
        />
        <div className="flex items-center gap-x-2">
          <img
            src="images/phone-icon.svg"
            className="w-4 rounded-xs bg-secondary"
          />
          <h2 className="text-lg">اولترا مارکت</h2>
        </div>
        <LuSearch size={20} className="text-secondary" />

        <div
          className={`fixed top-0 right-0 h-screen w-80 shadow-[0px_5px_10px] shadow-black bg-white z-40
  transform transition-transform duration-300 ease-in-out p-4
  ${sidebarActive ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="w-full flex item-content justify-between **:text-secondary">
            <div>
              <h3 className="text-2xl">دیجی اولترا</h3>
            </div>
            <IoClose size={22} />
          </div>

          <ul className="w-full flex flex-col gap-y-4 mt-8">
            <li className="overflow-hidden">
              <div className="p-3 flex item-content justify-between w-full border-2 border-Neutral-50 rounded-lg text-Neutral-800">
                <p>لوازم جانبی</p>
                <MdKeyboardArrowLeft />
              </div>

              <div>d</div>
            </li>
            <li className="p-3 flex item-content justify-between w-full border-2 border-Neutral-50 rounded-lg text-Neutral-800">
              <p>لوازم جانبی</p>
              <MdKeyboardArrowLeft />
            </li>
            <li className="p-3 flex item-content justify-between w-full border-2 border-Neutral-50 rounded-lg text-Neutral-800">
              <p>ساعت هوشمند</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
