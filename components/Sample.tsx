import React from "react";
import Image from "next/image";

const Sample = () => {
  return (
    <>
      <div className="hidden w-full ld:md:w-full ld:md:h-[1047px] ld:md:justify-center ld:md:items-center container overflow-hidden lg:md:inline-flex">
        <div className="w-[1440px] h-[1047px] relative flex-col justify-start items-start flex bg-white">
          <div className="w-[1440px] px-[628px] bg-blue-950 rounded-bl-[1833px] rounded-br-[1833px] overflow-hidden justify-center items-center inline-flex">
            <div className="grow shrink basis-0 self-stretch px-4 pt-[84px] flex-col justify-end items-center gap-[84px] inline-flex">
              <div className="w-[860px] h-24 pl-[64.56px] pr-[64.38px] justify-center items-center inline-flex">
                <div className="w-[731.06px] h-[104px] text-center text-white text-[43px] font-bold font-['Nunito'] leading-[48px]">
                  Time tracking software features for
                  <br />
                  managing employees
                </div>
              </div>
              <div className="w-[1208px] h-[1116.50px] relative flex-col justify-start items-start flex">
                <div className="pb-6 rounded-[64px] justify-start items-start inline-flex">
                  <div className="grow shrink basis-0 h-[364px] justify-start items-start flex">
                    <div className="w-[417px] h-[364px] px-12 pt-12 pb-[104px] bg-white rounded-[10px] shadow flex-col justify-start items-start gap-4 inline-flex">
                      <div className="w-9 h-9 relative">
                        <div className="w-8 h-[31px] left-[2.08px] top-[2.34px] absolute">
                          <Image
                            src="/clarity_on-holiday-line.svg"
                            alt="image"
                            width={36}
                            height={36}
                            className="relative rounded-tl-[10px] rounded-tr-[10px]"
                          />
                        </div>
                      </div>
                      <div className="text-blue-950 text-[19px] font-semibold font-['Nunito'] leading-loose">
                        Manage Time off, holidays and Break
                      </div>
                      <div className="pr-[6.67px] justify-start items-start inline-flex">
                        <div className="text-gray-500 text-base font-normal font-['Nunito'] leading-7">
                          Review and approve employee time <br />
                          off requests from a single location,
                          <br />
                          Set up paid or unpaid time off break <br />
                          policies for better time tracking.
                        </div>
                      </div>
                    </div>
                    <div className="w-0.5 h-[332px] border-r border-blue-950 border-opacity-10" />
                  </div>
                  <div className="grow shrink basis-0 h-[364px] justify-start items-start flex">
                    <div className="p-12 rounded-[10px] flex-col justify-start items-start gap-4 inline-flex">
                      <Image
                        src="/clarity_wallet-line.svg"
                        alt="image"
                        height={36}
                        width={36}
                        className="relative"
                      />
                      <div className="text-white text-[19px] font-bold font-['Nunito'] leading-loose">
                        Manage Payroll
                      </div>
                      <div className="pr-[13.67px] justify-start items-start inline-flex">
                        <div className="text-indigo-100 text-base font-normal font-['Nunito'] leading-7">
                          Use integrations with PayPal, Payoneer, <br />
                          Wise, and Bitwage to automate payroll <br />
                          based on billable hours. Set automatic
                          <br /> weekly or monthly payments for <br />
                          international and local employees, or <br />
                          send payments manually.
                        </div>
                      </div>
                    </div>
                    <div className="w-0.5 h-[332px] border-r border-white" />
                  </div>
                  <div className="px-12 pt-12 pb-[104px] rounded-[10px] flex-col justify-start items-start gap-4 inline-flex">
                    <Image
                      src="/fluent_shifts-open-24-filled.svg"
                      alt="image"
                      height={36}
                      width={36}
                      className="relative"
                    />
                    <div className="text-white text-[19px] font-bold font-['Nunito'] leading-loose">
                      Employee shift scheduling
                    </div>
                    <div className="w-[293px] text-indigo-100 text-base font-normal font-['Nunito'] leading-7">
                      You can create shift schedules, assign shifts to
                      employees, and track employee availability. You can also
                      generate reports on shift scheduling to see how well your
                      schedules are working.
                    </div>
                  </div>
                </div>
                <div className="w-[1208px] h-[748.50px] relative">
                  <div className="w-[129px] h-[129px] left-[978px] top-[32px] absolute bg-amber-300 rounded-full" />
                  <div className="w-[150px] h-[110px] left-[997.68px] top-[13px] absolute" />
                  <Image
                    className="w-[904px] h-[568px] left-[152px] top-[81px] absolute rounded-[20px] shadow"
                    src="/macbookm1.png"
                    alt="image"
                    height={904}
                    width={568}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1440px] h-[361px] top-[2900px] ">
          <div className="w-[1440px] h-[361px]  bg-neutral-100" />
          <div className="w-[969px] h-[124px] text-center text-blue-950 text-[44px] font-bold  leading-[48px]">
            TIMBA is the right tool to help you increase your productivity and
            profit.
          </div>
          <div className="w-[354px] h-[66.23px] ">
            <div className="w-[354px] h-[66.23px] bg-teal-500 rounded-lg" />
            <div className="w-[310.34px] h-[27.08px] text-center text-white text-lg font-bold leading-normal">
              Start Using TIMBA Today
            </div>
          </div>
          <div className="w-[402px] h-6 text-center text-stone-500 text-sm font-normal">
            Sign up for FREE trial - No credit card required
          </div>
        </div>
      </div>
    </>
  );
};

export default Sample;
