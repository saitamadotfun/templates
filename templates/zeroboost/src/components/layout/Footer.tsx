import Link from "next/link";
import { block } from "saitamadotfun/bunshi";

export default block(
  function Footer({ socials, legal, disclaimer, links }) {
    return (
      <footer className="flex flex-col space-y-4  p-4 tablet:p-8 tablet:space-y-8 tablet:max-w-7xl">
        <div className="flex space-x-4 text-2xl">
          {socials.map((social, index) => (
            <button
              key={index}
              className="p-2 hover:transition-all hover:-translate-y-2"
            >
              <div className={social.icon} />
            </button>
          ))}
        </div>
        <div className="flex flex-col space-y-4">
          <p>{legal}</p>
          <small className="text-black/50 dark:text-white/55">
            {disclaimer}&nbsp;
            <a
              href=""
              className="underline"
            >
              Terms of Use
            </a>
          </small>
          <div className="flex space-x-4">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-black/50 hover:text-black dark:text-white/55 dark:hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    );
  },
  {
    title: "Footer",
    argsType: {
      legal: { control: "input" },
      disclaimer: { control: "input", inputType: "textarea" },
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
      links: {
        control: "list",
        items: [
          {
            control: "map",
            title: (props: { name: string }) => props.name,
            keys: {
              name: { control: "input" },
              href: { control: "input" },
            },
          },
        ],
      },
    },
    args: {
      legal: "© 2024 Zeroboost Digital Ltd. All rights reserved.",
      disclaimer:
        "Trading digital currency entails significant risk and is not\
            appropriate for all users. Digital currency values are not static\
            and fluctuate due to market changes. Zeroboost does not provide financial\
            advice or accept liability for any loss or damages. For more information, please see the",
      socials: [
        { icon: "i-fa-brands:discord", name: "Discord", link: "https://discord.gg/V6GmYzWN" },
        { icon: "i-fa-brands:telegram", name: "Telegram", link: "https://t.me/zeroboost" },
        { icon: "i-fa-brands:twitter", name: "Twitter", link: "https://x.com/zer0boost" },
      ],
      links: [
        { name: "Terms", href: "" },
        { name: "Privacy", href: "" },
      ],
    },
  }
);
