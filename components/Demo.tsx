import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const Demo = () => {
  return (
    <div className="w-[1440px] h-[1342px] top-[350px] flex justify-center relative ">
      <div className="w-[1228px] h-[416px] top-[292px] flex justify-center  absolute bg-blue-950 rounded-[25px] overflow-hidden">
        <div className="w-[458px] h-[458px] left-[739px] top-[138px] absolute bg-amber-300 rounded-full" />
        <div className="w-[187px] h-[187px] left-[-102px] top-[-78px] absolute bg-stone-400 rounded-full" />
        <div className="left-[111px] top-[82px] absolute text-white text-[34px] font-extrabold font-['Nunito']">
          Explore the world of efficient time
          <br />
          tracking and with TIMBA – Your partner <br />
          in optimizing productivity.
        </div>
        <Image
          className="w-[572px] h-[318px] left-[626px] top-[126px] absolute overflow-hidden"
          src="/laptop.png"
          alt="laptop"
          height={572}
          width={318}
        />
        <div className="w-[354px] h-16 left-[111px] top-[249px] absolute">
          <div className="w-[354px] h-16 left-0 top-0 absolute bg-teal-500 rounded-lg" />
          <div className="w-[310.34px] h-[27.08px] left-[20.85px] top-[18.34px] absolute text-center text-white text-lg font-bold font-['Nunito'] leading-normal">
            Start Using TIMBA Today
          </div>
        </div>
        <div className="w-[402px] h-6 left-[111px] top-[326px] absolute text-white text-sm font-normal font-['Nunito']">
          Sign up for FREE trial - No credit card required
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className=" top-0 absolute text-center text-blue-950 text-[34px] font-semibold font-['Nunito']">
          Have a Large Team - Book a product Demo
        </button>
        <div className="w-[354px] h-[66.23px] top-[74px] absolute">
          <Button className="w-[354px] h-[66.23px] top-[18.25px] absolute text-center text-white text-sm font-['Nunito'] bg-teal-500 rounded-lg hover hover:bg-teal-400 active:bg-teal-300 focus:outline-none focus:ring focus:ring-teal-300">
            Book A Product Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Demo;
