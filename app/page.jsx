import Image from "next/image";
import { Button } from "@/components/ui/button";
// import { HeroSection } from "../components/hero";
import HeroSection from "@/components/hero";
export default function Home() {
  return (
    <div>
      Hello
      <div className="grid-background">
        <HeroSection />
      </div>
    </div>
  );
}
