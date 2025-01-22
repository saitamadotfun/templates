import type { Viewport } from "next";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Config from "@/components/Config";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeatureSection from "@/components/FeatureSection";

import { getProps } from "@/actions/saveProps";

export const viewport: Viewport = {
  colorScheme: "dark",
};

export default async function Home() {
  const props = await getProps();

  return (
    <body className="page flex flex-col bg-black text-white text-[14px] overflow-x-hidden overflow-y-scroll">
      <div className="flex-1 flex flex-col bg-gradient-to-r from-primary-alpha overflow-x-hidden overflow-y-scroll">
        <div className="flex flex-col space-y-32 desktop:self-center">
          <Header {...props.HomePage.Header} />
          <div className="flex flex-col space-y-16">
            <HeroSection {...props.HomePage.HeroSection} />
            <FeatureSection {...props.HomePage.FeatureSection} />
            <AboutSection {...props.HomePage.AboutSection} />
          </div>
          <Footer {...props.HomePage.Footer} />
        </div>
      </div>
      <Config {...props.HomePage.Config} />
    </body>
  );
}
