import props from "../../.saitama/saitama.json";

import { MdBolt } from "react-icons/md";

import { Header } from "@/components/Header";
import { Config } from "@/components/Config";
import { HeroSection } from "@/components/HeroSection";
import { FeatureSection } from "@/components/FeatureSection";
import { TestimonialSection } from "@/components/TestimonialSection";

export default async function Home() {
  return (
    <>
      <Config {...props.HomePage.Config} />
      <div className="flex-1 flex flex flex-col overflow-y-scroll page">
        <Header {...props.HomePage.Header} />
        <div className="flex-1 flex flex-col space-y-16">
          <HeroSection {...props.HomePage.HeroSection} />
          <TestimonialSection {...props.HomePage.TestimonialSection} />
          <FeatureSection {...props.HomePage.FeatureSection} />
        </div>
        <div className="fixed bottom-4 left-4">
          <div className="inline-flex bg-black text-white px-8 py-2 rounded-full">
            <span>Powered by&nbsp;</span>
            <a
              href="https://www.saitama.fun"
              target="_blank"
              className="flex items-center space-x-2 font-bold capitalize"
            >
              <MdBolt className="text-base" />
              saitama.fun
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
