import clsx from "clsx";
import React from "react";
import { layer } from "saitamadotfun/bunshi";

import Header from "./components/Header";
import Config from "./components/Config";
import Background from "./components/Background";
import HeroSection from "./components/HeroSection";
import Tokenomic from "./components/TokenomicSection";

export const layers = [
  layer(
    ({ children, className }) => {
      const elements = React.Children.toArray(children);
      const background = elements.at(0);
      const header = elements.at(1);
      const tokenomic = elements.at(-1);
      const rest = elements.slice(2, elements.length - 1);

      return (
        <main
          className={clsx(
            className,
            "flex flex-col tablet:size-screen phone:w-xl phone:h-8xl"
          )}
        >
          <>
            <div className="flex-1 flex flex-col">
              {header}
              <div className="flex-1 flex flex-col">{rest}</div>
              {tokenomic}
            </div>
            {background}
          </>
        </main>
      );
    },
    {
      title: "HomePage",
      children: [Background, Header, HeroSection, Tokenomic, Config],
    }
  ),
];
