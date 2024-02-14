import Landing from "@/components/Landing";
import Navbar from "../components/shared/Navbar";

export default function Home() {
  return (
    <main className="flex-col">
      <Navbar />
      <Landing />
    </main>
  );
}
