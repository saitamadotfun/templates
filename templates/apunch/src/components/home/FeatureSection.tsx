"use client";

import clsx from "clsx";
import { useInView } from "react-intersection-observer";
import { block } from "saitamadotfun/bunshi";
import InView from "../InView";

export default block(
  function FeatureSection({ features }) {
    const { ref, inView } = useInView();

    return (
      <section
        ref={ref}
        className="self-center flex px-4 py-8 phone:flex-col phone:space-y-8 tablet:px-8 tablet:space-x-16"
      >
        <div
          className={clsx("max-w-xl", {
            "animate-slide-in-down tablet:animate-slide-in-left": inView,
          })}
        >
          <h1 className="text-4xl font-inter font-bold text-gradient-primary bg-gradient-to-b tablet:text-8xl">
            Dive into the ultimate memecoin exchange
          </h1>
        </div>
        <div className="flex-1 flex flex-col space-y-4">
          {features.map((feature, index) => (
            <InView
              key={index}
              className="flex-1 text-xl font-medium border-l border-dark p-8"
              animateInClassName="animate-fade-in"
            >
              <h1 className="text-2xl">{feature.title}</h1>
              <p className="text-black/50 dark:text-white/75">
                {feature.description}
              </p>
            </InView>
          ))}
        </div>
      </section>
    );
  },
  {
    title: "FeatureSection",
    argsType: {
      features: {
        control: "list",
        items: [
          {
            control: "map",
            title: (props: { title: string }) => props.title,
            keys: {
              title: { control: "input" },
              description: { control: "input" },
            },
          },
        ],
      },
    },
    args: {
      features: [
        {
          title: "Trade Futures Without Selling",
          description:
            "Keep ownership of your memes and use them to trade futures.",
        },
        {
          title: "Stake in Strategy Vaults",
          description:
            "A range of passive strategy vaults outperform in upward, downward and ranging markets.",
        },
        {
          title: "Begin trading now",
          description: "with no trade minimums and low fees.",
        },
      ],
    },
  }
);
