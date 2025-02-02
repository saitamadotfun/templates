import clsx from "clsx";
import { layer } from "saitamadotfun/bunshi";

import Config from "./components/Config";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/home/HeroSection";
import ServiceSection from "./components/home/ServiceSection";
import TestimonialSection from "./components/home/TestimonialSection";

export const layers = [
  layer(
    ({ children, className }) => (
      <div
        className={clsx(
          "flex flex-col space-y-8 font-normal bg-black text-white text-sm md:text-base md:space-y-24",
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
        ServiceSection,
        TestimonialSection,
        Footer,
        Config,
      ],
    }
  ),
];
