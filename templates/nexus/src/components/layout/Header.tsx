"use client";

import clsx from "clsx";
import Link from "next/link";
import { useClickAway } from "react-use";
import { useRef, useState } from "react";
import { block } from "saitamadotfun/bunshi";
import { usePathname } from "next/navigation";
import { MdArrowOutward, MdMenu } from "react-icons/md";

import IcLogo from "../IcLogo";

const Block = block(
  function Header({ navigations }) {
    const pathname = usePathname();

    const [show, setShow] = useState(false);
    const navigationElement = useRef<HTMLDivElement>(null);

    useClickAway(navigationElement, () => setShow(false));

    return (
      <div className="relative flex items-center px-4 py-2">
        <div>
          <IcLogo
            width={48}
            heigth={48}
            className="lt-md:size-10"
          />
        </div>
        <div
          ref={navigationElement}
          className={clsx(
            "flex-1 flex  md:items-center md:justify-center",
            show
              ? "lt-md:min-w-40 lt-md:absolute lt-md:-bottom-42 lt-md:right-0 lt-md:flex-col lt-md:bg-black lt-md:py-4"
              : "lt-md:hidden"
          )}
        >
          {navigations.map((navigation, index) => {
            const isActive = pathname === navigation.href;

            return (
              <Link
                key={index}
                href={navigation.href}
                className={clsx(
                  "py-2 lt-md:px-4",
                  isActive
                    ? "text-white md:border-b-2 md:border-white md:px-2"
                    : "text-white/75 hover:text-white/90 md:px-4"
                )}
              >
                {navigation.name}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center space-x-4 lt-md:flex-1 lt-md:justify-end">
          <Link
            href=""
            target="_blank"
            className="btn btn-primary space-x-2 rounded-md"
          >
            <span>Join Community</span>
            <MdArrowOutward />
          </Link>
          <button
            className="py-2 md:hidden"
            onClick={() => setShow(!show)}
          >
            <MdMenu className="text-xl" />
          </button>
        </div>
      </div>
    );
  },
  {
    argsType: {
      navigations: {
        control: "list",
        items: [
          {
            control: "map",
            keys: {
              name: { control: "input" },
              href: { control: "input", description: "Navigation link" },
            },
          },
        ],
      },
    },
    args: {
      navigations: [
        {
          name: "Home",
          href: "/",
        },
        {
          name: "About us",
          href: "#about-us",
        },
        {
          name: "Projects",
          href: "#projects",
        },
        {
          name: "Contacts",
          href: "#contacts",
        },
      ],
    },
  }
);

type HeaderProps = {
  className?: string;
} & React.ComponentProps<typeof Block>;

const Header = function ({ className, ...props }: HeaderProps) {
  return (
    <header className={clsx(className, "relative")}>
      <div className="absolute inset-0 bg-gradient-to-r from-black to-black/10 p-2 backdrop-blur-3xl" />
      <Block {...props} />
    </header>
  );
};

Object.assign(Header, { args: Block.args, argsType: Block.argsType });

export default Header as typeof Header & typeof Block;
