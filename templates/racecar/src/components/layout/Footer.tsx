import Link from "next/link";
import { block } from "saitamadotfun/bunshi";

export default block(
  function Footer({
    logo,
    socials,
    disclaimer,
    legal,
    contract,
    ctaText,
    copyText,
  }) {
    return (
      <footer className="flex flex-col mt-10 items-center space-y-4 bg-yellow-300 p-4 tablet:p-8 tablet:space-y-8 tablet:max-w-7xl">
        <div className="flex justify-between w-full max-w-5xl">
          <div className="flex items-center bg-white rounded-full border  p-3 shadow-md space-x-4">
            <img
              src={logo.uri}
              alt={logo.metadata?.alt}
              className="h-6"
            />
            <div className="flex space-x-2">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="p-2 hover:-translate-y-1 transition"
                >
                  <div className={social.icon} />
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center bg-white rounded-full p-3 shadow-md space-x-4">
            <div className="flex space-x-2">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="p-2 hover:-translate-y-1 transition"
                >
                  <div className={social.icon} />
                </a>
              ))}
            </div>
            <button className="bg-yellow-400 border border-black text-black rounded-full px-6 py-2 font-bold shadow-md">
              {ctaText}
            </button>
            <span className="text-black text-sm font-semibold">
              CR: {contract.address}
            </span>
            <button className="bg-yellow-400 text-black border border-black rounded-full px-6 py-2 font-bold shadow-md">
              {copyText}
            </button>
          </div>
        </div>

        <div className="text-center text-sm italic text-gray-700">{legal}</div>

        <p className="text-center text-xs max-w-3xl text-gray-700">
          {disclaimer}
        </p>
      </footer>
    );
  },
  {
    title: "Footer",
    argsType: {
      logo: { control: "asset" },

      disclaimer: { control: "input", inputType: "textarea" },
      // socials: {
      //   control: "list",
      //   items: [
      //     {
      //       control: "map",
      //       keys: {
      //         icon: { control: "input" },
      //         link: { control: "input" },
      //       },
      //     },
      //   ],
      // },

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
      legal: { control: "input" },
      ctaText: { control: "input" },
      copyText: { control: "input" },
      contract: {
        control: "map",
        keys: {
          address: { control: "input" },
        },
      },
    },
    args: {
      logo: {
        uri: "/ic_logo.png",
        metadata: {
          alt: "logo",
        },
      },
      // socials: [
      //   { icon: "i-fa-brands:telegram", link: "#" },
      //   { icon: "i-fa-brands:twitter", link: "#" },
      //   { icon: "i-fa-brands:reddit", link: "#" },
      // ],

      socials: [
        { icon: "i-fa-brands:discord", name: "Discord", link: "" },
        { icon: "i-fa-brands:telegram", name: "Telegram", link: "" },
        { icon: "i-fa-brands:twitter", name: "Twitter", link: "" },
      ],
      ctaText: "Buy Now",
      copyText: "Copy",
      contract: { address: "0xch345..." },
      legal: "© 2024 Zeroboost Digital Ltd. All rights reserved.",
      disclaimer:
        "Trading digital currency entails significant risk and is not appropriate for all users. Digital currency values are not staticand fluctuate due to market changes. Zeroboost does not provide financial advice or accept liability for any loss or damages. For more information, please see the",
    },
  }
);
