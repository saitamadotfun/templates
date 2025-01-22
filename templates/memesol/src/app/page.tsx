import "./page.index.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Config } from "@/components/Config";
import { HeroSection } from "@/components/HeroSection";
import { HelpSection } from "@/components/HelpSection";
import { AboutSection } from "@/components/AboutSection";

import { getProps } from "@/actions/saveProps";

export default async function Home() {
  const props = await getProps();

  return (
    <>
      <div className="page flex-1 flex flex-col">
        <div className="flex-1 flex flex flex-col space-y-16">
          <div className="flex flex-col space-y-4">
            <Header {...props.HomePage.Header} />
            <HeroSection {...props.HomePage.HeroSection} />
          </div>
          <HelpSection {...props.HomePage.HelpSection} />
          <AboutSection {...props.HomePage.AboutSection} />
          <Config {...props.HomePage.Config} />
          <Footer {...props.HomePage.Footer} />
        </div>
      </div>
    </>
  );
}
