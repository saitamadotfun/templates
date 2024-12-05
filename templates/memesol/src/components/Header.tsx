"use client";

import { block } from "saitamadotfun/bunshi";

export const Header = block(
  function Header({ logo, socials }) {
    return (
      <header className="sticky top-0 z-100">
        <div className=" absolute inset-0 bg-gradient-to-r from-black to-black/0 blur-3xl" />
        <div className="flex items-center px-2 md:px-8 py-2">
          <div className="flex-1">
            <p className="text-xl font-black bg-gradient-to-r from-primary via-primary-alpha/50 to-primary-alpha/25 text-transparent bg-clip-text">
              {logo}
            </p>
          </div>
          <div className="flex items-center text-white space-x-4 text-xl">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
              >
                <div className={social.icon} />
              </a>
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
        control: "input",
        type: "text",
      },
      socials: {
        control: "list",
        items: [
          {
            title: (props: { icon: string; name: string }) => (
              <div className="flex items-center space-x-2">
                <div className={props.icon} />
                <span>{props.name}</span>
              </div>
            ),
            control: "map",
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
              link: {
                control: "input",
              },
            },
          },
        ],
      },
    },
    args: {
      logo: "MemeSol",
      socials: [
        {
          icon: "i-fa-brands:twitter",
          name: "Twitter",
          link: "https://x.com/theMemeSol",
        },
        {
          icon: "i-fa-brands:telegram",
          name: "Telegram",
          link: "https://t.me/MemeSolTalk",
        },
      ],
    },
  }
);
