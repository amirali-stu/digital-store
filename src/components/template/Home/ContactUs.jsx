import { FaPhone } from "react-icons/fa6";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { TbBrandWhatsappFilled } from "react-icons/tb";

function ContactUs() {
  return (
    <section className="mb-40 second-container w-full">
      <div className="w-full relative z-20 h-[238px] bg-[#007AF4] border-5 drop-shadow-[0px_20px_40px] drop-shadow-black/10 border-white rounded-3xl flex items-center justify-between pl-10">
        <img
          data-aos="fade-left"
          src="images/contact-us/contact-img.png"
          alt="contact us"
          className="w-[316px] h-[288px] rotate-15 -mr-[50px] -mt-[50px]"
        />

        <div data-aos="flip-up">
          <h2 className="text-4xl text-white font-semibold">
            به پشتیبانی نیاز دارید؟
          </h2>

          <p className="text-white/50 font-medium leading-8 text-xl w-[388px] text-wrap">
            تیم ما در هر ساعت از شبانه روز پاسخگوی مشکلات و سوالات شما هستند.
          </p>
        </div>

        <div
          data-aos="fade-right"
          className="bg-white/10 rounded-2xl w-[329px] h-[65px] flex-center flex-col gap-y-8"
        >
          <div className="bg-white py-1.5 px-3 rounded-xl flex-center gap-x-1">
            <FaPhone className="text-[#007AF4]" size={17} />
            <span className="text-black">شماره تماس</span>
          </div>

          <span
            className="text-white text-2xl flex-center font-semibold font-sans-medium"
            dir="ltr"
          >
            025 - 38823085
          </span>
        </div>

        {/* social media */}
        <div
          data-aos="fade-up"
          className="w-[276px] h-[90px] bg-[#007AF4] border-5 border-t-2 border-white border-t-[#007AF4] absolute left-5 -bottom-22.5 social-media_contact-us -z-50 rounded-t-xl flex flex-row-reverse items-center gap-x-2 px-4 pb-4"
        >
          <div
            className="bg-white p-3 shadow-[0px_10px_20px_0px] shadow-black/20 cursor-pointer
            text-[#007AF4] rounded-xl flex-center"
          >
            <FaTelegramPlane size={28} />
          </div>
          <div
            className="bg-white p-3 shadow-[0px_10px_20px_0px] shadow-black/20 cursor-pointer
            text-[#007AF4] rounded-xl flex-center"
          >
            <RiInstagramFill size={28} />
          </div>
          <div
            className="bg-white p-3 shadow-[0px_10px_20px_0px] shadow-black/20 cursor-pointer
            text-[#007AF4] rounded-xl flex-center"
          >
            <TbBrandWhatsappFilled size={28} />
          </div>
          <div
            className="bg-white p-3 shadow-[0px_10px_20px_0px] shadow-black/20 cursor-pointer
            text-[#007AF4] rounded-xl flex-center"
          >
            <FaTwitter size={28} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
