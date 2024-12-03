import props from "../../.saitama/saitama.json";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Config } from "@/components/Config";
import { HeroSection } from "@/components/HeroSection";
import { HelpSection } from "@/components/HelpSection";
import { AboutSection } from "@/components/AboutSection";

export default function Home() {
  return (
    <>
      <div className="page flex-1 flex flex-col bg-black text-white overflow-y-scroll xl:px-16">
        <div className="flex-1 flex flex flex-col space-y-8 ">
          <div className="flex flex-col space-y-4">
            <Header {...props.HomePage.Header} />
            <HeroSection {...props.HomePage.HeroSection} />
          </div>
          <HelpSection {...props.HomePage.HelpSection} />
          <AboutSection {...props.HomePage.AboutSection} />
          <Footer {...props.HomePage.Footer} />
        </div>
      </div>
      <Config {...props.HomePage.Config} />
    </>
  );
}
