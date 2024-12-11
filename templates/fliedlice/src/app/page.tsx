import clsx from "clsx";
import { chinese } from "@/assets/fonts";

import props from "../../.saitama/saitama.json";

import HomeFaq from "@/components/Faq";
import Config from "@/components/Config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeTokenomic from "@/components/Tokenomic";
import HomeHeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <main
        className={clsx(
          chinese.className,
          "flex-1 flex flex-col bg-gradient-to-b from-primary via-primary bg-no-repeat overflow-y-scroll page"
        )}
      >
        <Header {...props.HomePage.Header} />
        <div className="flex-1 flex flex-col space-y-16">
          <div className="flex-1 flex flex-col space-y-16">
            <HomeHeroSection {...props.HomePage.HeroSection} />
            <HomeTokenomic {...props.HomePage.Tokenomic} />
            <HomeFaq {...props.HomePage.Faq} />
          </div>
          <Footer {...props.HomePage.Footer} />
        </div>
      </main>
      <Config {...props.HomePage.Config} />
    </>
  );
}
