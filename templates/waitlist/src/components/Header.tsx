"use client";
import Link from "next/link";
import Image from "next/image";
import { block } from "saitamadotfun/bunshi";

export const Header = block(
  function Header({ logo, socials }) {
    return (
      <header className="min-w-sm sticky top-0 z-10 self-center flex items-center bg-white/25 backdrop-blur-xl border p-2 rounded-full md:min-w-2xl">
        <div className="flex-1">
          <Image
            src={logo.uri}
            alt={logo.metadata?.alt}
            width={32}
            height={32}
          />
        </div>
        <div className="flex items-center divide-x border p-2 rounded-full">
          {socials.map((social, index) => (
            <Link
              href={social.link}
              key={index}
              className="px-2 py-1"
            >
              <div className={social.icon} />
            </Link>
          ))}
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
            title: (props: Record<string, string>) => (
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
      logo: {
        uri: "/favicon.ico",
        metadata: {
          alt: "Saitama",
        },
      },
      socials: [
        {
          icon: "i-fa-brands:twitter",
          name: "Twitter",
          link: "",
        },
        {
          icon: "i-fa-brands:instagram",
          name: "Instagram",
          link: "",
        },
        {
          icon: "i-fa-brands:tiktok",
          name: "Tiktok",
          link: "",
        },
      ],
    },
  }
);
