"use client";

import clsx from "clsx";
import Link from "next/link";
import { block } from "saitamadotfun/bunshi";

export const Footer = block(
  function Footer({ name, action }) {
    return (
      <footer className="flex  bg-white/10 p-4 rounded-t-2xl phone:space-y-4 tablet:items-center tablet:p-8">
        <div className="flex-1 flex flex-col">
          <h1 className="text-lg font-black">Join {name}</h1>
          <p className="text-sm text-white/75">{name} © 2024</p>
        </div>
        <div className="flex flex-col">
          <Link
            href={action.link}
            target="_blank"
            className="self-start flex items-center bg-white/10 p-2 rounded-full tablet:space-x-4 tablet:px-4 tablet:py-3"
          >
            <span className="lt-md:hidden">{action.title}</span>
            <div className={clsx("text-xl", action.icon)} />
          </Link>
        </div>
      </footer>
    );
  },
  {
    title: "Footer",
    argsType: {
      name: { control: "input" },
      action: {
        control: "map",
        keys: {
          title: { control: "input" },
          icon: {
            control: "select",
            variants: [{ title: "Telegram", value: "i-fa-brands:telegram" }],
          },
          link: { control: "input" },
        },
      },
    },
    args: {
      name: "MemeSol",
      action: {
        title: "Join our telegram",
        icon: "i-fa-brands:telegram",
        link: "https://t.me/MemeSolTalk",
      },
    },
  }
);
