import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <div className="w-full lg:md:justify-center p-10 bg-neutral-100 justify-center items-center lg:md:items-center flex">
      <div className="w-[1208px] self-stretch pt-[34px] flex-col justify-end items-center gap-14 inline-flex">
        <div className="w-auto h-[87px] text-center text-blue-950 text-lg md:text-xl lg:text-2xl font-bold leading-[48px]">
          Features of TIMBA Your seamless time tracking solution
        </div>
        <div className="w-full gap-4 max-h-fit relative md:grid-cols-2 lg:grid-cols-3 justify-center items-center grid">
          <div className="w-[375.95px] h-[367px]  relative bg-white rounded-lg">
            <div className="w-[214.51px] h-6 left-[32px] top-[118px] absolute text-blue-950 text-xl font-bold">
              Employee Onboarding
            </div>
            <div className="left-[32px] top-[151px] absolute justify-start items-start inline-flex">
              <div className="text-gray-500 text-base font-normal font-['Lato'] leading-7">
                TIMBA makes it easy to onboard new <br />
                employees by providing them with a <br />
                pre-configured account and access to
                <br />
                all the features they need to get started.
              </div>
            </div>
            <div className="w-[50px] h-[50px] left-[32px] top-[40px] absolute">
              <Image
                src="/clarity_employee-line.svg"
                alt="image"
                height={41}
                width={41}
                className="left-[14px] top-0 absolute bg-white rounded-tr"
              />
              <div className="w-[41px] h-[41px] left-0 top-[18px] absolute"></div>
            </div>
          </div>
          <div className="w-[375.95px] h-[367px] relative bg-white rounded-lg">
            <div className="w-[238px] h-6 left-[32.05px] top-[118px] absolute text-blue-950 text-xl font-bold">
              Automated timesheets
            </div>
            <div className="left-[32px] top-[151px] absolute justify-start items-start inline-flex">
              <div className="text-gray-500 text-base font-normal font-['Lato'] leading-7">
                TIMBA automatically tracks time spent on <br />
                tasks and projects, so you don&apos;t have to <br />
                worry about manually entering timesheets.
              </div>
            </div>
            <div className="w-[50px] h-[50px] left-[32px] top-[40px] absolute">
              <div className="w-9 h-9 left-[14px] top-0 absolute bg-white rounded-tr" />
              <div className="w-9 h-9 left-0 top-[14px] absolute justify-center items-center inline-flex">
                <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                  <Image
                    src="/timesheets.svg"
                    alt="image"
                    height={41}
                    width={41}
                    className="relative flex-col justify-start items-start flex"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[375.95px] h-[367px] relative bg-white rounded-lg">
            <div className="w-[237px] h-6 left-[32.09px] top-[118px] absolute text-blue-950 text-xl font-bold">
              Contract Management
            </div>
            <div className="left-[32px] top-[151px] absolute justify-start items-start inline-flex">
              <div className="text-gray-500 text-base font-normal font-['Lato'] leading-7">
                Manage all employee contracts securely in <br />
                one place. Monitor contract status, start and <br />
                end dates, and milestones. Generate invoices <br />
                and keep tabs on payments received. <br />
                Receive alerts for approaching contract <br />
                expirations.
              </div>
            </div>
            <Image
              src="/clarity_contract-line.svg"
              alt="image"
              height={41}
              width={41}
              className="w-[41px] h-[41px] left-[32.09px] top-[52px] absolute"
            />
          </div>
          <div className="w-[375.95px] h-[367px] relative bg-white rounded-lg">
            <div className="w-[172.89px] h-6 left-[32px] top-[118px] absolute text-blue-950 text-xl font-bold">
              Payment Partner
            </div>
            <div className="pr-[4.95px] left-[32px] top-[151px] absolute justify-start items-start inline-flex">
              <div className="text-gray-500 text-base font-normal font-['Lato'] leading-7">
                TIMBA integrates with popular payment <br />
                solutions so that you can pay your team <br />
                easily.
              </div>
            </div>
            <Image
              src="/mdi_account-payment-outline.svg"
              alt="image"
              height={41}
              width={41}
              className="left-[32px] top-[56px] absolute"
            />
          </div>
          <div className="w-[375.95px] h-[367px] relative bg-white rounded-lg">
            <div className="w-[204.11px] h-6 left-[32px] top-[118px] absolute text-blue-950 text-xl font-bold">
              Reports
            </div>
            <div className="pr-[11.95px] left-[32px] top-[151px] absolute justify-start items-start inline-flex">
              <div className="text-gray-500 text-base font-normal font-['Lato'] leading-7">
                TIMBA provides you with reports on <br />
                productivity, billable hours, and other <br />
                metrics so you can track your productivity
                <br />
                progress and make adjustments
              </div>
            </div>
            <Image
              src="/solar_chart-outline.svg"
              alt="image"
              height={41}
              width={41}
              className="left-[32px] top-[40px] absolute"
            />
          </div>
          <div className="w-[375.95px] h-[367px] relative bg-white rounded-lg">
            <div className="w-[281.18px] h-6 left-[32px] top-[118px] absolute text-blue-950 text-xl font-bold">
              Client Onboarding
            </div>
            <div className="left-[32px] top-[151px] absolute justify-start items-start inline-flex">
              <div className="text-gray-500 text-base font-normal font-['Lato'] leading-7">
                For Subcontractors, TIMBA helps you <br />
                onboard new clients quickly and easily. <br />
                With TIMBA, you can create pre-configured <br />
                accounts for your new clients, provide <br />
                them with access to all the features they <br />
                need, and track your productivity.
              </div>
            </div>
            <Image
              src="/mdi_office-building-plus-outline.svg"
              alt="image"
              height={41}
              width={41}
              className="left-[32.09px] top-[52px] absolute"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
