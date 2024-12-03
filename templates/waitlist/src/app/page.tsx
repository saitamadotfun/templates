import props from "../../.saitama/saitama.json";

import { Header } from "@/components/Header";
import { Config } from "@/components/Config";
import { HeroSection } from "@/components/HeroSection";
import { FeatureSection } from "@/components/FeatureSection";

export default async function Home() {
  return (
    <>
      <div className="flex-1 flex flex flex-col p-4 overflow-y-scroll page">
        <Header {...props.HomePage.Header} />
        <div className="flex-1 flex flex-col">
          <HeroSection {...props.HomePage.HeroSection} />
          <FeatureSection {...props.HomePage.FeatureSection} />
        </div>
      </div>
      <Config {...props.HomePage.Config} />
    </>
  );
}
