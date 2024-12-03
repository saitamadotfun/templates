import { layer } from "saitamadotfun/bunshi";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { FeatureSection } from "./components/FeatureSection";
import { Config } from "./components/Config";

export const layers = [
  layer(
    ({ children }) => (
      <div className="flex flex-col flex flex-col bg-white p-4 rounded-md">
        {children}
      </div>
    ),
    {
      title: "HomePage",
      children: [Header, HeroSection, FeatureSection, Config],
    }
  ),
];
