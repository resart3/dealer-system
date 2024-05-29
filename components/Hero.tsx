"use client";

import Image from "next/image";

import { AdnButton } from "@/components";

const Hero = () => {
  const handleScroll = () => {

  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Application Driven
        </h1>
        <h1 className="hero__title text-yellow-300">
          Overlay Network
        </h1>

        <p className="hero__subtitle">
          All apps configuration
        </p>
        <p className="hero__subtitle">
          MUF Super Apps
        </p>

        <AdnButton
          title="Explore Apps"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>c

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;