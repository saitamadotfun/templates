"use client";
import Image from "next/image";
import { block } from "saitamadotfun/bunshi";

import { avatars } from "@/config/avatar";

export const HeroSection = block(
  function HeroSection({
    badge,
    headline,
    subtitle,
    callToAction,
    socialProof,
  }) {
    const count = 256;

    return (
      <section className="flex flex-col items-center justify-center space-y-8 py-16">
        <div className="flex items-center justify-center space-x-2 bg-primary-alpha text-primary px-2 text-sm px-4 py-1 border border-primary rounded-full">
          <div className="i-mdi:lightning-bolt-circle text-xl" />
          <span>{badge}</span>
        </div>
        <div className="flex flex-col space-y-4 md:space-y-8">
          <div className="flex flex-col space-y-2 text-center md:space-y-4">
            <h1
              className="text-4xl font-black md:text-6xl"
              dangerouslySetInnerHTML={{ __html: headline }}
            />
            <p
              className="text-black/75 md:text-base"
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
          </div>
          <div className="self-center flex phone:flex-col phone:space-y-4 tablet:items-center tablet:space-x-2">
            <input
              placeholder="example.fun"
              className="p-2 min-w-xs border border-black placeholder-black/75 rounded focus:ring-4 focus:ring-black/25"
            />
            <button className="self-center bg-primary text-inverse px-6 py-2 rounded-md hover:bg-black/75 active:bg-black">
              {callToAction}
            </button>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center">
            {avatars.map((avatar, index) => (
              <Image
                key={index}
                src={avatar.icon}
                width={48}
                height={48}
                alt={avatar.name}
                className="rounded-full border-4 border-white first:ml-0 -ml-4"
              />
            ))}
          </div>
          <p>{socialProof.replaceAll("{COUNT}", String(count))}</p>
        </div>
      </section>
    );
  },
  {
    title: "Hero Section",
    argsType: {
      badge: {
        control: "input",
      },
      headline: {
        control: "input",
      },
      subtitle: {
        control: "input",
        inputType: "textarea",
      },
      callToAction: {
        title: "Call to Action",
        control: "input",
      },
      socialProof: {
        title: "Social Proof",
        control: "input",
        inputType: "textarea",
      },
    },
    args: {
      badge: "Sign up now and get 50% off at launch",
      headline:
        "Software that <br class='md:hidden' /> sparks <br class='lt-md:hidden' /> your <br class='md:hidden' /> imagination",
      subtitle:
        "Unleash your creativity with our innovative <br class='md:hidden' /> software. From concept <br class='lt-md:hidden' /> to creation, we provide <br class='md:hidden' /> the tools you need to bring your ideas to life.",
      callToAction: "Join The Waitlist",
      socialProof: "Join {COUNT} others waiting for the best app ever!",
    },
  }
);
