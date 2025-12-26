import { FaPhone } from "react-icons/fa6";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { TbBrandWhatsappFilled } from "react-icons/tb";

function ContactUs() {
  return (
    <section className="mb-40 second-container w-full">
      <div className="w-full relative z-20 h-[238px] bg-[#007AF4] border-5 drop-shadow-[0px_20px_40px] drop-shadow-black/10 border-white rounded-3xl flex items-center justify-between lg:pl-10 max-lg:flex-col max-lg:h-auto">
        <img
          src="images/contact-us/contact-img.png"
          alt="contact us"
          className=" shrink max-w-full w-[316px] h-[288px] rotate-15 md:-mr-[50px] lg:-mt-[100px] -mt-[50px] max-md:w-[185px] max-md:h-[172px] max-sm:w-[144px] max-sm:h-[131px]
  "
        />

        <div className="max-lg:my-6">
          <h2 className="lg:text-4xl sm:text-3xl text-2xl text-white font-semibold">
            به پشتیبانی نیاز دارید؟
          </h2>

          <p className="text-white/50 font-medium leading-8 sm:text-xl text-lg w-[388px] text-wrap">
            تیم ما در هر ساعت از شبانه روز پاسخگوی مشکلات و سوالات شما هستند.
          </p>
        </div>

        <div className="bg-white/10 rounded-2xl w-[329px] h-[65px] flex-center flex-col gap-y-8 max-lg:gap-y-4">
          <div className="bg-white py-1.5 px-3 rounded-xl flex-center gap-x-1 max-lg:mt-4">
            <FaPhone className="text-[#007AF4]" size={17} />
            <span className="text-black">شماره تماس</span>
          </div>

          <span
            className="text-white lg:text-2xl text-xl flex-center font-semibold font-sans-medium max-lg:mb-6"
            dir="ltr"
          >
            025 - 38823085
          </span>
        </div>

        {/* social media in desktop */}
        <div className="w-[276px] h-[90px] bg-[#007AF4] border-5 border-t-2 border-white border-t-[#007AF4] absolute left-5 -bottom-22.5 social-media_contact-us -z-50 rounded-t-xl flex flex-row-reverse items-center gap-x-2 px-4 pb-4 max-lg:hidden">
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

        {/* social media in mobile */}
        <div className="flex flex-row-reverse items-center gap-x-4 mb-6 mt-12 lg:hidden">
          <div
            className="bg-white p-3 shadow-[0px_10px_20px_0px] shadow-black/20 cursor-pointer
            text-[#007AF4] rounded-xl flex-center"
          >
            <FaTelegramPlane size={24} />
          </div>
          <div
            className="bg-white p-3 shadow-[0px_10px_20px_0px] shadow-black/20 cursor-pointer
            text-[#007AF4] rounded-xl flex-center"
          >
            <RiInstagramFill size={24} />
          </div>
          <div
            className="bg-white p-3 shadow-[0px_10px_20px_0px] shadow-black/20 cursor-pointer
            text-[#007AF4] rounded-xl flex-center"
          >
            <TbBrandWhatsappFilled size={24} />
          </div>
          <div
            className="bg-white p-3 shadow-[0px_10px_20px_0px] shadow-black/20 cursor-pointer
            text-[#007AF4] rounded-xl flex-center"
          >
            <FaTwitter size={24} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
