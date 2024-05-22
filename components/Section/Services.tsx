import React from "react";
import ServicesCard from "../ServicesCard";

const Services = () => {
  return (
    <section className="flex flex-col gap-12 w-full py-28 overflow-hidden px-[70px]">
      <div className="flex gap-5 flex-col items-center">
        <h2 className="font-extrabold text-center text-[46px]">
          Built For Business
        </h2>
        <p className="text-[#65636B] text-center w-[508px] leading-9">
          Make a better decision based on what your customer needs without
          compromising your business value propositions.
        </p>
      </div>
      <div className="flex justify-between">
        <ServicesCard
          title="Digital Marketing"
          item={[
            "Remarkable charts manage",
            "Remarkable charts manage",
            "Remarkable charts manage",
          ]}
        ></ServicesCard>
        <ServicesCard
          title="Digital Marketing"
          item={[
            "Remarkable charts manage",
            "Remarkable charts manage",
            "Remarkable charts manage",
          ]}
        ></ServicesCard>
        <ServicesCard
          title="Digital Marketing"
          item={[
            "Remarkable charts manage",
            "Remarkable charts manage",
            "Remarkable charts manage",
          ]}
        ></ServicesCard>
      </div>
    </section>
  );
};

export default Services;
