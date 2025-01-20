import HeroSection from "@/components/home/HeroSection";
import props from "../../.saitama/saitama.json";
// import { MdArrowOutward } from "react-icons/md";

import "./index.page.css";

// import { Config } from "@/components/Config";
import Header from "@/components/layout/Header";
import AboutSection from "@/components/home/AboutSection";
import RaceSection from "@/components/home/RaceSection";
import BrewSection from "@/components/home/BrewSection";
import TokenomicsSection from "@/components/home/TokenomicsSection";
import Footer from "@/components/layout/Footer";
import { HowToBuy, stepsData } from "@/components/home/HowToBuy";
// import Footer from "@/components/layout/Footer";
// import FaqSection from "@/components/home/FaqSection";
// import HeroSection from "@/components/home/HeroSection";
// import FeatureSection from "@/components/home/FeatureSection";
// import RoadmapSection from "@/components/home/RoadmapSection";

export default function HomePage() {
  return (
    <div className="page flex-1 flex flex-col space-y-16">
      <div>
        <Header />
        <HeroSection />
        <AboutSection />
        <RaceSection />
        <TokenomicsSection />
        <HowToBuy steps={stepsData} />
        <BrewSection />

        <Footer />
      </div>
      {/* <main className="flex-1 flex flex-col space-y-8">
        <button className="self-center flex items-center space-x-4 border-2 border-primary p-1 rounded-full hover:bg-primary-alpha">
          <div className="flex items-center space-x-2">
            <div className="bg-primary text-black px-3 py-1 rounded-full">
              Live
            </div>
            <p className="font-300">Trade Now</p>
          </div>
          <div className="px-2">
            <MdArrowOutward className="text-lg" />
          </div>
        </button>
        <HeroSection {...props.HomePage.HeroSection} />
        <RoadmapSection {...props.HomePage.RoadmapSection} />
        <FeatureSection {...props.HomePage.FeatureSection} />
        <FaqSection {...props.HomePage.FaqSection} />
      </main> */}
      {/* <Config {...props.HomePage.Config} />
      <Footer {...props.HomePage.Footer} /> */}
    </div>
  );
}

// {...props.HomePage.Header}
