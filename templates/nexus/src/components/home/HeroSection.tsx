"use client";
import clsx from "clsx";
import Link from "next/link";
import { block } from "saitamadotfun/bunshi";
import { useGlobalState } from "@/providers/GlobalStateProvider";

import Header from "../layout/Header";

export default block(
  function HeroSection({ header, title, description, socials }) {
    const { setShowContactDialog } = useGlobalState();

    return (
      <div className="relative h-xl flex flex-col justify-center space-y-8  to-black">
        <Header
          {...header}
          className="sticky top-0"
        />
        <div className="self-center size-sm absolute bg-gradient-to-b from-primary-alpha-10 via-primary-alpha-50 blur-3xl rounded-full z-0" />
        <div className="max-w-2xl m-auto flex-1 flex flex-col items-center justify-center space-y-8 z-20 phone:px-8">
          <div className="flex flex-col space-y-2 md:text-center">
            <h1
              className="text-gradient-primary text-6xl font-bold phone:text-4xl phone:font-extrabold tablet:font-helvetica"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p className="text-base text-white/75 tablet:text-lg">
              {description}
            </p>
          </div>
          <div className="flex items-center space-x-4 lt-md:self-start tablet:justify-center">
            <button
              className="btn bg-gradient-to-r from-primary-alpha-50 to-primary-alpha-25 px-4 py-3 rounded-md"
              onClick={() => setShowContactDialog(true)}
            >
              Schedule a free call today
            </button>
            {socials.map((social, index) => (
              <Link
                key={index}
                href={social.link}
                target="_blank"
                className="size-10 flex items-center justify-center border border-primary-alpha-50 text-white/50 rounded-md cursor-pointer hover:border-primary hover:text-white hover:border-primary"
              >
                <div className={clsx("text-xl", social.icon)} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  },
  {
    title: "HeroSection",
    argsType: {
      header: {
        control: "map",
        keys: Header.argsType,
      },
      title: { control: "input" },
      description: { control: "input", inputType: "textarea" },
      socials: {
        control: "list",
        items: [
          {
            control: "map",
            title: (props: { icon: string; name: string }) => (
              <div className="flex items-center space-x-2">
                <div className={props.icon} />
                <span>{props.name}</span>
              </div>
            ),
            keys: {
              icon: {
                control: "select",
                variants: [
                  { title: "Twitter", value: "i-fa-brands:twitter" },
                  { title: "Instagram", value: "i-fa-brands:instagram" },
                  { title: "TikTok", value: "i-fa-brands:tiktok" },
                  {
                    title: "Facebook",
                    value: "i-fa-brands:facebook",
                  },
                  {
                    title: "Telegram",
                    value: "i-fa-brands:telegram",
                  },
                  { title: "Reddit", value: "i-fa-brands:reddit" },
                  { title: "Tumblr", value: "i-fa-brands:tumblr" },
                ],
              },
              name: {
                control: "input",
              },
              link: { control: "input" },
            },
          },
        ],
      },
    },
    args: {
      header: Header.args,
      title: "Best Solution <br /> for your project",
      description:
        "Join over dozens of teams who trust us for decentralized branding,\
      community engagement, DAO governance, and strategic web3 growth.",
      socials: [
        {
          icon: "i-fa-brands:twitter",
          name: "Twitter",
          link: "https://x.com/nexus_builder",
        },
        {
          icon: "i-fa-brands:telegram-plane",
          name: "Telegram",
          link: "https://t.me/nexusportal01",
        },
      ],
    },
  }
);
