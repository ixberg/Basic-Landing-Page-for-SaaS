import React from "react";
import Image from "next/image";

const System = () => {
  return (
    <section className="w-full py-[70px] px-20">
      <div className="flex justify-between gap-[100px]">
        <div className="w-full basis-1/2">
          <div className="relative w-full h-full">
            <div className="flex absolute top-1/2 -translate-y-1/2 bg-white w-[239px] h-[280px] rounded-[50px] border border-r-[6px] border-b-[6px] border-black "></div>
            <div className="flex absolute left-1/2 -translate-x-1/2 -top-10 bg-white w-[239px] h-[280px] rounded-[50px] border border-r-[6px] border-b-[6px] border-black "></div>
            <div className="flex absolute left-1/2 -translate-x-1/2 -bottom-10  bg-white w-[239px] h-[280px] rounded-[50px] border border-r-[6px] border-b-[6px] border-black "></div>
            <div className="flex absolute right-0 top-1/2 -translate-y-1/3 bg-white w-[239px] h-[280px] rounded-[50px] border border-r-[6px] border-b-[6px] border-black "></div>
            <Image
              src="/ornament/Ellipse 4.png"
              alt="ornament1"
              width={480}
              height={200}
              className="absolute top-1/3 -left-20 -z-10"
            ></Image>
            <Image
              src="/ornament/Ellipse 3.png"
              alt="ornament2"
              width={480}
              height={200}
              className="absolute -right-20 -top-20 -z-10"
            ></Image>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-[50px] basis1/2">
          <div className="flex flex-col gap-[30px]">
            <h2 className="font-extrabold text-[46px] leading-none">
              AI-Powered System
            </h2>
            <p className="text-[#65636B]">
              Make a better decision based on what your customer needs without
              compromising your business value propositions.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex gap-4">
              <Image
                src="/icon/Frame 9.svg"
                alt="icon1"
                width={80}
                height={80}
              ></Image>
              <div className="flex flex-col gap-3">
                <p className="font-extrabold text-xl">Digital Marketing</p>
                <p className="text-[#65636B]">
                  Make a better decision based on what your customer needs
                  without compromising.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Image
                src="/icon/Frame 9-1.svg"
                alt="icon1"
                width={80}
                height={80}
              ></Image>
              <div className="flex flex-col gap-3">
                <p className="font-extrabold text-xl">Digital Marketing</p>
                <p className="text-[#65636B]">
                  Make a better decision based on what your customer needs
                  without compromising.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Image
                src="/icon/Frame 9-2.svg"
                alt="icon1"
                width={80}
                height={80}
              ></Image>
              <div className="flex flex-col gap-3">
                <p className="font-extrabold text-xl">Digital Marketing</p>
                <p className="text-[#65636B]">
                  Make a better de cision based on what your customer needs
                  without compromising.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default System;
