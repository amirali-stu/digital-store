import { TiUserOutline } from "react-icons/ti";
import { IoEyeOutline } from "react-icons/io5";
import { LuBookOpenText, LuCalendarDays } from "react-icons/lu";

export default function Articles() {
  return (
    <div className="w-[288px] h-[421px] relative rounded-xl bg-white border border-Neutral-100/30 p-4 shadow-[0px_14px_15px_0px] shadow-black/4">
      <img
        src="images/articles/airpad.png"
        alt="products image"
        className="h-[144px] w-full rounded-2xl object-cover"
      />

      {/* title,body */}
      <div className="flex flex-col gap-y-3 mt-3">
        <h4 className="text-lg text-black h-[24px] text-wrap line-clamp-2">
          نکات خرید هدست اصل یا تقلبی
        </h4>

        <p className="text-Neutral-800 !font-extralight line-clamp-3 text-wrap">
          نکات مهم برای تشخیص و خرید هدست اصل یا تقلبی با گسترش بازار لوازم
          جانبی دیجیتال، هدست‌ها و هدفون‌های بی‌سیم […]
        </p>
      </div>

      {/* creator */}
      <div className="w-full flex items-center justify-between border-b border-b-Neutral-100/40 py-4 pt-8 pb-2">
        <div className="text-Neutral-300 text-lg flex items-center gap-x-1">
          <TiUserOutline size={24} />
          <span>نیلوفر وفایی</span>
        </div>

        <div className="text-Neutral-300 text-lg flex items-center gap-x-1">
          <span>111</span>
          <IoEyeOutline size={24} />
        </div>
      </div>

      {/* footer */}
      <div className="w-full flex items-center py-3 justify-between">
        <div className="flex items-start flex-col">
          <p className="text-Neutral-100 text-sm">زمان مطالعه</p>
          <p className="text-Neutral-300">1 دقیقه</p>
        </div>
        <button className="flex-center gap-x-2 py-3 px-4 cursor-pointer bg-primary/20 text-primary rounded-xl">
          <span>مطالعه</span>
          <LuBookOpenText size={20} />
        </button>
      </div>

      {/* created at */}
      <div className="bg-white rounded-lg text-[#242424] p-1 flex items-center gap-x-1 absolute top-6 right-6">

        <LuCalendarDays />


<span>1 سال پیش</span>
      </div>
    </div>
  );
}
