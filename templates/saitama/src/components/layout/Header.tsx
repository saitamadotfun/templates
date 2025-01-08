import Image from "next/image";
import Link from "next/link";
import { block } from "saitamadotfun/bunshi";

export default block(
  function Header({ icon, navigations, socials }) {
    return (
      <header className="flex items-center p-2">
        <Image
          src={icon.uri}
          alt={icon.metadata?.alt}
          width={32}
          height={32}
        />
        <div className="flex-1">
          {navigations.map((navigation, index) => (
            <Link
              href={navigation.href}
              key={index}
            >
              {navigation.name}
            </Link>
          ))}
        </div>
        <div className="flex ">
          {socials.map((social, index) => (
            <button
              key={index}
              className=""
            >
              {social.href}
            </button>
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
        uri: "",
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
      ],
    },
  }
);
