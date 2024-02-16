"use client";
import React, { useState } from "react";
import Image from "next/image";

const Faq = () => {
  // State to track which accordion item is open
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  // Function to toggle accordion items
  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="w-[1440px] h-[1342px] top-[550px] justify-center items-center relative">
      <div className="w-full h-14 text-center text-blue-950 text-[44px] font-['Nunito'] leading-[48px]">
        FAQs
      </div>
      <div className="w-full h-10 text-center text-teal-500 text-sm font-bold font-['Nunito'] leading-[48px]">
        FREQUENTLY ASKED QUESTIONS
      </div>
      <div className="w-[500px] h-[132px] left-[287px] top-[115px] absolute">
        {FAQData.map((item, index) => (
          <div
            key={index}
            className={`w-[896px] mb-6 bg-white rounded-lg shadow p-4 justify-center items-center pl-6 pr-4 ${
              activeAccordion === index
                ? "border-solid border-2 border-teal-500 shadow"
                : ""
            }`}
          >
            <div
              className={`h-28 flex justify-between items-center rounded-lg cursor-pointer ${
                activeAccordion === index ? "" : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="text-sky-900 text-lg font-['Nunito'] leading-[30px]">
                {item.question}
              </div>

              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                {activeAccordion === index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 bg-teal-500 rounded-full text-white shadow-md"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 bg-white rounded-full text-teal-500 shadow-md"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19l7-7-7-7"
                    />
                  </svg>
                )}
              </div>
            </div>
            {activeAccordion === index && (
              <div className="text-slate-500 text-lg font-normal font-['Nunito'] leading-[30px] fade-in">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const FAQData = [
  {
    question: "What is TIMBA?",
    answer:
      "TIMBA is a powerful and user-friendly software designed to streamline time management and project tracking for individuals, teams, and businesses of all sizes. It offers a range of features, including contract management, time tracking, payment monitoring, and more.",
  },
  {
    question: "Who can benefit from TIMBA?",
    answer:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid...",
  },
  {
    question: "What are the key features of TIMBA?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit optio vitae inventore autem fugiat rerum sed laborum...",
  },
  {
    question:
      "How user-friendly is TIMBA? Is it suitable for non-tech-savvy users?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit optio vitae inventore autem fugiat rerum sed laborum...",
  },
  {
    question: "How does TIMBA optimize productivity?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit optio vitae inventore autem fugiat rerum sed laborum...",
  },
  {
    question:
      "Is TIMBA suitable for small businesses and large enterprises alike?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit optio vitae inventore autem fugiat rerum sed laborum...",
  },
];

export default Faq;
