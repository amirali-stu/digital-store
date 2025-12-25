import WhyUsItem from "./WhyUsItem";
import { SiTicktick } from "react-icons/si";
import { TbCarSuvFilled } from "react-icons/tb";
import { FaFastBackward } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

export default function WhyUs() {
  return (
    <section className="mb-40 second-container w-full">
      <div className="w-full flex items-center justify-between gap-x-2">
        <div>
          <div data-aos="fade-left" className="flex items-center">
            <p className="p-3 text-white bg-secondary rounded-r-xl flex-center text-center">
              چرا
            </p>
            <p className="p-3 text-white bg-primary rounded-l-xl flex-center text-center">
              اولترا مارکت؟
            </p>
          </div>

          <p data-aos="fade-left" className="text-wrap mt-3 text-[15px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
        </div>

        <div data-aos="fade-up" className="flex items-center gap-x-4">
          <WhyUsItem
            icon={SiTicktick}
            title={"ضمانت اصالت کالا"}
            desc={"ارائه تضمین اصل بودن کالا"}
          />
          <WhyUsItem
            icon={TbCarSuvFilled}
            title={"ارسال رایگان بالای 1 میلیون تومان"}
            desc={"به سراسر کشور"}
          />
          <WhyUsItem
            icon={FaFastBackward}
            title={"بازگشت کالا"}
            desc={"ضمانت بازگشت کالا تا 7 روز"}
          />
          <WhyUsItem
            icon={BiSupport}
            title={"مشاروه"}
            desc={"مشاوره پیش از خرید"}
          />
        </div>
      </div>
    </section>
  );
}
