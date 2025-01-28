import Link from "next/link";
import { block } from "saitamadotfun/bunshi";
import type { Asset } from "saitamadotfun/sdk";

import Header from "../layout/Header";

export default block(
  function HeroSection({
    backgroundImage,
    tagText,
    character,
    purchase,
    header,
  }) {
    return (
      <div className="flex flex-col">
        <div
          className="relative flex flex-col h-xl z-10 tablet:h-3xl"
          style={{
            background: `url(${backgroundImage.uri}) no-repeat center/cover`,
          }}
        >
          <Header {...header} />
          <div className="relative flex-1 flex items-center justify-center">
            <img
              src={character.uri}
              alt={character.metadata?.alt}
              width={712}
              height={712}
              className="absolute bottom-0 z-10"
            />
            <h1 className="absolute bottom-32 font-bold-marker  !text-[25vw] font-black uppercase font-bold-marker text-shadow-[0_10px_var(--primary-default)] text-shadow-color-primary -z-10 tablet:bottom-48 custom-text">
              {tagText}
            </h1>
          </div>
        </div>
        <div className="mx-auto flex bg-white text-black p-2 border border-b-8 border-black border-b-primary rounded-md z-10 phone:flex-col phone:space-y-2 phone:mx-4 tablet:w-4xl tablet:inset-x-25">
          <div className="flex-1 flex items-center space-x-2">
            <p className="phone:flex-1 phone:text-base">Buy Now</p>
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

          <div className="flex items-center bg-primary px-2 py-1 border border-black rounded-md">
            <span className="flex-1 text-xs font-mono truncate">
              {purchase.ca}
            </span>
            <button className=" bg-white text-black text-sm font-medium px-4 py-1 rounded border border-black">
              Copy
            </button>
          </div>
        </div>
      </div>
    );
  },
  {
    title: "HeroSection",
    argsType: {
      header: {
        control: "map",
        keys: Header.argsType,
      },
      backgroundImage: { control: "asset" },
      tagText: { control: "input" },
      character: { control: "asset" },
      purchase: {
        control: "map",
        keys: {
          ca: { control: "input" },
          dexes: {
            control: "list",
            items: [
              {
                control: "map",
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
                keys: {
                  icon: { control: "asset" },
                  href: { control: "input" },
                },
              },
            ],
          },
        },
      },
    },
    args: {
      header: Header.args,
      backgroundImage: {
        uri: "/hero_section_bg.png",
        metadata: {
          alt: "Background",
        },
      },
      tagText: "Saitama",
      character: {
        uri: "/il_saitama.png",
        metadata: {
          alt: "Saitama",
        },
      },
      purchase: {
        ca: "CA: TBk4dXtfo6j3rxPc1VJDhA7BsVi2XHK1bi",
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
    },
  }
);
