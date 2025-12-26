export default function SpecialSaleItem() {
  return (
    <div className="w-full h-full flex items-center justify-between min-w-0 max-md:flex-row-reverse max-md:mt-10">
      {/* details */}
      <div className="flex-1 h-full flex items-center gap-x-4 min-w-0">
        {/* information */}
        <div className="flex justify-center h-full flex-col gap-y-4 min-w-0">
          <h3 className="text-primary font-bold text-5xl max-md:hidden">
            {" "}
            فر وش ویژه{" "}
          </h3>
          <h4 className="text-Neutral-800 text-sm line-clamp-2">
            پاوربانک باسئوس مدل PPBD ظرفیت 20000 میلی آمپر ساعت پاوربانک باسئوس
            مدل PPBD ظرفیت 20000 میلی آمپر ساعت
          </h4>
          <p className="text-[#444] max-w-[600px] tracking-widest text-wrap line-clamp-2 text-sm max-md:hidden">
            پاوربانک باسئو پاوربانک باسئو پاوربانک باسئو پاوربانک باسئو پاوربانک
            باسئو پاوربانک باسئو پاوربانک باسئو پاوربانک باسئو
          </p>

          <button className="p-2 font-bold bg-error-600 text-white rounded-xl w-24 cursor-pointer md:hidden">
            اطلاعات بیشتر
          </button>

          <div className="w-full flex justify-between items-center mt-4">
            <button className="p-2 font-bold bg-error-600 text-white rounded-xl cursor-pointer max-md:hidden">
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
              <span className="p-2 bg-error-500 text-white font-bold md:rounded-xl max-md:rounded-md max-md:text-xs font-sans-medium">
                % 17
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* images */}
      <div className="flex-1 flex items-center h-full md:justify-end justify-center gap-x-2">
        <div className="border border-Neutral-100/30 rounded-3xl h-full flex flex-col gap-y-2 p-2 max-md:hidden">
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

        <div className="border border-Neutral-100/30 rounded-xl h-full inline-flex flex-center md:p-10">
          <img
            src="images/product/phone.jpeg"
            className="max-md:w-[90px] max-md:h-[106px]"
          />
        </div>
      </div>
    </div>
  );
}
