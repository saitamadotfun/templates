import props from "../../.saitama/saitama.json";
import "./index.page.css";

import Config from "@/components/Config";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HowToBuy from "@/components/home/HowToBuy";
import HeroDisplay from "@/components/home/HeroDisplay";
import HeroSection from "@/components/home/HeroSection";

export default function HomePage() {
  return (
    <>
      <div className="page flex-1 flex flex-col">
        <HeroSection {...props.HomePage.HeroSection} />
        <HeroDisplay {...props.HomePage.HeroDisplay} />
        <HowToBuy {...props.HomePage.HowToBuy} />
        <Footer {...props.HomePage.Footer} />
      </div>
      <Config {...props.HomePage.Config} />
    </>
  );
}
