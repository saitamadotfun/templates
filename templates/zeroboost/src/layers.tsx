import clsx from "clsx";
import { layer } from "saitamadotfun/bunshi";

import { Config } from "./components/Config";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
// import { Config } from "./components/Config";
import HeroSection from "./components/home/HeroSection";
import FeatureSection from "./components/home/FeatureSection";
import FaqSection from "./components/home/FaqSection";

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
      children: [Header, HeroSection, FeatureSection, FaqSection, Footer, Config],
    }
  ),
];
