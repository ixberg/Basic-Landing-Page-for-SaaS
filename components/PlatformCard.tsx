import React from "react";
import Image from "next/image";

interface platformProps {
  logo: string;
  name: string;
  type: string;
}

const PlatformCard: React.FC<platformProps> = ({ logo, name, type }) => {
  return (
    <div className="w-fit h-fit p-5 flex flex-none items-center rounded-2xl border-r-[4px] border-b-[4px] border-black border gap-[14px]">
      <div>
        <Image src={logo} alt={name} width={50} height={50}></Image>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-extrabold text-xl">{name}</p>
        <p className="font-medium text-[#65636B]">{type}</p>
      </div>
    </div>
  );
};

export default PlatformCard;
