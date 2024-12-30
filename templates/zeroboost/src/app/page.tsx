import props from "../../.saitama/saitama.json";
import { MdArrowOutward } from "react-icons/md";

import "./index.page.css";

import { Config } from "@/components/Config";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/home/FaqSection";
import HeroSection from "@/components/home/HeroSection";
import FeatureSection from "@/components/home/FeatureSection";

export default function HomePage() {
  return (
    <div className="page flex-1 flex flex-col space-y-16">
      <div>
        <Header {...props.HomePage.Header} />
      </div>
      <main className="flex-1 flex flex-col space-y-8">
        <button className="self-center flex items-center space-x-4 border-2 border-primary p-1 rounded-full hover:bg-primary/10">
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
        <div className="h-xs" />
        <FeatureSection {...props.HomePage.FeatureSection} />
        <FaqSection {...props.HomePage.FaqSection} />
      </main>
      <Config {...props.HomePage.Config} />
      <Footer {...props.HomePage.Footer} />
    </div>
  );
}
