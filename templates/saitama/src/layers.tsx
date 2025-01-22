import clsx from "clsx";
import { layer } from "saitamadotfun/bunshi";

import Config from "./components/Config";
import Footer from "./components/layout/Footer";
import HowToBuy from "./components/home/HowToBuy";
import HeroDisplay from "./components/home/HeroDisplay";
import HeroSection from "./components/home/HeroSection";

export const layers = [
  layer(
    ({ children, className }) => (
      <div
        className={clsx(
          "flex flex-col space-y-8 font-inter-tight font-normal bg-black text-white text-sm md:text-base md:space-y-24",
          className
        )}
      >
        {children}
      </div>
    ),
    {
      title: "HomePage",
      children: [
        HeroSection,
        HeroDisplay,
        HowToBuy,
        Footer,
        Config,
      ],
    }
  ),
];
