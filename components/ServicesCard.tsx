import React from "react";
import Image from "next/image";

interface servicesCardProps {
  title: string;
  item: string[];
}

const ServicesCard: React.FC<servicesCardProps> = ({ title, item }) => {
  return (
    <div className="flex flex-col gap-7">
      <div className="bg-white w-[239px] h-[280px] rounded-[50px] border border-r-[6px] border-b-[6px] border-black"></div>
      <div className="flex flex-col gap-5">
        <h2 className="font-extrabold text-xl">{title}</h2>
        {item.map((item, index) => (
          <div key={index} className="flex gap-[6px]">
            <Image
              src="/icon/tick-circle.svg"
              alt="checkIc"
              width={30}
              height={30}
            />
            <p className="text-lg">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;
