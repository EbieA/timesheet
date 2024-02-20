import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex flex-col justify-center text-center text-white bg-blue-950">
        <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12 w-full min-h-[294px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="/pricingMac.jpeg"
            className="object-cover absolute inset-0 size-full opacity-25"
          />
          <div className="flex relative flex-col mt-12 mb-11 max-md:my-10 max-md:max-w-full">
            <div className="self-center text-5xl font-extrabold whitespace-nowrap max-md:text-4xl">
              Pricing Plans
            </div>
            <div className="mt-4 text-sm font-semibold leading-7 max-md:max-w-full">
              Lorem ipsum dolor sit amet cultricies egestas commodo enim enim
              amet. .{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
