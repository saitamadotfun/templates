import clsx from "clsx";
import Link from "next/link";
import { block } from "saitamadotfun/bunshi";

import Header from "../layout/Header";

export default block(
  function HeroSection({ header, title, description, socials }) {
    return (
      <div className="relative h-xl flex flex-col justify-center space-y-8  to-black">
        <Header
          {...header}
          className="sticky top-0"
        />
        <div className="self-center size-sm absolute bg-gradient-to-b from-primary-alpha-10 via-primary-alpha-50 blur-3xl rounded-full" />
        <div className="max-w-2xl m-auto flex-1 flex flex-col items-center justify-center space-y-8 lt-md:px-8">
          <div className="flex flex-col space-y-2 text-center">
            <h1
              className="text-6xl font-helvetica font-bold"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p className="text-white/75">{description}</p>
          </div>
          <div className="flex items-center justify-center space-x-4">
            {socials.map((social, index) => (
              <Link
                key={index}
                href={social.href}
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
            keys: {
              icon: {
                control: "select",
                variants: [
                  { title: "Twitter", value: "i-fa-brands:twitter" },
                  { title: "Discorc", value: "i-fa-brands:discord" },
                  { title: "Telegram", value: "i-fa-brands:telegram-plane" },
                  { title: "Reddit", value: "i-fa-brands:reddit-alien" },
                ],
              },
              href: { control: "input", description: "Social link" },
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
          href: "",
        },
        {
          icon: "i-fa-brands:telegram-plane",
          href: "",
        },
      ],
    },
  }
);
