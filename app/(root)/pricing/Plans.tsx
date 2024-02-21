"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

const BASE_URL = "https://pi-commandcenterdev.azurewebsites.net";

interface Plan {
  id: string;
  name: string;
  description: string;
  recommendedFor: string;
  features: string[]; // Ensure that features is defined as an array of strings
  monthlyAmount: number;
  monthlyDiscount: number;
  yearlyAmount: number;
  yearlyDiscount: number;
  hasFreeTrial: boolean;
}

const Plans = () => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/api/subscription/subscriptions`
        );
        const responseData = await response.json();

        if (responseData.status && responseData.data) {
          setPlans(responseData.data); // Assuming responseData.data contains the array of plans
        } else {
          console.log("Failed to fetch plans:", responseData.message);
        }
      } catch (error) {
        console.error("Error fetching plans:", error);
      }
    };

    fetchPlans();
  }, []);

  const handleGetStartedClick = (planId: string) => {
    setSelectedPlanId(planId);
  };

  return (
    <div className="p-10 flex flex-col gap-4">
      <div className="flex justify-center items-center gap-5 px-5 max-w-[300px]">
        <div className="grow text-base font-medium leading-6 text-center text-black whitespace-nowrap">
          Monthly Billing
        </div>
        <div className="inline-flex items-center">
          <div className="relative inline-block w-8 h-4 rounded-full cursor-pointer">
            <input
              id="switch-component"
              type="checkbox"
              className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-blue-gray-100 checked:bg-gray-900 peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
              defaultChecked
            />
            <label
              htmlFor="switch-component"
              className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
            >
              <div
                className="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
                data-ripple-dark="true"
              ></div>
            </label>
          </div>
        </div>
        <div className="grow justify-center px-0.5 text-base font-light leading-6 text-center whitespace-nowrap text-slate-500">
          Annual Billing
        </div>
        <div className="text-emerald-700 text-xs font-bold font-['Public Sans'] uppercase leading-[18px]">
          25% OFF
        </div>
      </div>
      <div className="flex gap-5 max-md:gap-4 ">
        <div className="flex w-full max-md:ml-0 max-md:w-full gap-2">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col grow pt-px pb-12 w-full text-base leading-6 bg-white rounded-xl border-solid border-[3px] ${
                selectedPlanId === plan.id ? "border-slate-600" : ""
              } max-md:mt-1`}
            >
              <div className="flex flex-col pt-6 pb-12 p-6 font-extrabold max-md:pl-5">
                <div className="justify-center self-start px-3 py-2 text-xs tracking-wide leading-loose text-blue-900 uppercase bg-amber-300 rounded-[40px]">
                  {plan.hasFreeTrial && "30 DAYS FREE TRIAL"}
                </div>
                <div className="self-start mt-1.5 text-2xl leading-9 text-black">
                  {plan.name}
                </div>
                <div className="self-start mt-1 font-light leading-6 text-slate-600">
                  {plan.description}
                </div>
                <div className="mt-2.5 text-4xl font-bold text-black leading-[48.1px]">
                  ${plan.monthlyAmount}
                </div>
                <div className="mt-1 font-light text-slate-500">
                  /month, billed annually
                </div>
                {selectedPlanId === plan.id ? (
                  <Button className="text-center h-14 text-white font-bold justify-center items-center  px-16 py-4 mt-10 flex bg-slate-600 rounded-xl max-md:px-5 border-[3px]">
                    Get Started
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleGetStartedClick(plan.id)}
                    className="justify-center h-14 items-center flex font-bold text-center bg-white rounded-xl px-16 py-4 mt-10 border-solid border-[3px] border-slate-600 text-slate-600 max-md:px-5"
                  >
                    Get Started
                  </Button>
                )}
                <div className="mt-11 text-sm uppercase text-slate-900 max-md:mt-10 max-md:mr-0.5">
                  Recommended for
                </div>
                <div className="mt-3 leading-6 text-slate-600 max-md:mr-0.5">
                  {plan.recommendedFor}
                </div>
              </div>
              <div className="flex flex-col px-6 py-8 font-light text-black border-t border-solid border-t-slate-300 max-md:px-5">
                <div className="font-extrabold">Features Include:</div>
                {Array.isArray(plan.features) &&
                  plan.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex gap-4 justify-between mt-4"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/20fa628d86997df25a63941d39f605843372dbd86f54b54a5fdda6185efdea4a?"
                        className="w-6 aspect-square"
                      />
                      <div className="flex-auto">{feature}</div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
