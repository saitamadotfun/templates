import Link from "next/link";
import { block } from "saitamadotfun/bunshi";

export default block(
  function Footer({ purchase, legal }) {
    return (
      <footer className="relative">
        <div className="size-sm absolute -left-24 inset-y-0 bg-inverse opacity-50 blur-[128px] rounded-full" />
        <div className="flex flex-col space-y-16 bg-black text-white text-center px-4 py-16">
          <div className="flex flex-col bg-white text-black border border-b-8 border-black border-b-primary rounded-xl phone:mx-4 tablet:mx-auto tablet:w-4xl">
            <div className=" flex items-center bg-white border border-black px-4 py-2 rounded-lg">
              <div className="flex-1 flex">
                <button className="bg-primary text-black px-4 py-2 border border-b-8 border-black rounded">
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
            <p className="text-lg font-bold-marker tracking-widest">
              {legal.title}
            </p>
            <p className="text-xs text-white/75 tablet:text-sm">
              {" "}
              {legal.detail}
            </p>
          </div>
        </div>
      </footer>
    );
  },

  {
    argsType: {
      purchase: {
        control: "map",
        keys: {
          dexes: {
            control: "list",
            items: [
              {
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
        title: "ALL RIGHTS RESERVED, 2025",
        detail:
          "WE WANT THIS PROJECT TO SUCCEED AND BECOME THE TOP MEME COIN ON COINMARKETCAP, AND WE WILL DO EVERYTHING IN OUR POWER TO ACHIEVE THIS. HOWEVER, REMEMBER THE RISKS AND ALWAYS TAKE RESPONSIBILITY FOR THEM. IT IS IMPORTANT TO THINK FOR YOURSELF.",
      },
    },
  }
);
