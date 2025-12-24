import { GoArrowLeft } from "react-icons/go";
import { HiStar } from "react-icons/hi";

export default function AmazingDiscounts() {
  return (
    <section className="second-container w-full mb-40">
      <div className="w-full rounded-4xl bg-blue-500 h-[420px] flex items-center p-4">
        <div className="rounded-lg border-l-4 w-[240px] h-full border-l-white pl-4 flex flex-col justify-between">
          <div className="rounded-2xl bg-white p-8 flex flex-col items-center gap-y-4">
            <div className="p-4 bg-blue-500 rounded-2xl">
              <img
                src="images/discount/image-sale.svg"
                alt="discount product"
              />
            </div>
            <h3 className="text-4xl font-bold max-w-[134px] text-center text-wrap text-blue-600">
              تخفیفات شگفت انگیر
            </h3>
          </div>
          <button className="bg-white rounded-3xl border border-Neutral-100/20 flex-center gap-x-2 p-3.5 cursor-pointer">
            <p>مشاهده همه</p> <GoArrowLeft />
          </button>
        </div>
        <div className="w-full h-full flex items-center gap-x-4 mr-5">
          <div className="w-[248px] h-[380px] rounded-2xl bg-white p-4 cursor-pointer transition-all duration-300 hover:-translate-y-3">
            <div>
              <img src="images/product/phone.jpeg" />
              <p className="text-sm text-Neutral-800">
                گوشی موبایل اپل مدل iPhone 16 Pro Max ZAA
              </p>
            </div>

            <div className="w-full flex items-center justify-between border-b border-b-Neutral-100/40 pt-8 pb-2">
              <span className="text-Neutral-800">موبایل</span>
              <div className="text-primary font-bold text-sm flex flex-row-reverse items-center gap-x-1">
                <HiStar className="text-yellow-500" />3{" "}
                <span className="text-primary/50">(4)</span>
              </div>
            </div>

            <div className="w-full flex items-center justify-between py-2">
              <span className="text-Neutral-800">شروع از:</span>
              <p className="flex items-center">
                118.000.000
                <img src="images/product/toman.svg" />
              </p>
            </div>
          </div>
          <div className="w-[248px] h-[380px] relative rounded-2xl bg-white p-4 cursor-pointer transition-all duration-300 hover:-translate-y-3">
            <div>
              <img src="images/product/phone.jpeg" />
              <p className="text-sm text-Neutral-800">
                گوشی موبایل اپل مدل iPhone 16 Pro Max ZAA
              </p>
            </div>

            <div className="w-full flex items-center justify-between border-b border-b-Neutral-100/40 pt-8 pb-2">
              <span className="text-Neutral-800">موبایل</span>
              <div className="text-primary font-bold text-sm flex flex-row-reverse items-center gap-x-1">
                <HiStar className="text-yellow-500" />3{" "}
                <span className="text-primary/50">(4)</span>
              </div>
            </div>

            <div className="w-full flex items-center justify-between py-2">
              <span className="text-Neutral-800">شروع از:</span>
              <p className="flex items-center">
                118.000.000
                <img src="images/product/toman.svg" />
              </p>
            </div>

            {/* offer */}
            <button className="text-white text-sm bg-[#C50000] rounded-xl flex-center p-3 gap-x-2 absolute top-5 left-5">
              <p>فروش ویژه</p>
              <img src="images/product/offer.svg" alt="offer svg" />
            </button>
          </div>
          <div className="w-[248px] h-[380px] rounded-2xl bg-white p-4 cursor-pointer transition-all duration-300 hover:-translate-y-3">
            <div>
              <img src="images/product/phone.jpeg" />
              <p className="text-sm text-Neutral-800">
                گوشی موبایل اپل مدل iPhone 16 Pro Max ZAA
              </p>
            </div>

            <div className="w-full flex items-center justify-between border-b border-b-Neutral-100/40 pt-8 pb-2">
              <span className="text-Neutral-800">موبایل</span>
              <div className="text-primary font-bold text-sm flex flex-row-reverse items-center gap-x-1">
                <HiStar className="text-yellow-500" />3{" "}
                <span className="text-primary/50">(4)</span>
              </div>
            </div>

            <div className="w-full flex items-center justify-between py-2">
              <span className="text-Neutral-800">شروع از:</span>
              <p className="flex items-center">
                118.000.000
                <img src="images/product/toman.svg" />
              </p>
            </div>
          </div>
          <div className="w-[248px] h-[380px] rounded-2xl bg-white p-4 cursor-pointer transition-all duration-300 hover:-translate-y-3">
            <div>
              <img src="images/product/phone.jpeg" />
              <p className="text-sm text-Neutral-800">
                گوشی موبایل اپل مدل iPhone 16 Pro Max ZAA
              </p>
            </div>

            <div className="w-full flex items-center justify-between border-b border-b-Neutral-100/40 pt-8 pb-2">
              <span className="text-Neutral-800">موبایل</span>
              <div className="text-primary font-bold text-sm flex flex-row-reverse items-center gap-x-1">
                <HiStar className="text-yellow-500" />3{" "}
                <span className="text-primary/50">(4)</span>
              </div>
            </div>

            <div className="w-full flex items-center justify-between py-2">
              <span className="text-Neutral-800">شروع از:</span>
              <p className="flex items-center">
                118.000.000
                <img src="images/product/toman.svg" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
