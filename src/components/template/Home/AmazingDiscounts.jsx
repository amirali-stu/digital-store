import { GoArrowLeft } from "react-icons/go";
import AmazingDiscountProduct from "./AmazingDiscountProduct";

export default function AmazingDiscounts() {
  return (
    <section className="second-container w-full mb-40">
      <div className="w-full rounded-4xl bg-blue-500 h-[420px] flex items-center p-4">
        <div className="rounded-lg border-l-4 w-[240px] h-full border-l-white pl-4 flex flex-col justify-between">
          <div
            data-aos="fade-left"
            className="rounded-2xl bg-white p-8 flex flex-col items-center gap-y-4"
          >
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
          <button
            data-aos="fade-left"
            className="bg-white rounded-3xl border border-Neutral-100/20 flex-center gap-x-2 p-3.5 cursor-pointer"
          >
            <p>مشاهده همه</p> <GoArrowLeft />
          </button>
        </div>
        <div data-aos="fade-up" className="w-full h-full flex items-center gap-x-4 mr-5">
          <AmazingDiscountProduct />
          <AmazingDiscountProduct />
          <AmazingDiscountProduct />
          <AmazingDiscountProduct />
        </div>
      </div>
    </section>
  );
}
