import { hero_contants } from "@/constants";
import Button from "./Button";
import Image from "next/image";
import image1 from "@/assets/hero_1.jpg";
import image2 from "@/assets/hero_2.jpg";
import image3 from "@/assets/hero_3.jpg";

export const Hero = () => {
  return (
    <div className="flex flex-col space-y-7 py-10 px-4 md:flex-row md:items-center md:justify-between md:space-x-14 md:space-y-0 md:py-5 md:px-14">
      <div className="flex flex-col space-y-7 mt-6 text-center md:text-left md:w-[46%] order-2 md:order-1 md:mt-0">
        <div className="space-y-4">
          <h1 className="font-bold text-4xl md:text-[48px] tracking-wide leading-tight">
            {hero_contants.title}
          </h1>
          <p className="text-lg font-medium text-neutral-500">
            {hero_contants.subtitle}
          </p>
        </div>
        <div>
          <Button
            text="Get Started"
            background="bg-[#DDF247]"
            paddingX="px-7"
            paddingY="py-3"
          />
        </div>
      </div>
      <div className="flex order-1 md:order-2 md:w-[52%]">
        <div className="w-full md:w-[45%] h-[65vh] flex flex-col justify-between space-y-4 md:h-[100vh]">
          <div className="relative overflow-hidden h-full w-full rounded-[40px]">
            <Image
              src={image1.src}
              alt="hero_image_1"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative overflow-hidden h-full w-full rounded-[40px]">
            <Image
              src={image2.src}
              alt="hero_image_2"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-[55%] h-[65vh] ml-4 relative rounded-[40px] overflow-hidden md:h-[100vh]">
          <Image
            src={image3.src}
            alt="hero_image_3image3"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};
