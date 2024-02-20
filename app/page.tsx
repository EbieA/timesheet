import HomePage from "@/app/(root)/(home)/page";
import Navbar from "../components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomePage />
      <Footer />
    </main>
  );
}
