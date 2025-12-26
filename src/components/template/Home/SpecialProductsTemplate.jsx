import { FaStar } from "react-icons/fa6";
import { LuTimerReset } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";

function SpecialProductsTemplate() {
  return (
    // اگر تماس بگیرید یا بدون تخفیف فعال بود، باید border primary بگیرد
    // اگر تخفیف فعال بود border-b error-600

    <div className="col-span-1 min-h-[200px] h-auto group rounded-2xl transition-all border-l-0 hover:border-l-6 border-l-primary shadow-[0px_24px_48px_0px,_inset_0px_0px_0px_0px_#69BCF4] shadow-black/4 border border-[#F0F1F1] bg-white p-6 flex items-center gap-x-3 md:gap-x-6">
      <img
        src="images/product/phone.jpeg"
        alt="special product"
        className="shrink-0 w-[110px] h-[110px] md:w-[150px] md:h-[150px]"
      />

      <div className="w-full min-w-0 flex flex-col gap-y-3">
        {/* title */}
        <div className="w-full flex items-center justify-between gap-x-3">
          <h2 className="text-xl text-Neutral-800 flex-1 min-w-0 truncate">
            گوشی موبایل اپل مدل iPhone 16 Pro Max ZAA
          </h2>

          <div className="shrink-0 flex items-center gap-x-3">
            <FaStar className="text-yellow-600" />
            <span>3</span>
          </div>
        </div>

        {/* description */}
        <p className="line-clamp-2 text-Neutral-700 leading-6 max-md:hidden">
          اگر همیشه دوست داشتید تجربه‌ی کار با Apple را داشته باشید اما قیمت
          بالای آن مانع شما شده، ساعت هوشمند طرح اپل واچ بهترین انتخابساعت
          هوشمند طرح اپل واچ بهترین انتخابساعت هوشمند طرح اپل واچ بهترین انتخاب
        </p>

        {/* قیمت و دسته بندی */}
        <div className="w-full flex items-center justify-between gap-x-3 hidden">
          <button className="shrink-0 text-Neutral-800 text-sm py-1 px-2 bg-Neutral-50 rounded-lg border cursor-pointer border-[#F0F1F1] flex-center">
            موبایل
          </button>

          <div className="min-w-0 py-2 flex items-end flex-col **:text-Neutral-800">
            <span className="truncate max-w-full">شروع از:</span>

            <p className="flex items-center font-sans-medium mt-2 whitespace-nowrap">
              118.000.000
              <img src="images/product/toman.svg" className="mb-2" />
            </p>
          </div>
        </div>

        {/* آخرین تعداد */}
        <div className="w-full flex items-center justify-between hidden">
          <span className="text-error-600 text-sm">فقط 1 عدد باقی مانده!</span>
          <div className="py-2 flex items-end flex-col **:text-Neutral-800">
            <p className="flex items-center  gap-x-1">
              118.000.000
              <img src="images/product/toman.svg" className="mb-2" />
            </p>
          </div>
        </div>

        {/* تخفیف با درصد */}
        <div className="w-full flex items-center justify-between hidden">
          <button className="text-Neutral-800 text-sm py-1 px-2 bg-Neutral-50 rounded-lg border cursor-pointer border-[#F0F1F1] flex-center">
            موبایل
          </button>
          <div className="flex items-center gap-x-3">
            <div className="py-2 flex items-end flex-col **:text-Neutral-800">
              <p className="flex items-center gap-x-1 text-xs !text-Neutral-300">
                120.000.000
                <img src="images/product/toman.svg" className="mb-2" />
              </p>
              <p className="flex items-center font-bold">118.000.000</p>
            </div>
            <span className="bg-error-500 rounded-xl text-white !inline-flex flex-col flex-center font-semibold py-1 px-2">
              <span>3</span>
              <span className="-mt-1">%</span>
            </span>
          </div>
        </div>

        {/* با ما تماس بگیرید */}
        <div className="w-full flex items-center justify-between max-sm:flex-col max-sm:items-end max-sm:gap-y-2">
          <div className="px-4 py-1 border border-primary bg-white rounded-xl text-primary flex-center gap-x-2">
            <span>ارسال فوری</span>
            <LuTimerReset className="text-[#F58D70]" size={20} />
          </div>
          <div className="bg-primary/20 py-2 px-4 text-primary rounded-lg flex-center gap-x-4 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
            <span>تماس بگیرید</span>
            <FiPhoneCall />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialProductsTemplate;
