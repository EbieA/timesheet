import React from "react";
import Image from "next/image";

const Demo = () => {
  return (
    <div className="flex flex-col bg-white p-20">
      <div className="flex flex-col justify-center w-full text-5xl font-extrabold text-center text-white whitespace-nowrap bg-teal-500 max-md:max-w-full max-md:text-4xl">
        <div className="overflow-hidden relative flex-col justify-center items-center px-16 pt-28 pb-28 w-full min-h-[294px] max-md:px-5 max-md:py-10 max-md:max-w-full max-md:text-4xl">
          <Image
            alt="image"
            width={1495}
            height={468}
            loading="lazy"
            src="/manLap.jpeg"
            className="object-cover absolute inset-0 size-full opacity-25"
          />
          Book A Demo
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-12 w-full bg-neutral-100 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center mt-1.5 mb-8 w-full max-w-[1170px] max-md:max-w-full">
          <div className="text-5xl font-bold text-center leading-[51px] text-blue-950 max-md:max-w-full">
            Experience the Power of TIMBA Firsthand - Book your free demo
          </div>
          <div className="mt-11 text-base leading-7 text-center text-gray-500 max-md:mt-10 max-md:max-w-full">
            Book a personalized demo with our expert team and embark on an
            immersive journey into the world of TIMBA. Discover how our powerful
            software can transform your organization&apos;s productivity and
            efficiency.
          </div>
          <div className="self-stretch mt-24 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <Image
                  alt="image"
                  width={543}
                  height={715}
                  loading="lazy"
                  src="/ladylap.jpeg"
                  className="grow w-full aspect-[0.76] max-md:mt-10 max-md:max-w-full"
                />
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col mt-7 text-lg font-bold leading-[48.06px] text-blue-950 max-md:mt-10 max-md:max-w-full">
                  <div className="text-5xl leading-10 max-md:max-w-full">
                    A Personalized Demo Experience
                  </div>
                  <div className="mt-9 max-md:max-w-full">
                    Tailored to Your Needs
                  </div>
                  <div className="mt-4 text-base leading-7 text-gray-500 max-md:max-w-full">
                    Your success is our priority. During the demo, our team will
                    cater the experience to your specific requirements, focusing
                    on the features most relevant to your business.
                  </div>
                  <div className="mt-7 max-md:max-w-full">Live Interaction</div>
                  <div className="mt-5 text-base leading-7 text-gray-500 max-md:max-w-full">
                    Interact in real-time with our knowledgeable experts. Ask
                    questions, seek guidance, and witness the seamless
                    functionality of TIMBA firsthand.
                  </div>
                  <div className="mt-8 max-md:max-w-full">
                    Explore Our Suite of Solutions
                  </div>
                  <div className="mt-4 text-base leading-7 text-gray-500 max-md:max-w-full">
                    Whether you&apos;re interested in time tracking, project
                    management, HR management, or recruitment, our demo covers
                    it all. Experience the comprehensive capabilities of
                    TIMBA&apos;s powerful features.
                  </div>
                  <div className="mt-7 max-md:max-w-full">See the Impact</div>
                  <div className="mt-4 text-base leading-7 text-gray-500 max-md:max-w-full">
                    Witness how TIMBA can elevate your organization&apos;s
                    efficiency, productivity, and decision-making. From
                    streamlined processes to enhanced collaboration, discover
                    the tangible benefits of adopting TIMBA.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center mt-16 text-5xl font-bold text-center leading-[51.04px] text-blue-950 max-md:mt-10 max-md:max-w-full">
        How to Book Your Demo
      </div>
      <div className="self-center mt-24 w-full max-w-[1140px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-5 mt-16 text-lg font-bold leading-[48.06px] text-blue-950 max-md:mt-10 max-md:max-w-full">
              <div className="max-md:max-w-full">Simple Booking Process</div>
              <div className="mt-5 text-base leading-7 text-gray-500 max-md:max-w-full">
                Booking a demo is easy! Just fill out the short form on this
                page with your contact details and preferred demo date/time. Our
                team will promptly reach out to confirm your booking.
              </div>
              <div className="mt-14 max-md:mt-10 max-md:max-w-full">
                Experience TIMBA&apos;s Difference
              </div>
              <div className="mt-5 text-base leading-7 text-gray-500 max-md:max-w-full">
                Take the first step towards optimizing your operations and
                driving growth. Embrace TIMBA&apos;s transformative power and
                elevate your organization to new heights.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-8 py-12 w-full text-base font-semibold leading-7 text-white rounded-3xl bg-blue-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-4 justify-between max-md:flex-wrap max-md:max-w-full">
                <div className="flex flex-col flex-1">
                  <div>First Name</div>
                  <div className="shrink-0 mt-4 bg-white rounded-lg border border-gray-400 border-solid h-[54px]" />
                </div>
                <div className="flex flex-col flex-1">
                  <div className="self-start ml-4 max-md:ml-2.5">Last Name</div>
                  <div className="shrink-0 mt-4 bg-white rounded-lg border border-gray-400 border-solid h-[54px]" />
                </div>
              </div>
              <div className="mt-8 max-md:max-w-full">Company Email</div>
              <div className="shrink-0 mt-4 bg-white rounded-lg border border-gray-400 border-solid h-[54px] max-md:max-w-full" />
              <div className="mt-8 max-md:max-w-full">Location</div>
              <div className="justify-center items-start py-6 pr-16 pl-6 mt-4 whitespace-nowrap bg-white rounded-lg border border-gray-400 border-solid text-neutral-400 max-md:px-5 max-md:max-w-full">
                Select Location
              </div>
              <div className="mt-11 max-md:mt-10 max-md:max-w-full">
                Phone Number
              </div>
              <div className="shrink-0 mt-4 bg-white rounded-lg border border-gray-400 border-solid h-[54px] max-md:max-w-full" />
              <div className="mt-10 max-md:max-w-full">
                How many people will be using TIMBA
              </div>
              <div className="shrink-0 mt-3.5 bg-white rounded-lg border border-gray-400 border-solid h-[54px] max-md:max-w-full" />
              <div className="justify-center items-center px-16 py-5 mt-16 text-lg font-bold leading-6 text-center whitespace-nowrap bg-teal-500 rounded-lg max-md:px-5 max-md:mt-10 max-md:max-w-full">
                Submit
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
