import { MdKeyboardArrowDown } from "react-icons/md";

function SpecialSale() {
  return (
    <section className="mb-40 second-container w-full">
      <div className="bg-white h-[448px] shadow-[0px_0px_15px] shadow-black/5 rounded-xl p-6 flex items-center justify-between">
        {/* details */}
        <div className="flex-1 h-full flex items-center gap-x-4">
          {/* pageination btns */}
          <div className="bg-white/40 rounded-xl h-full shadow-[inset_0px_0px_10px] shadow-black/3 p-5 flex items-center justify-between flex-col">
            <button className="p-4 border cursor-pointer border-primary rounded-xl bg-primary/20 text-primary rotate-180">
              <MdKeyboardArrowDown />
            </button>

            <div className="flex items-center flex-col gap-y-2">
              <div className="rounded-xl cursor-pointer px-6 py-1 bg-Neutral-100"></div>
              <div className="rounded-xl cursor-pointer px-6 py-1 bg-Neutral-100"></div>
              <div className="rounded-xl cursor-pointer px-6 py-1 bg-primary"></div>
            </div>

            <button className="p-4 border cursor-pointer border-primary rounded-xl bg-primary/20 text-primary">
              <MdKeyboardArrowDown />
            </button>
          </div>

          {/* information */}
          <div className="flex justify-center h-full flex-col gap-y-4">
            <h3 className="text-primary font-bold text-5xl"> فر وش ویژه </h3>
            <h4 className="text-Neutral-800 text-sm">
              پاوربانک باسئوس مدل PPBD ظرفیت 20000 میلی آمپر ساعت
            </h4>
            <p className="text-[#444] max-w-[600px] tracking-widest text-wrap line-clamp-2 text-sm">
              پاوربانک باسئوس Baseus Bipow؛ پاوربانکی با ظاهریپاوربانک باسئوس
              Baseus Bipow؛ پاوربانکی با ظاهریپاوربانک باسئوس Baseus Bipow؛
              پاوربانکی با ظاهری ساده اما شکیل با سه خروجی است مشتمل بر دو خروجی
              USB
            </p>

            <div className="w-full flex justify-between items-center mt-4">
              <button className="p-2 font-bold bg-error-600 text-white rounded-xl cursor-pointer">
                اطلاعات بیشتر
              </button>

              <div className="flex items-center gap-x-1">
                <div className="flex flex-col items-end gap-y-1">
                  <p className="flex items-center line-through text-xs !text-Neutral-400">
                    120.000.000
                    <img src="images/product/toman.svg" className="mb-2.5" />
                  </p>
                  <p className="flex items-center">
                    118.000.000
                    <img src="images/product/toman.svg" className="mb-2.5" />
                  </p>
                </div>
                <span className="p-2 bg-error-500 text-white font-bold rounded-xl">
                  % 17
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* images */}
        <div className="flex-1 flex items-center h-full justify-end gap-x-2">
          <div className="border border-Neutral-100/30 rounded-3xl h-full flex flex-col gap-y-2 p-2">
            <div className="border w-[80px] h-[80px] border-Neutral-100/30 rounded-2xl flex-center p-1 cursor-pointer">
              <img src="images/product/powe-minimal.webp" />
            </div>
            <div className="border w-[80px] h-[80px] border-Neutral-100/30 rounded-2xl flex-center p-1 cursor-pointer">
              <img src="images/product/powe-minimal.webp" />
            </div>
            <div className="border w-[80px] h-[80px] border-Neutral-100/30 rounded-2xl flex-center p-1 cursor-pointer">
              <img src="images/product/powe-minimal.webp" />
            </div>
          </div>

          <div className="border border-Neutral-100/30 rounded-xl h-full inline-flex flex-center p-10">
            <img src="images/product/phone.jpeg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialSale;
