import React from "react";
import Landing from "@/app/(root)/(home)/Landing";
import Sample from "@/app/(root)/(home)/Sample";
import Features from "@/app/(root)/(home)/Features";
import Footer from "@/components/shared/Footer";
import Faq from "@/app/(root)/(home)/Faq";
import Demo from "@/app/(root)/(home)/Demo";

export default function HomePage() {
  return (
    <div className="justify-center flex flex-col 2xl:xl:lg:md:sm:w-screen px-10">
      <Landing />
      <Features />
      <Sample />
      <Faq />
      <Demo />
    </div>
  );
}
