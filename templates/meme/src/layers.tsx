import clsx from "clsx";
import { layer } from "saitamadotfun/bunshi";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Config } from "./components/Config";
import { HeroSection } from "./components/HeroSection";
import { HelpSection } from "./components/HelpSection";
import { AboutSection } from "./components/AboutSection";

export const layers = [
  layer(
    ({ children, className }) => (
      <div
        className={clsx(
          "flex flex-col space-y-8 bg-black text-white",
          className
        )}
      >
        {children}
      </div>
    ),
    {
      title: "HomePage",
      children: [Header, HeroSection, HelpSection, AboutSection, Footer, Config],
      theme: {
        primary: {
          color: "red",
        },
      },
    }
  ),
];
