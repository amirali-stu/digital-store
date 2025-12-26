import WhyUsItem from "./WhyUsItem";
import { SiTicktick } from "react-icons/si";
import { TbCarSuvFilled } from "react-icons/tb";
import { FaFastBackward } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

export default function WhyUs() {
  return (
    <section className="mb-40 second-container w-full">
      <div className="w-full flex items-center justify-between gap-x-2 max-lg:flex-col max-lg:items-start">
        <div>
          <div className="flex items-center">
            <p className="p-3 text-white bg-secondary rounded-r-xl flex-center text-center">
              چرا
            </p>
            <p className="p-3 text-white bg-primary rounded-l-xl flex-center text-center">
              اولترا مارکت؟
            </p>
          </div>

          <p className="text-wrap mt-3 text-[15px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
        </div>

        <div className="w-full flex flex-wrap gap-3 lg:gap-5 max-md:mt-4">
          <div className="min-w-10 flex-1 basis-full sm:basis-[calc(50%-0.5rem)] md:basis-[calc(25%-0.5rem)]">
            <WhyUsItem
              icon={SiTicktick}
              title="ضمانت اصالت کالا"
              desc="ارائه تضمین اصل بودن کالا"
            />
          </div>

          <div className="min-w-10 flex-1 basis-full sm:basis-[calc(50%-0.5rem)] md:basis-[calc(25%-0.5rem)]">
            <WhyUsItem
              icon={TbCarSuvFilled}
              title="ارسال رایگان بالای 1 میلیون تومان"
              desc="به سراسر کشور"
            />
          </div>

          <div className="min-w-10 flex-1 basis-full sm:basis-[calc(50%-0.5rem)] md:basis-[calc(25%-0.5rem)]">
            <WhyUsItem
              icon={FaFastBackward}
              title="بازگشت کالا"
              desc="ضمانت بازگشت کالا تا 7 روز"
            />
          </div>

          <div className="min-w-10 flex-1 basis-full sm:basis-[calc(50%-0.5rem)] md:basis-[calc(25%-0.5rem)]">
            <WhyUsItem
              icon={BiSupport}
              title="مشاروه"
              desc="مشاوره پیش از خرید"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
