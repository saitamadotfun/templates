import clsx from "clsx";
import { layer } from "saitamadotfun/bunshi";

import { Config } from "./components/Config";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import TradeNow from "./components/home/TradeNow";
import FaqSection from "./components/home/FaqSection";
import HeroSection from "./components/home/HeroSection";
import FeatureSection from "./components/home/FeatureSection";
import RoadmapSection from "./components/home/RoadmapSection";

export const layers = [
  layer(
    ({ children, className }) => (
      <div
        className={clsx(
          "flex flex-col space-y-8 font-inter-tight font-normal bg-black text-white text-sm md:text-base md:space-y-24 ",
          className
        )}
      >
        {children}
      </div>
    ),
    {
      title: "HomePage",
      children: [
        Header,
        TradeNow,
        HeroSection,
        RoadmapSection,
        FeatureSection,
        FaqSection,
        Footer,
        Config,
      ],
    }
  ),
];
