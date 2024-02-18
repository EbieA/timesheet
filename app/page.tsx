import Landing from "@/components/Landing";
import Sample from "@/components/Sample";
import Navbar from "../components/shared/Navbar";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import Demo from "@/components/Demo";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="justify-center flex flex-col 2xl:xl:lg:md:sm:w-screen px-10">
        <Landing />
        <Features />
        <Sample />
        <Faq />
        <Demo />
        <Footer />
      </div>
    </main>
  );
}
