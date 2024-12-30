"use client";

import clsx from "clsx";
import { block } from "saitamadotfun/bunshi";
import { MdArrowOutward } from "react-icons/md";
import { useInView } from "react-intersection-observer";

export default block(
  function HeroSection({ tagLine, sections, style }) {
    const { ref, inView } = useInView();

    return (
      <section
        ref={ref}
        style={style}
        className="flex flex-col space-y-32"
      >
        <div
          className={clsx("h-xs flex flex-col tablet:h-4xl", {
            "animate-slide-in-up": inView,
          })}
        >
          <h1 className="max-w-xs m-auto text-5xl font-extrabold text-center tracking-tight text-gradient-primary tablet:max-w-2xl tablet:text-8xl">
            {tagLine}
          </h1>
        </div>
        <div
          className={clsx(
            "self-center grid grid-cols-1 grid-rows-2 px-4 tablet:grid-cols-2 tablet:grid-rows-1 tablet:gap-x-8",
            { "animate-fade-in md:animate-slide-in-up": inView }
          )}
        >
          {sections.map((section, index) => (
            <div
              key={index}
              className={clsx(
                "flex flex-col text-xl font-inter font-medium tracking-wide border-b border-b-dark px-4 py-8 cursor-pointer tablet:tracking-wider tablet:min-w-md tablet:text-2xl tablet:px-8 desktop:max-w-lg",
                index % 2 === 0
                  ? "hover:border-b-purple-500 hover:bg-gradient-to-t hover:from-purple-500/20 hover:to-black/0"
                  : "hover:border-b-primary  hover:bg-gradient-to-t hover:from-primary-alpha hover:to-black/0"
              )}
            >
              <p>{section.title}</p>
              <div className="flex-1 flex flex-col space-y-8 text-black/50 dark:text-white/75">
                <p className="flex-1">{section.description}</p>
                <MdArrowOutward className="text-2xl" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  },
  {
    title: "HeroSection",
    argsType: {
      tagLine: { control: "input" },
      sections: {
        control: "list",
        items: [
          {
            control: "map",
            title: (props: { title: string }) => props.title,
            keys: {
              title: { control: "input" },
              description: { control: "input", inputType: "textarea" },
            },
          },
        ],
      },
    },
    args: {
      tagLine: "Speculate on Rising & Falling of Majors and Memes",
      sections: [
        {
          title: "Explore ZeroBoost",
          description:
            "Stake in different strategies to outperform market situations.",
        },
        {
          title: "Deposit Memecoins",
          description:
            "The widest range of trading collateral and the highest LTVs.",
        },
      ],
    },
  }
);
