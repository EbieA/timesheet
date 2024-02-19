import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full h-full bg-neutral-100 bottom-0 ">
      <div className="gap-8 flex flex-wrap justify-between p-20">
        <div className="h-full gap-4 flex flex-col">
          <Link href="/" className="flex ">
            <Image alt="logo" src="/logo.png" width={38} height={38} />
            <Image
              className="ml-2"
              alt="logo"
              src="/ADMIN-TIMESHEET.svg"
              width={184}
              height={14}
            />
          </Link>
          <div className="w-[369px] text-gray-500 text-sm font-normal leading-7">
            The TIMBA is a powerful and user-friendly software designed to
            streamline time management and project tracking for individuals,
            teams, and businesses of all sizes. With its intuitive interface and
            robust features, TIMBA empowers users to efficiently monitor their
            time, optimize productivity, and gain valuable insights into
            workforce performance.
          </div>
        </div>
        <div className="h-full flex flex-col gap-4">
          <div className=" text-blue-950 text-2xl font-bold ">Sections</div>
          <div className=" text-blue-950 text-base font-medium ">Home</div>
          <Link
            href="/pricing"
            className=" text-blue-950 text-base font-medium "
          >
            Pricing
          </Link>
          <div className=" text-blue-950 text-base font-medium ">
            Book A Demo
          </div>
          <div className=" text-blue-950 text-base font-medium ">FAQs</div>
        </div>
        <div className="h-full flex flex-col gap-4">
          <div className=" text-blue-950 text-2xl font-bold ">Quick Links</div>
          <div className=" text-blue-950 text-base font-medium ">Legal</div>
          <div className=" text-blue-950 text-base font-medium ">
            Terms Of Use
          </div>
        </div>
        <div className="h-full flex flex-col gap-4">
          <div className=" text-blue-950 text-2xl font-bold ">Contact Us</div>
          <div className=" text-gray-500 text-sm font-medium ">
            Our Support team is available 24 /7 to <br />
            answer your queries
          </div>
          <div className="flex items-center gap-4">
            <Image
              src="/ic_baseline-facebook.svg"
              alt="social"
              width={20}
              height={20}
              className=""
            />
            <Image
              src="/ri_twitter-line.svg"
              alt="social"
              width={20}
              height={20}
              className=""
            />
            <Image
              src="/mdi_instagram.svg"
              alt="social"
              width={20}
              height={20}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
