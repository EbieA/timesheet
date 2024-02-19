import React from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <section className="">
        <div className="mx-auto w-full max-w-5xl">{children}</div>
      </section>
      <Footer />
    </main>
  );
};

export default Layout;
