import clsx from "clsx";
import { layer } from "saitamadotfun/bunshi";
import Header from "./components/layout/Header";
import Herosection from "./components/layout/Herosection";
import PurchaseWidget from "./components/layout/PurchaseWidget";
import Herodisplay from "./components/layout/Herodisplay";

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
      children: [Header, Herosection, PurchaseWidget, Herodisplay],
    }
  ),
];
