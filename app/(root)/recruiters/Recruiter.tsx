import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Recruiter = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-white py-20 gap-4">
      <div className="flex flex-col justify-center w-full bg-blue-950 max-md:max-w-full">
        <div className="overflow-hidden px-20 py-12 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto text-white max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl font-extrabold max-md:max-w-full max-md:text-4xl">
                  Simplifying Client <br />
                  Management and <br />
                  Employee Onboarding
                </div>
                <div className="mt-6 text-xl font-semibold max-md:max-w-full">
                  With TIMBA&apos;s powerful functionalities, recruiters can
                  unlock the true potential of efficient candidate sourcing,
                  seamless onboarding, contract management and client
                  satisfaction
                </div>
                <Button className="justify-center px-8 py-6 mt-12 text-lg font-bold leading-6 text-center bg-teal-500 rounded-lg max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <a href="/pricing">Start Using for FREE – Sign up here</a>
                </Button>
                <div className="mt-5 text-sm italic font-medium max-md:max-w-full">
                  Enjoy all features for free ( 30 days trail - No credit card
                  required.)
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
              <Image
                height={438}
                width={658}
                loading="lazy"
                src="/meeting.jpeg"
                alt="meeting"
                className="self-stretch my-auto w-full aspect-[1.49] max-md:mt-10 max-md:max-w-full rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-center mt-36 w-full max-w-[1234px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 text-lg font-bold leading-[48.06px] text-blue-950 max-md:mt-10 max-md:max-w-full">
              <div className="text-5xl leading-10 max-md:max-w-full">
                Streamlined Client Management
              </div>
              <div className="mt-12 max-md:mt-10 max-md:max-w-full">
                Client Collaboration Made Easy
              </div>
              <div className="mt-5 text-base leading-7 text-gray-500 max-md:max-w-full">
                TIMBA&apos;s collaboration tools facilitate seamless
                communication with clients. Share candidate profiles, progress
                updates, and feedback effortlessly, ensuring strong partnerships
                and client satisfaction.
              </div>
              <div className="mt-12 max-md:mt-10 max-md:max-w-full">
                Centralized Client Data
              </div>
              <div className="mt-6 text-base leading-7 text-gray-500 max-md:max-w-full">
                Store client information in one secure location. TIMBA&apos;s
                centralized data management helps recruiters access client
                details and history at their fingertips, improving client
                relationships and interactions.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <Image
              alt="holder"
              loading="lazy"
              src="/macMockup.png"
              width={602}
              height={376}
              className="self-stretch my-auto w-full shadow-sm aspect-[1.56] max-md:mt-10 max-md:max-w-full rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="self-center mt-40 w-full max-w-[1232px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <Image
              alt="holder"
              loading="lazy"
              src="/shift.png"
              width={602}
              height={376}
              className="mt-8 w-full shadow-sm aspect-[1.61] max-md:mt-10 max-md:max-w-full rounded-md"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 text-lg font-bold leading-[48.06px] text-blue-950 max-md:mt-10 max-md:max-w-full">
              <div className="text-5xl leading-10 max-md:max-w-full">
                Effortless Employee Onboarding
              </div>
              <div className="mt-16 max-md:mt-10 max-md:max-w-full">
                Automated Onboarding Processes
              </div>
              <div className="mt-5 text-base leading-7 text-gray-500 max-md:max-w-full">
                TIMBA streamlines the employee onboarding journey. Automate
                paperwork, training materials, and compliance tasks, providing a
                smooth onboarding experience for new hires and saving time for
                recruiters.
              </div>
              <div className="mt-12 max-md:mt-10 max-md:max-w-full">
                Real-Time Progress Monitoring
              </div>
              <div className="mt-6 text-base leading-7 text-gray-500 max-md:max-w-full">
                Stay updated on onboarding progress with TIMBA&apos;s real-time
                tracking. Recruiters can monitor each step of the onboarding
                process, ensuring a seamless and timely transition for new
                employees.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center px-16 py-12 mt-24 w-full bg-neutral-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="mt-14 mr-4 mb-16 ml-11 max-md:my-10 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-lg font-bold leading-[48.06px] text-blue-950 max-md:mt-3.5 max-md:max-w-full">
                <div className="text-5xl leading-10 max-md:max-w-full">
                  Powerful Reporting and Analytics
                </div>
                <div className="mt-10 max-md:mt-10 max-md:max-w-full">
                  Comprehensive Recruitment Analytics
                </div>
                <div className="mt-5 text-base leading-7 text-gray-500 max-md:max-w-full">
                  TIMBA&apos;s advanced reporting and analytics provide
                  recruiters with valuable insights into their recruitment
                  performance. Identify successful sourcing strategies and
                  optimize recruitment processes for better results
                </div>
                <div className="mt-12 max-md:mt-10 max-md:max-w-full">
                  Data-Driven Decision Making
                </div>
                <div className="mt-5 text-base leading-7 text-gray-500 max-md:max-w-full">
                  Empowered by TIMBA&apos;s analytics, recruiters can make
                  informed decisions that drive recruitment success. Say goodbye
                  to guesswork and rely on data for strategic recruitment moves.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full rounded-md">
              <Image
                alt="report"
                width={677}
                height={281}
                loading="lazy"
                src="/report.png"
                className="grow mt-7 w-full max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-auto ">
        <div className="w-[1228px] h-[416px] hidden lg:flex flex-col justify-center items-center relative bg-blue-950 rounded-[25px] overflow-hidden">
          <div className="w-[458px] h-[458px] left-[739px] top-[138px] absolute bg-amber-300 rounded-full" />
          <div className="w-[187px] h-[187px] left-[-102px] top-[-78px] absolute bg-stone-400 rounded-full" />
          <div className="left-[111px] top-[82px] absolute text-white text-[34px] font-extrabold">
            Simplify candidate sourcing, elevate <br />
            client management, and ensure a <br />
            seamless employee onboarding process.
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
            <div className="w-[310.34px] h-[27.08px] left-[20.85px] top-[18.34px] absolute text-center text-white text-lg font-bold leading-normal">
              Start Using TIMBA Today
            </div>
          </div>
          <div className="w-[402px] h-6 left-[111px] top-[326px] absolute text-white text-sm font-normal">
            Sign up for FREE trial - No credit card required
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruiter;
