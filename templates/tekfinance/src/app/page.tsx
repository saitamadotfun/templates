import { Viewport } from "next";

import props from "../../.saitama/saitama.json";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Config from "@/components/Config";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeatureSection from "@/components/FeatureSection";

export const viewport: Viewport = {
  themeColor: "#6AF2CE",
  colorScheme: "dark",
};

export default function Home() {
  return (
    <body className="page flex flex-col bg-black text-white text-[14px] overflow-x-hidden overflow-y-scroll">
      <div className="flex-1 flex flex-col bg-gradient-to-r from-primary-alpha overflow-x-hidden overflow-y-scroll">
        <div className="flex flex-col space-y-32 desktop:self-center">
          <div>
            <Header {...props.HomePage.Header} />
          </div>
          <div>
            <div className="flex flex-col space-y-16">
              <HeroSection {...props.HomePage.HeroSection} />
              <FeatureSection {...props.HomePage.FeatureSection} />
              <AboutSection {...props.HomePage.AboutSection} />
            </div>
            <Footer {...props.HomePage.Footer} />
          </div>
        </div>
      </div>
      <Config {...props.HomePage.Config} />
    </body>
  );
}
