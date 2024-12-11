import clsx from "clsx";
import React from "react";
import { layer } from "saitamadotfun/bunshi";

import Faq from "./components/Faq";
import Config from "./components/Config";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Tokenomic from "./components/Tokenomic";

export const layers = [
  layer(
    ({ children, className }) => {
      const elements = React.Children.toArray(children);
      const header = elements.at(0);
      const footer = elements.at(-1);
      const rest = elements.slice(1, elements.length - 1);

      return (
        <main
          className={clsx(
            className,
            require("@/assets/fonts").chinese.className,
            "flex-1 flex flex-col bg-gradient-to-b from-primary via-primary bg-no-repeat overflow-y-scroll"
          )}
        >
          {header}
          <div className="flex-1 flex flex-col space-y-16">
            <div className="flex-1 flex flex-col space-y-16">{rest}</div>
            {footer}
          </div>
        </main>
      );
    },
    {
      title: "HomePage",
      children: [Header, HeroSection, Tokenomic, Faq, Footer, Config],
    }
  ),
];
