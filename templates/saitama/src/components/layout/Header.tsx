import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { block } from "saitamadotfun/bunshi";

export default block(
  function Header({ icon, navigations, socials }) {
    return (
      <header className="flex items-center bg-white text-black border border-b-8 border-black border-b-amber-500 p-2">
        <Image
          src={icon.uri}
          alt={icon.metadata?.alt}
          width={64}
          height={64}
        />
        <div className="flex-1 flex items-center justify-center space-x-4">
          {navigations.map((navigation, index) => (
            <Link
              href={navigation.href}
              key={index}
              className="p-2 font-bold-marker"
            >
              {navigation.name}
            </Link>
          ))}
        </div>
        <div className="flex ">
          {socials.map((social, index) => (
            <div
              key={index}
              className={clsx(social.icon, "border border-b-8 p-2 rounded-md")}
            />
          ))}
        </div>
      </header>
    );
  },
  {
    argsType: {
      icon: {
        control: "asset",
      },
      navigations: {
        control: "list",
        items: [
          {
            control: "map",
            keys: {
              name: { control: "input" },
              href: { control: "input" },
            },
          },
        ],
      },
      socials: {
        control: "list",
        items: [
          {
            control: "map",
            keys: {
              icon: {
                control: "select",
                variants: [{ value: "i-fa-brands:twitter", title: "Twitter" }],
              },
              href: { control: "input" },
            },
          },
        ],
      },
    },
    args: {
      icon: {
        uri: "/logo.png",
        metadata: {
          alt: "",
        },
      },
      navigations: [
        {
          name: "About",
          href: "#about",
        },
        {
          name: "How to buy",
          href: "#how-to-buy",
        },
      ],
      socials: [
        {
          icon: "i-fa-brands:twitter",
          href: "",
        },

        {
          icon: "i-fa-brands:telegram",
          href: "",
        },
      ],
    },
  }
);
