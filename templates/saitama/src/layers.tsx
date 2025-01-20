import clsx from "clsx";
import { layer } from "saitamadotfun/bunshi";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import HowToBuy from "./components/layout/HowToBuy";
import HeroDisplay from "./components/layout/HeroDisplay";
import HeroSection from "./components/layout/HeroSection";
import PurchaseWidget from "./components/layout/PurchaseWidget";

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
        Header,
        HeroSection,
        PurchaseWidget,
        HeroDisplay,
        HowToBuy,
        Footer,
      ],
    }
  ),
];
