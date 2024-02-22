import React from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <section>
        <div>{children}</div>
      </section>
      <Footer />
    </main>
  );
};

export default Layout;
