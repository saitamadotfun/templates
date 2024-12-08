"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { block } from "saitamadotfun/bunshi";

import Navigation from "./Navigation";

export default block(
  function Header({ logo, action, navigations }) {
    const [open, setOpen] = useState(false);

    return (
      <header className="relative ">
        <div className="-z-10 absolute inset-x-0 -top-32  w-xs h-xs bg-gradient-to-r from-black via-primary-alpha-50 to-black blur-3xl rounded-r-full tablet:w-sm tablet:h-sm tablet:top-24 tablet:-left-8" />
        <div className="absolute inset-x-0 flex items-center px-4 z-10">
          <div className="flex space-x-2 items-center">
            <Image
              className="w-16 h-16"
              src={logo.uri}
              alt={logo.metadata?.alt}
              width={256}
              height={256}
            />
          </div>
          <Navigation
            open={open}
            setOpen={setOpen}
            {...navigations}
          />
          <div className="flex space-x-8 items-center">
            <Link
              href={action.href}
              target="_blank"
              className="btn border border-primary text-primary rounded-md"
            >
              {action.text}
            </Link>
            <button
              className="p-2 tablet:hidden"
              onClick={() => setOpen(true)}
            >
              <Image
                alt="Menu"
                src="/icons/ic_menu.svg"
                width={32}
                height={32}
              />
            </button>
          </div>
        </div>
      </header>
    );
  },
  {
    title: "Header",
    argsType: {
      logo: { control: "asset" },
      action: {
        control: "map",
        keys: {
          text: { control: "input" },
          href: { control: "input" },
        },
      },
      navigations: {
        control: "map",
        keys: Navigation.argsType,
      },
    },
    args: {
      logo: {
        uri: "/icons/ic_logo.png",
        metadata: {
          alt: "TekFinance",
        },
      },
      action: {
        text: "Launch Bot",
        href: "https://t.me/TekFinanceBot",
      },
      navigations: Navigation.args,
    },
  }
);
