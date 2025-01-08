"use client";
import clsx from "clsx";
import { block } from "saitamadotfun/bunshi";
import { MdAddCircle } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import InView from "../InView";

export default block(
  function FaqSection({ faqs }) {
    const { ref, inView } = useInView();

    return (
      <section
        ref={ref}
        className="flex flex-col space-y-16 px-4 tablet:px-8 tablet:self-center tablet:w-2xl "
      >
        <h1
          className={clsx(
            "text-4xl font-bold text-center text-gradient-primary bg-gradient-to-b tablet:text-6xl",
            { "animate-slide-in-down": inView }
          )}
        >
          Frequently asked Questions
        </h1>
        <div className="flex flex-col space-y-4">
          {faqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <InView
                  className={clsx(
                    "transition flex flex-col bg-black/5 border-l-4 dark:bg-dark-900",
                    open ? "border-primary" : "bg-black/10 dark:border-dark"
                  )}
                  animateInClassName="animate-fade-in"
                >
                  <DisclosureButton className="flex items-center space-x-4 text-start p-4 tablet:p-8">
                    <span className="flex-1 text-xl font-medium tablet:text-2xl">
                      {faq.title}
                    </span>
                    <MdAddCircle
                      className={clsx("text-3xl text-black dark:text-slate", {
                        "transition-all rotate-45": open,
                      })}
                    />
                  </DisclosureButton>
                  <DisclosurePanel
                    transition
                    className="origin-top transition ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 text-black/50 p-4 tablet:px-8 dark:text-white/75"
                  >
                    {faq.description}
                  </DisclosurePanel>
                </InView>
              )}
            </Disclosure>
          ))}
        </div>
      </section>
    );
  },
  {
    title: "FaqSection",
    argsType: {
      faqs: {
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
      faqs: [
        {
          title: "What is Zeroboost?",
          description:
            "Zeroboost is an innovative trading platform that allows users to speculate on the rise and fall of major cryptocurrencies and meme tokens. The platform offers advanced features like trading futures without selling your assets, staking in strategy vaults, and beginning trading with no minimums and low fees.",
        },
        {
          title: "What are Strategy Vaults, and how do they work?",
          description:
            "Strategy Vaults are passive investment tools that offer optimized returns in various market conditions,",
        },
        {
          title: "What kinds of assets can I trade on Zeroboost?",
          description:
            "Zeroboost focuses on major cryptocurrencies and meme tokens, giving you a wide range of options to speculate on.",
        },
        {
          title: "How can I start trading?",
          description:
            "With simple onboarding, low entry barriers, and features like strategy vaults, Zeroboost is designed to be user-friendly for beginners while offering advanced tools for seasoned traders.",
        },
        {
          title: "What's the minimum amount needed to start trading?",
          description:
            "Zeroboost has no trade minimums, making it accessible for all users, regardless of their starting capital. Additionally, the platform offers low fees, ensuring that trading remains cost-effective for beginners and experienced traders alike.",
        },
        {
          title: "How secure is Zeroboost?",
          description:
            "Zeroboost prioritizes the safety of your assets and employs state-of-the-art security measures, including robust encryption and secure smart contract protocols.",
        },
      ],
    },
  }
);
