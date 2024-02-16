import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className="w-[1440px] h-[406px] relative bg-neutral-100 bottom-0 mx-auto justify-center items-center">
        <Link href="/" className="left-[131px] top-[83px] flex absolute">
          <Image alt="logo" src="/logo.png" width={38} height={38} />
          <Image
            className="ml-2"
            alt="logo"
            src="/ADMIN-TIMESHEET.svg"
            width={184}
            height={14}
          />
        </Link>
        <div className="w-[313px] left-[1052px] top-[133px] absolute text-gray-500 text-sm font-medium font-['Nunito']">
          Our Support team is available 24 /7 to <br />
          answer your queries
        </div>
        <div className="w-[75px] left-[582px] top-[128px] absolute text-blue-950 text-base font-medium font-['Nunito']">
          Home
        </div>
        <div className="w-[150px] left-[794px] top-[128px] absolute text-blue-950 text-base font-medium font-['Nunito']">
          Legal
        </div>
        <div className="w-[75px] left-[582px] top-[173px] absolute text-blue-950 text-base font-medium font-['Nunito']">
          Pricing
        </div>
        <div className="w-[159px] left-[794px] top-[173px] absolute text-blue-950 text-base font-medium font-['Nunito']">
          Terms Of Use
        </div>
        <div className="w-[116px] left-[582px] top-[216px] absolute text-blue-950 text-base font-medium font-['Nunito']">
          Book A Demo
        </div>
        <div className="w-[75px] left-[582px] top-[263px] absolute text-blue-950 text-base font-medium font-['Nunito']">
          FAQs
        </div>
        <div className="left-[577px] top-[84px] absolute text-blue-950 text-2xl font-bold font-['Nunito']">
          Sections
        </div>
        <div className="left-[794px] top-[84px] absolute text-blue-950 text-2xl font-bold font-['Nunito']">
          Quick Links
        </div>
        <div className="left-[1052px] top-[84px] absolute text-blue-950 text-2xl font-bold font-['Nunito']">
          Contact Us
        </div>
        <Image
          src="/ic_baseline-facebook.svg"
          alt="social"
          width={20}
          height={20}
          className="left-[1052px] top-[193px] absolute"
        />
        <Image
          src="/ri_twitter-line.svg"
          alt="social"
          width={20}
          height={20}
          className="left-[1134px] top-[193px] absolute"
        />
        <Image
          src="/mdi_instagram.svg"
          alt="social"
          width={20}
          height={20}
          className="left-[1093px] top-[193px] absolute"
        />
        <div className="w-[369px] left-[131px] top-[133px] absolute text-gray-500 text-sm font-normal font-['Nunito'] leading-7">
          The TIMBA is a powerful and user-friendly software designed to
          streamline time management and project tracking for individuals,
          teams, and businesses of all sizes. With its intuitive interface and
          robust features, TIMBA empowers users to efficiently monitor their
          time, optimize productivity, and gain valuable insights into workforce
          performance.
        </div>
      </div>
    </div>
  );
};

export default Footer;
