import Image from "next/image";
import Link from "next/link";
import { block } from "saitamadotfun/bunshi";

export default block(
  function Header({ logo, action, socials }) {
    return (
      <header className="flex items-center p-4">
        <div className="flex-1">
          <Image
            alt={logo.metadata?.alt}
            src={logo.uri}
            width={56}
            height={56}
          />
        </div>
        <div className="flex space-x-4">
          <Link
            target="_blank"
            className="btn"
            href={action.href}
          >
            {action.text}
          </Link>
          <div className="flex space-x-2">
            {socials.map((social, index) => (
              <Link
                href={social.href}
                target="_blank"
                key={index}
                className="bg-primary-dark-50 p-3 rounded-full text-xl"
              >
                <div className={social.icon} />
              </Link>
            ))}
          </div>
        </div>
      </header>
    );
  },
  {
    title: "Header",
    argsType: {
      logo: {
        control: "asset",
      },
      socials: {
        control: "list",
        items: [
          {
            control: "map",
            title: ({icon}: {icon: string}) => <div className={icon} />,
            keys: {
              icon: {
                control: "select",
                variants: [
                  { title: "Telegram", value: "i-fa-brands:facebook" },
                  { title: "Instagram", value: "i-fa-brands:instagram" },
                  { title: "Tiktok", value: "i-fa-brands:tiktok" },
                  { title: "Telegram", value: "i-fa-brands:telegram" },
                  { title: "Twitter", value: "i-fa-brands:twitter" },
                  { title: "Discord", value: "i-fa-brands:discord" },
                ],
              },
              href: {
                control: "input",
              },
            },
          },
        ],
      },
      action: {
        control: "map",
        keys: {
          text: { control: "input" },
          href: { control: "input" },
        },
      },
    },
    args: {
      logo: {
        uri: "/bonk.png",
        metadata: {
          alt: "Bonk",
        },
      },
      socials: [
        {
          icon: "i-fa-brands:telegram",
          href: "",
        },
        {
          icon: "i-fa-brands:twitter",
          href: "",
        },
      ],
      action: {
        text: "Buy Token",
        href: "",
      },
    },
  }
);
