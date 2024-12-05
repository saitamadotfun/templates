"use client";

import Image from "next/image";

import { block } from "saitamadotfun/bunshi";
import { MdOpenInNew } from "react-icons/md";

export const AboutSection = block(
  function AboutSection({ name, tokenomics, illustration }) {
    return (
      <section className="flex flex-col space-y-4 px-2 tablet:px-8">
        <div>
          <h1 className="text-xl text-white/75">About</h1>
          <p className="text-2xl font-bold">{name} Tokenomics</p>
        </div>
        <div className="flex phone:flex-col phone:space-y-8 tablet:items-end tablet:space-x-16">
          <div className="relative h-124 md:flex-1">
            <Image
              src={illustration.uri}
              alt={illustration.metadata.alt}
              width={604}
              height={360}
              className="w-full h-full rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/10 rounded-2xl" />
          </div>
          <div className="flex flex-col md:flex-1 ">
            <div className="flex flex-col space-y-8 md:max-w-xl">
              <div className="flex flex-col space-y-2">
                {tokenomics.map((tokenomic, index) => (
                  <div
                    key={index}
                    className="border border-white/50 px-4 py-2 rounded-xl"
                  >
                    {tokenomic}
                  </div>
                ))}
              </div>
              <button className="self-start flex items-center space-x-4 px-6 py-3 bg-white/10 rounded-full">
                <span className="flex-1">SolScan</span>
                <MdOpenInNew />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  },
  {
    title: "About Section",
    argsType: {
      name: {
        control: "input",
      },
      illustration: { control: "asset" },
      tokenomics: {
        control: "list",
        items: [
          {
            title: (tokenomic: string) => <p>{tokenomic}</p>,
            control: "input",
          },
        ],
      },
    },
    args: {
      name: "MemeSol",
      tokenomics: [
        "💵 Total Supply 1Billion",
        "💰 0% Buy/Sell tax",
        "🔥 100% of MemeSol Liquidity Burned",
      ],
      illustration: {
        uri: "https://ik.imagekit.io/orgk45qhh/il_launch_base.png",
        metadata: {
          alt: "MemeSol Launch Base",
        },
      },
    },
  }
);
