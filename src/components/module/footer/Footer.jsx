import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Footer() {
  return (
    <div data-aos="fade-up" className="second-container w-full">
      <div className="w-full rounded-[40px] bg-white shadow-[0px_20px_40px_0px] shadow-black/20 p-8">
        <div className="flex items-center gap-x-4 h-[304px]">
          <div className="rounded-3xl w-[634px] h-full border border-Neutral-50 p-6">
            <h3 className="text-[#343434] text-xl">دیجی الوترا</h3>
            <p className="text-[#7A7A7A] leading-10">
              مقصد نهایی شما برای کالای دیجیتال دیجی اولترا، فروشگاه اینترنتی
              جامع و تخصصی کالای دیجیتال، با ارائه طیف گسترده‌ای از محصولات با
              کیفیت و برندهای معتبر، به شما کمک می‌کند تا بهترین انتخاب‌ها را در
              دنیای دیجیتال داشته باشید.
            </p>

            <div className="mt-10 w-full flex items-center justify-between gap-x-8">
              <button className="flex-center font-sans-medium gap-x-2 cursor-pointer text-[#343434] bg-[#F0F1F1] rounded-lg py-4 w-1/2">
                <span>amiralimosolo279@gmail.com</span>
                <MdEmail size={24} className="text-[#C2C5C6]" />
              </button>
              <button className="flex-center font-sans-medium gap-x-2 cursor-pointer text-[#343434] bg-[#F0F1F1] rounded-lg py-4 w-1/2">
                <span>0905-407-3722</span>
                <FaPhone size={24} className="text-[#C2C5C6]" />
              </button>
            </div>
          </div>

          <div className="rounded-3xl h-full w-[250px] border border-Neutral-50 p-6">
            <h3 className="text-[#343434] text-xl">دسترسی سریع</h3>

            <nav className="flex flex-col items-start mt-5 gap-y-6 **:transition-all **:duration-500 **:hover:text-primary **:cursor-pointer **:text-[#54595F]">
              <button>خانه</button>
              <button>محصولات</button>
              <button>پیشنهادات ویژه</button>
              <button>تماس باما</button>
              <button>درباره ما</button>
            </nav>
          </div>

          <div className="rounded-3xl h-full w-[250px] border border-Neutral-50 p-6">
            <h3 className="text-[#343434] text-xl">خدمات مشتریان</h3>

            <nav className="flex flex-col items-start mt-5 gap-y-6 **:transition-all **:duration-500 **:hover:text-primary **:cursor-pointer **:text-[#54595F]">
              <button>پشتیبانی و راهنمایی</button>
              <button>پیگیری سفارش</button>
              <button>سوالات متداول</button>
              <button>شرایط بازگشت کالا</button>
              <button>تماس با پشتیبانی</button>
            </nav>
          </div>

          <div className="rounded-3xl h-full w-[177px] border border-Neutral-50 p-6">
            <h3 className="text-[#343434] text-xl">نماد ها</h3>

            <div className="flex flex-col items-center gap-y-4">
              <div className="bg-[#F8F8F8] p-4 rounded-2xl flex-center">
                <img src="images/brands/zarin-pal.png" />
              </div>
              <div className="bg-[#F8F8F8] p-4 rounded-2xl flex-center">
                <img src="images/brands/eatemad.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-3xl w-full flex items-center justify-between border border-Neutral-50 p-6 mt-4">
          <div className="flex flex-col gap-y-4">
            <h3 className="text-[#343434] text-2xl">آدرس فروشگاه</h3>
            <p className="text-[#7A7A7A]">
              خیابان اول، میدان دوم، کوچه سوم، پلاک ۴
            </p>
          </div>

          <div className="w-[344px] h-[144px] rounded-3xl">
            <MapContainer
              center={[35.6892, 51.389]}
              zoom={13}
              className="w-full h-full rounded-3xl"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />

              <Marker position={[35.6892, 51.389]}>
                <Popup>اینجا تهران است</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>

      <h2 className="my-4 block text-center">
        تمامی حقوق برای دیجی اولترا محفوظ است.
      </h2>
    </div>
  );
}

export default Footer;
