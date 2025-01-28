import Link from "next/link";
import { block } from "saitamadotfun/bunshi";
import type { Asset } from "saitamadotfun/sdk";

export default block(
  function Footer({ purchase, legal }) {
    return (
      <footer className="relative">
        <div className="size-sm absolute -left-24 inset-y-0 bg-inverse opacity-50 blur-[128px] rounded-full" />
        <div className="flex flex-col space-y-16 bg-black text-white text-center px-4 py-16">
          <div className="flex flex-col bg-white text-black border border-b-8 border-black border-b-primary rounded-xl phone:mx-4 tablet:mx-auto tablet:w-4xl">
            <div className=" flex items-center bg-white border border-black px-4 py-2 rounded-lg">
              <div className="flex-1 flex">
                <button className="btn-primary">
                  Buy now
                </button>
              </div>

              <div className="flex space-x-2">
                {purchase.dexes.map((dex, index) => (
                  <Link
                    key={index}
                    href={dex.href}
                    className="btn !p-1 cursor-pointer"
                  >
                    <img
                      src={dex.icon.uri}
                      alt={dex.icon.metadata?.alt}
                      width={16}
                      height={16}
                      className="size-6 object-contain"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl flex flex-col space-y-2">
            <p className="text-lg font-bold-marker uppercase tracking-widest">
              {legal.title.replace("{date}", new Date().getFullYear().toString())}
            </p>
            <p className="text-xs text-white/75 uppercase tablet:text-sm">
              {legal.detail}
            </p>
          </div>
        </div>
      </footer>
    );
  },
  {
    title: "Footer",
    argsType: {
      purchase: {
        control: "map",
        keys: {
          dexes: {
            control: "list",
            items: [
              {
                title: (props: { icon: Asset }) => (
                  <div className="flex space-x-2 items-center">
                    <img
                      src={props.icon.uri}
                      width={24}
                      height={24}
                    />
                    <span>{props.icon.metadata?.alt}</span>
                  </div>
                ),
                control: "map",
                keys: {
                  icon: { control: "asset" },
                  href: { control: "input" },
                },
              },
            ],
          },
        },
      },
      legal: {
        control: "map",
        keys: {
          title: { control: "input" },
          detail: { control: "input", inputType: "textarea" },
        },
      },
    },

    args: {
      ctaText: "Buy Now",
      purchase: {
        dexes: [
          {
            icon: {
              uri: "/ic_dexscreener.png",
              metadata: {
                alt: "DexScreener",
              },
            },
            href: "",
          },
          {
            icon: {
              uri: "/ic_dextools.png",
              metadata: {
                alt: "DexTools",
              },
            },
            href: "",
          },
          {
            icon: {
              uri: "/ic_coinmarketcap.png",
              metadata: {
                alt: "CoinMarketcap",
              },
            },
            href: "",
          },
          {
            icon: {
              uri: "/ic_coingecko.png",
              metadata: {
                alt: "Coin gecko",
              },
            },
            href: "",
          },
        ],
      },
      legal: {
        title: "All rights reserved, {date}",
        detail:
          "We want this project to succeed and become the top meme coin on coinmarketcap, and we will do everything in our power to achieve this. however, remember the risks and always take responsibility for them. it is important to think for yourself.",
      },
    },
  }
);
