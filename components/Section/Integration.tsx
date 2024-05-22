import React from "react";
import PlatformCard from "../PlatformCard";

const Integration = () => {
  return (
    <section className="flex flex-col gap-7 w-full py-28 overflow-hidden">
      <div>
        <h2 className="font-extrabold text-center text-[46px]">
          All Integrations Available
        </h2>
      </div>
      <div className="overflow-x-auto flex gap-8 justify-center">
        <PlatformCard
          logo="/logo-app/Figma.svg"
          name="Figma"
          type="Design Software"
        ></PlatformCard>
        <PlatformCard
          logo="/logo-app/figma2.svg"
          name="Whimsical"
          type="Design Software"
        ></PlatformCard>
        <PlatformCard
          logo="/logo-app/Group 5.svg"
          name="Trello"
          type="Design Software"
        ></PlatformCard>
        <PlatformCard
          logo="/logo-app/InVision.svg"
          name="Invision"
          type="Design Software"
        ></PlatformCard>
        <PlatformCard
          logo="/logo-app/Jira.svg"
          name="Figma"
          type="Design Software"
        ></PlatformCard>
      </div>
      <div className="overflow-x-auto flex gap-8 justify-center">
        <PlatformCard
          logo="/logo-app/image 161.svg"
          name="Miro"
          type="Design Software"
        ></PlatformCard>
        <PlatformCard
          logo="/logo-app/Logo Assets.svg"
          name="Webflow"
          type="Design Software"
        ></PlatformCard>
        <PlatformCard
          logo="/logo-app/Elementor.svg"
          name="Elementor"
          type="Design Software"
        ></PlatformCard>
        <PlatformCard
          logo="/logo-app/Firebase.svg"
          name="Firebase"
          type="Design Software"
        ></PlatformCard>
      </div>
    </section>
  );
};

export default Integration;
