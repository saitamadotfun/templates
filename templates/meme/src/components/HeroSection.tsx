"use client";

import Link from "next/link";
import Image from "next/image";
import { block } from "saitamadotfun/bunshi";

export const HeroSection = block(
  function HeroSection({
    background,
    title,
    subtitle,
    primaryAction,
    secondaryAction,
  }) {
    return (
      <div className="h-[90vh] relative flex flex-col mx-2 tablet:mx-8">
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/25 to-black rounded-3xl blur-sm z-10" />
        <Image
          src={background.uri}
          alt={background.metadata.alt}
          width={1920}
          height={1200}
          className="absolute inset-0 h-full object-cover rounded-3xl"
        />
        <div className="mt-auto flex flex-col space-y-6 text-white z-20 p-4 tablet:px-8 tablet:py-16">
          <div className="flex flex-col space-y-2">
            <h1
              className=" font-black phone:text-4xl tablet:text-8xl tablet:text-nowrap"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p className="text-white/75">{subtitle}</p>
          </div>
          <div className="flex phone:flex-col phone:space-y-4 tablet:items-center tablet:space-x-4">
            <Link
              href={primaryAction.link}
              target="_blank"
              className="flex items-center justify-center bg-primary text-inverse px-8 py-2 rounded-full"
            >
              {primaryAction.title}
            </Link>
            <Link
              href={secondaryAction.link}
              target="_blank"
              className="flex items-center justify-center bg-primary-alpha text-inverse-alpha px-8 py-2 rounded-full"
            >
              {secondaryAction.title}
            </Link>
          </div>
        </div>
      </div>
    );
  },
  {
    title: "Hero Section",
    argsType: {
      background: { control: "asset" },
      title: {
        control: "input",
      },
      subtitle: {
        control: "input",
      },
      primaryAction: {
        control: "map",
        keys: {
          title: {
            control: "input",
          },
          link: {
            control: "input",
          },
        },
      },
      secondaryAction: {
        control: "map",
        keys: {
          title: {
            control: "input",
          },
          link: {
            control: "input",
          },
        },
      },
    },
    args: {
      background: {
        uri: "/il_banner.png",
        metadata: {
          alt: "Meme Illustration",
        },
      },
      title: "The People's <br /> meme gateway",
      subtitle: "Meme on demand, for the solana community",
      primaryAction: {
        title: "Create Meme",
        link: "https://t.me/TheMemeSolBot",
      },
      secondaryAction: {
        title: "Join Community",
        link: "https://t.me/MemeSolTalk",
      },
    },
  }
);
