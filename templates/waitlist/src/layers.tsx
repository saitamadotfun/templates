import { layer } from "saitamadotfun/bunshi";
import { Config } from "./components/Config";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { FeatureSection } from "./components/FeatureSection";
import { TestimonialSection } from "./components/TestimonialSection";
import React from "react";

export const layers = [
  layer(
    ({ children }) => {
      const [header, heroSection, testimonialSection, featureSection, config] =
        React.Children.toArray(children);

      return (
        <div className="flex-1 flex flex flex-col bg-white">
          {config}
          {header}
          <div className="flex-1 flex flex-col space-y-16">
            {heroSection}
            {testimonialSection}
            {featureSection}
          </div>
        </div>
      );
    },
    {
      title: "HomePage",
      children: [
        Header,
        HeroSection,
        TestimonialSection,
        FeatureSection,
        Config,
      ],
    }
  ),
];
