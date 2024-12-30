"use client";
import { block } from "saitamadotfun/bunshi";
import InView from "../InView";
import clsx from "clsx";

export default block(
  function RoadmapSection({ title, subtitle, roadmaps }) {
    return (
      <section className="self-center max-w-2xl flex flex-col space-y-16 p-4 phone:px-8">
        <InView
          className="flex flex-col text-center"
          animateInClassName="animate-slide-in-down"
        >
          <h1 className="text-4xl font-bold text-gradient-primary">{title}</h1>
          <p className="max-w-sm self-center text-base text-black/50 dark:text-white/75 phone:text-xl">
            {subtitle}
          </p>
        </InView>
        <div className="flex flex-col">
          {roadmaps.map((roadmap, index) => (
            <InView
              key={index}
              className="flex space-x-4"
              animateInClassName="animate-fade-in"
            >
              <div className="flex flex-col items-center">
                <div
                  className={clsx(
                    "size-3 rounded-full",
                    index < 1 ? "bg-primary" : "bg-primary-alpha"
                  )}
                />
                {index < roadmaps.length - 1 && (
                  <div
                    className={clsx(
                      "w-0.5 h-28",
                      index < 1 ? "bg-primary" : "bg-primary-alpha"
                    )}
                  />
                )}
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl">{roadmap.title}</h1>
                <p className="text-black/50 dark:text-white/75">{roadmap.description}</p>
              </div>
            </InView>
          ))}
        </div>
      </section>
    );
  },
  {
    title: "RoadmapSection",
    argsType: {
      title: { control: "input" },
      subtitle: { control: "input" },
      roadmaps: {
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
      title: "Roadmap",
      subtitle:
        "This roadmap outlines our goals and where we want to take Zeroboost Protocol.",
      roadmaps: [
        {
          title: "Planning & Pre-Listing",
          description:
            "Laying the foundation with research, partnerships, and platform design while building community interest before the launch.",
        },
        {
          title: "Close & Open Testing",
          description:
            "Refining the platform through rigorous testing phases to ensure stability, usability, and scalability for a seamless user experience.",
        },
        {
          title: "Production and Whitelist Launch",
          description:
            "Launching the platform to the public with exclusive benefits for early adopters, enabling full access to trading and staking features.",
        },
        {
          title: "Future developments",
          description:
            "Continuously evolving the platform with new features, enhanced tools, and expanded asset support to stay ahead in the market and meet user needs.",
        },
      ],
    },
  }
);
