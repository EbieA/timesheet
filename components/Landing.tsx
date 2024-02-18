import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const Landing = () => {
  return (
    <div className="max-h-screen p-10 relative bg-white grid justify-center my-16 lg:flex w-full lg:md:justify-center items-center lg:md:items-center">
      <section className="flex flex-col items-center justify-center lg:justify-center p-16 gap-4">
        <p className="truncate  text-blue-950 text-[32px] font-semibold md:text-[45px] md:font-bold lg:text-[50px] lg:font-extrabold">
          The simple way to track <br />
          productivity, save time <br />
          and increase profit
        </p>
        <p className="truncate text-stone-400 text-base font-medium  md:text-lg md:font-semibold lg:text-xl lg:font-bold">
          The All-in-One Tracking Software App for Productivity
          <br /> increase, project management, Seamless Payment <br />
          Partnerships for Remote Team, Employee onboarding
          <br />
          and Management
        </p>
        <Button className="w-[357px] h-16 bg-teal-500">
          Start Using for FREE – Sign up here
        </Button>
        <p className="w-[402px] h-6  text-stone-500 text-[13px] font-normal ">
          Enjoy all features for free ( 30 days trail - No credit card
          required.)
        </p>
      </section>
      <Image
        className="hidden md:hidden lg:flex items-center justify-center  max-h-[89vh]"
        src="/lap.svg"
        width={800}
        height={450}
        alt="macbook"
      />
    </div>
  );
};

export default Landing;
