import { FaPhoneAlt } from "react-icons/fa";
import { HiStar } from "react-icons/hi";

function LatestProductTemplate() {
  return (
    // اگر تماس بگیرید یا بدون تخفیف فعال بود، باید border primary بگیرد
    // اگر تخفیف فعال بود border-b error-600

    <div className="w-[288px] h-[430px] rounded-xl transition-all border-b-0 hover:border-b-6 border-b-primary bg-white border border-Neutral-100/30 p-4 shadow-[0px_8px_16px] shadow-black/10">
      <img src="images/product/phone.jpeg" alt="products image" />
      <h4 className="text-sm text-Neutral-800 text-wrap line-clamp-2">
        گوشی موبایل اپل مدل iPhone 16 Pro Max ZAA
      </h4>

      <div className="w-full flex items-center justify-between border-b border-b-Neutral-100/40 py-4 pt-8 pb-2">
        <span className="text-Neutral-400">موبایل</span>
        <div className="text-primary font-bold text-sm flex flex-row-reverse items-center gap-x-1">
          <HiStar className="text-yellow-500" />3{" "}
          <span className="text-primary/50">(4)</span>
        </div>
      </div>

      {/* بدون تخفیف */}
      <div className="py-2 flex items-end flex-col **:text-Neutral-800">
        <span>شروع از:</span>
        <p className="flex items-center font-yekan-medium">
          118.000.000
          <img src="images/product/toman.svg" className="mb-2" />
        </p>
      </div>

      {/* با تخفیف */}
      <div className="w-full py-4 flex items-center justify-between hidden">
        <div className=" bg-error-400/20 rounded-xl px-2 py-2 flex-center">
          <p className="text-error-600 text-center">17%</p>
        </div>
        <div className="**:text-Neutral-800 flex items-end flex-col">
          <p className="flex items-center line-through text-xs !text-Neutral-400">
            120.000.000
            <img src="images/product/toman.svg" className="mb-2" />
          </p>
          <p className="flex items-center">
            118.000.000
            <img src="images/product/toman.svg" className="mb-2" />
          </p>
        </div>
      </div>

      {/* تماس بگیرد */}
      <div className="w-full py-4 flex items-center justify-between hidden">
        <button className="flex flex-row-reverse text-lg items-center gap-x-2 text-center text-primary bg-primary/20 rounded-xl w-full py-2 flex-center cursor-pointer">
          <FaPhoneAlt size={16} /> تماس بگیرید
        </button>
      </div>
    </div>
  );
}

export default LatestProductTemplate;
