import { IoMenuOutline } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { LiaPhoneVolumeSolid } from "react-icons/lia";

export default function NavHeader() {
  return (
    <div className="second-container flex items-center justify-between py-4 border-b border-Neutral-100/50 max-md:hidden">
      <div className="flex items-center gap-x-14">
        {/* category */}
        <div className="relative group/menu">
          <div className="text-Neutral-800 border border-Neutral-100 rounded-xl cursor-pointer p-2 flex items-center gap-x-2 ">
            <IoMenuOutline />
            <span>دسته بندی محصول</span>
            <IoIosArrowUp className="-rotate-90" />

            <div className="w-[185px] h-0 opacity-0 transition-all duration-500 right-0 top-15 bg-white border border-Neutral-100 z-40 p-2 rounded-lg delay-75 flex gap-y-4 absolute group-hover/menu:h-[400px] group-hover/menu:opacity-100 group-hover/menu:top-12">
              <ul className="flex flex-col w-full">
                {/* آیتم ۱ با زیرمنو */}
                <li className="group/item">
                  <div className="block w-full py-2 rounded-l-full transition-all duration-500 hover:bg-[#EBF5FE] cursor-pointer group-hover/item:bg-[#EBF5FE]">
                    متن تستی اول
                  </div>

                  {/* sub-menu فقط با hover همین آیتم */}
                  <div
                    className="w-0 max-h-[400px] overflow-y-auto top-0 absolute rounded-lg bg-white border border-Neutral-100 transition-all duration-500
             opacity-0 invisible right-[90%]
            group-hover/item:opacity-100 group-hover/item:visible group-hover/item:right-[104%] group-hover/item:h-auto group-hover/item:w-[800px]"
                  >
                    <ul className="flex flex-wrap items-start gap-8 m-3">
                      <li className="border h-auto border-Neutral-50 rounded-md flex-center  flex-col ">
                        <a className="!w-[160px] !h-[40px] px-16 py-3 cursor-pointer bg-[#EBF5FE] rounded-t-md">
                          پرینتر
                        </a>

                        <ul className="**:w-[160px] **:h-[40px] flex-center **:leading-10 flex-col **:border-t **:text-center **:border-Neutral-50 **:cursor-pointer">
                          <li>پرینتر سه بعدی</li>
                          <li>پرینتر حرارتی</li>
                          <li>پرینتر رنگی</li>
                          <li>پرینتر حرارتی</li>
                          <li>پرینتر رنگی</li>
                        </ul>
                      </li>

                      <li className="border h-auto border-Neutral-50 rounded-md flex-center  flex-col ">
                        <a className="!w-[160px] !h-[40px] px-16 py-3 cursor-pointer bg-[#EBF5FE] rounded-t-md">
                          پرینتر
                        </a>

                        <ul className="**:w-[160px] **:h-[40px] flex-center **:leading-10 flex-col **:border-t **:text-center **:border-Neutral-50 **:cursor-pointer">
                          <li>پرینتر سه بعدی</li>
                        </ul>
                      </li>

                      <li className="border h-auto border-Neutral-50 rounded-md flex-center  flex-col ">
                        <a className="!w-[160px] !h-[40px] px-16 py-3 cursor-pointer bg-[#EBF5FE] rounded-t-md">
                          پرینتر
                        </a>

                        <ul className="**:w-[160px] **:h-[40px] flex-center **:leading-10 flex-col **:border-t **:text-center **:border-Neutral-50 **:cursor-pointer">
                          <li>پرینتر سه بعدی</li>
                          <li>پرینتر حرارتی</li>
                          <li>پرینتر رنگی</li>
                          <li>پرینتر سه بعدی</li>
                          <li>پرینتر حرارتی</li>
                          <li>پرینتر رنگی</li>
                          <li>پرینتر سه بعدی</li>
                          <li>پرینتر حرارتی</li>
                          <li>پرینتر رنگی</li>
                        </ul>
                      </li>

                      <li className="border h-auto border-Neutral-50 rounded-md flex-center  flex-col ">
                        <a className="!w-[160px] !h-[40px] px-16 py-3 cursor-pointer bg-[#EBF5FE] rounded-t-md">
                          پرینتر
                        </a>

                        <ul className="**:w-[160px] **:h-[40px] flex-center **:leading-10 flex-col **:border-t **:text-center **:border-Neutral-50 **:cursor-pointer">
                          <li>پرینتر سه بعدی</li>
                          <li>پرینتر حرارتی</li>
                          <li>پرینتر رنگی</li>
                        </ul>
                      </li>

                      <li className="border h-auto border-Neutral-50 rounded-md flex-center  flex-col ">
                        <a className="!w-[160px] !h-[40px] px-16 py-3 cursor-pointer bg-[#EBF5FE] rounded-t-md">
                          پرینتر
                        </a>

                        <ul className="**:w-[160px] **:h-[40px] flex-center **:leading-10 flex-col **:border-t **:text-center **:border-Neutral-50 **:cursor-pointer">
                          <li>پرینتر سه بعدی</li>
                          <li>پرینتر حرارتی</li>
                          <li>پرینتر رنگی</li>
                        </ul>
                      </li>

                      <li className="border h-auto border-Neutral-50 rounded-md flex-center  flex-col ">
                        <a className="!w-[160px] !h-[40px] px-16 py-3 cursor-pointer bg-[#EBF5FE] rounded-t-md">
                          پرینتر
                        </a>

                        <ul className="**:w-[160px] **:h-[40px] flex-center **:leading-10 flex-col **:border-t **:text-center **:border-Neutral-50 **:cursor-pointer">
                          <li>پرینتر سه بعدی</li>
                          <li>پرینتر حرارتی</li>
                          <li>پرینتر رنگی</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="block w-full py-2 rounded-l-full transition-all duration-500 hover:bg-[#EBF5FE] cursor-pointer">
                  متن تستی دوم
                </li>
                <li className="block w-full py-2 rounded-l-full transition-all duration-500 hover:bg-[#EBF5FE] cursor-pointer">
                  متن تستی سوم
                </li>
              </ul>
            </div>
          </div>
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
