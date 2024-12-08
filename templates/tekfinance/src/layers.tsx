import clsx from "clsx";
import { layer } from "saitamadotfun/bunshi";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Config from "./components/Config";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import AboutSection from "./components/AboutSection";
import React from "react";

export const layers = [
  layer(
    ({ children, className }) => {
      const elements = React.Children.toArray(children);
      const header = elements.at(0);
      const footer = elements.at(-1);
      const rest = elements.slice(1, elements.length - 1);
      return (
        <div
          className={clsx(
            (className =
              "flex flex-col bg-black text-white text-[14px] overflow-x-hidden overflow-y-scroll"),
            className
          )}
        >
          <div className="flex-1 flex flex-col bg-gradient-to-r from-primary-alpha overflow-x-hidden overflow-y-scroll">
            <div>{header}</div>
            <div>
              <div className="flex flex-col space-y-16">{rest}</div>
              {footer}
            </div>
          </div>
        </div>
      );
    },
    {
      title: "HomePage",
      children: [
        Header,
        HeroSection,
        AboutSection,
        FeatureSection,
        Footer,
        Config,
      ],
    }
  ),
];
