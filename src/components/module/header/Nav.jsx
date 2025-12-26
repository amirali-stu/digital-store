import { IoMenuOutline } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { LiaPhoneVolumeSolid } from "react-icons/lia";

export default function NavHeader() {
  return (
    <div className="second-container flex items-center justify-between py-4 border-b border-Neutral-100/50 max-md:hidden">
      <div className="flex items-center gap-x-14">
        {/* category */}
        <div className="text-Neutral-800 border border-Neutral-100 rounded-xl cursor-pointer p-2 flex items-center gap-x-2">
          <IoMenuOutline />
          <span>دسته بندی محصول</span>
          <IoIosArrowUp className="-rotate-90" />
        </div>
        {/* nav */}
        <div>
          <nav
            className="flex items-center gap-x-4 text-sm text-Neutral-800 **:relative **:inline-block **:cursor-pointer
  **:before:content-[''] **:before:absolute **:before:right-1/2 **:before:-bottom-1
  **:before:h-[2px] **:before:w-0 **:before:bg-blue-600
  **:before:transition-[width] **:before:duration-300 **:before:ease-out

  **:after:content-[''] **:after:absolute **:after:left-1/2 **:after:-bottom-1
  **:after:h-[2px] **:after:w-0 **:after:bg-blue-600
  **:after:transition-[width] **:after:duration-300 **:after:ease-out

  **:hover:before:w-1/2 **:hover:after:w-1/2"
          >
            <button
              className="
"
            >
              صفحه اصلی
            </button>
            <button>فروشگاه</button>
            <button>تخفیفات ویژه</button>
            <button>برند ها</button>
            <button>درباره ما</button>
            <button>تماس با ما</button>
            <button>رهگیری سفارشات</button>
          </nav>
        </div>
      </div>
      <div className="flex items-center gap-x-3 max-lg:hidden">
        <div className="flex flex-col **:cursor-pointer **:text-sm **:text-Neutral-800">
          <span>۰۲۱-۲۵۶۷۸۹۳۴</span>
          <span>پشتیبانی ۲۴/۷</span>
        </div>
        <div className="border border-Neutral-100 rounded-xl p-3 flex-center text-2xl">
          <LiaPhoneVolumeSolid />
        </div>
      </div>
    </div>
  );
}
