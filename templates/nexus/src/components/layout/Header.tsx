"use client";

import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { useClickAway } from "react-use";
import { useRef, useState } from "react";
import { block } from "saitamadotfun/bunshi";
import { usePathname } from "next/navigation";
import { MdArrowOutward, MdMenu } from "react-icons/md";

import IcLogo from "../IcLogo";

const Block = block(
  function Header({ icon, navigations, action }) {
    const pathname = usePathname();

    const [show, setShow] = useState(false);
    const navigationElement = useRef<HTMLDivElement>(null);

    useClickAway(navigationElement, () => setShow(false));

    return (
      <div className="relative flex items-center px-4 py-2">
        <div>
          {icon && icon.uri ? (
            <Image
              src={icon.uri}
              width={48}
              height={48}
              alt={icon.metadata?.alt}
            />
          ) : (
            <IcLogo
              width={48}
              heigth={48}
              className="phone:size-10"
            />
          )}
        </div>
        <div
          ref={navigationElement}
          className={clsx(
            "flex-1 flex tablet:items-center tablet:justify-center",
            show
              ? "phone:min-w-40 phone:absolute phone:-bottom-42 phone:right-0 phone:flex-col phone:bg-black phone:py-4"
              : "phone:hidden"
          )}
        >
          {navigations.map((navigation, index) => {
            const isActive = pathname === navigation.href;

            return (
              <Link
                key={index}
                href={navigation.href}
                className={clsx(
                  "py-2 phone:px-4",
                  isActive
                    ? "text-white tablet:border-b-2 tablet:border-white tablet:px-2"
                    : "text-white/75 hover:text-white/90 tablet:px-4"
                )}
              >
                {navigation.name}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center space-x-4 phone:flex-1 phone:justify-end">
          <Link
            href={action.href}
            target="_blank"
            className="btn btn-primary space-x-2 rounded-md"
          >
            <span>{action.name}</span>
            <MdArrowOutward />
          </Link>
          <button
            className="py-2 tablet:hidden"
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
      icon: { control: "asset" },
      navigations: {
        control: "list",
        items: [
          {
            control: "map",
            title: (props: { name: string }) => props.name,
            keys: {
              name: { control: "input" },
              href: { control: "input", description: "Navigation link" },
            },
          },
        ],
      },
      action: {
        control: "map",
        keys: {
          name: { control: "input" },
          href: { control: "input" },
        },
      },
    },
    args: {
      icon: { uri: "", metadata: { alt: "" } },
      action: {
        name: "Join community",
        href: "https://t.me/nexusportal01",
      },
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
