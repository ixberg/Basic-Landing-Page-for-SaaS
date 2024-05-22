import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex items-center justify-between w-full px-20 bg-gradient-to-br from-purple-100 to-gray-200 from-customPurple to-customBlue h-[100vh] pt-32">
      <div className="flex flex-col gap-12 basis-1/2">
        <div className="flex flex-col gap-7">
          <h1 className="font-extrabold text-6xl leading-[76px]">
            Explore Business Insights Analytics
          </h1>
          <p className="leading-relaxed text-[#65636B]">
            Make a better decision based on what your customer needs without
            compromising your business value propositions.
          </p>
          <div className="flex gap-[14px] items-center">
            <div className="flex">
              <Image
                src="/photo.png"
                alt="photo1"
                width={40}
                height={50}
              ></Image>
              <Image
                src="/photo-1.png"
                alt="photo1"
                width={40}
                height={50}
                className="ml-[-6px]"
              ></Image>
              <Image
                src="/photo-2.png"
                alt="photo1"
                width={40}
                height={50}
                className="ml-[-6px]"
              ></Image>
            </div>
            <p className="text-[#65636B] font-semibold">
              Join 28K global founders
            </p>
          </div>
        </div>
        <div className="flex gap-6">
          <button className="font-bold text-xl px-10 py-5 rounded-xl border-r-[4px] border-b-[4px] border-black border bg-purple-700 text-white">
            Try Free Trial
          </button>
          <button className="font-bold text-xl  px-10 py-5 rounded-xl border-r-[4px] border-b-[4px] border-black border bg-white text-[#020014]">
            Call Sales
          </button>
        </div>
      </div>
      <div className="flex basis-1/2 w-full relative">
        <div className="flex absolute -translate-y-1/2 right-0 bg-white w-[500px] h-[530px] rounded-[50px] border border-r-[6px] border-b-[6px] border-black "></div>
      </div>
    </section>
  );
};

export default Hero;
