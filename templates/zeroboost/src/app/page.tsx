import "./index.page.css";

import { Config } from "@/components/Config";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TradeNow from "@/components/home/TradeNow";
import FaqSection from "@/components/home/FaqSection";
import HeroSection from "@/components/home/HeroSection";
import FeatureSection from "@/components/home/FeatureSection";
import RoadmapSection from "@/components/home/RoadmapSection";

import { getProps } from "@/actions/saveProps";

export default async function HomePage() {
  const props = await getProps();

  return (
    <>
      <div className="page flex-1 flex flex-col space-y-16">
        <Header {...props.HomePage.Header} />
        <main className="flex-1 flex flex-col space-y-8">
          <TradeNow {...props.HomePage.TradeNow} />
          <HeroSection {...props.HomePage.HeroSection} />
          <RoadmapSection {...props.HomePage.RoadmapSection} />
          <FeatureSection {...props.HomePage.FeatureSection} />
          <FaqSection {...props.HomePage.FaqSection} />
        </main>
        <Footer {...props.HomePage.Footer} />
      </div>
      <Config {...props.HomePage.Config} />
    </>
  );
}
