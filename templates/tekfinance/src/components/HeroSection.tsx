import Image from "next/image";

import { block } from "saitamadotfun/bunshi";

export default block(
  function HeroSection({
    title,
    subtitle,
    tagLine,
    illustration: { foreBackground, background },
  }) {
    return (
      <section className="flex flex-col space-y-8 px-8">
        <div className="flex flex-col space-y-8 tablet:flex-row tablet:items-center">
          <div className="flex-1 flex flex-col space-y-8">
            <div className="flex flex-col space-y-2 phone:text-center tablet:space-y-4">
              <h1
                className="text-4xl font-medium md:text-6xl"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <p dangerouslySetInnerHTML={{ __html: subtitle }} />
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-center">
            <div className="z-0 absolute bg-gradient-to-r from-primary-alpha-30 to-primary-alpha-50 w-sm h-sm rounded-full blur-3xl tablet:w-lg tablet:h-lg tablet:-right-40" />
            {foreBackground && (
              <Image
                width={512}
                height={512}
                src={foreBackground.uri}
                alt={foreBackground.metadata?.alt}
              />
            )}
            {background && (
              <Image
                width={1024}
                height={1024}
                src={background.uri}
                alt={background.metadata?.alt}
                className="absolute size-xl tablet:size-2xl"
              />
            )}
          </div>
        </div>
        <h1
          className="text-xl font-medium text-center capitalize"
          dangerouslySetInnerHTML={{ __html: tagLine }}
        />
      </section>
    );
  },
  {
    title: "HeroSection",
    argsType: {
      title: {
        control: "input",
        inputType: "textarea",
      },
      subtitle: {
        control: "input",
        inputType: "textarea",
      },
      illustration: {
        control: "map",
        keys: {
          foreBackground: {
            control: "asset",
          },
          background: {
            control: "asset",
          },
        },
      },
      tagLine: {
        control: "input",
        inputType: "textarea",
      },
    },
    args: {
      title:
        "Building A <br class='page:lt-md:hidden editor:phone:hidden' />\
        Sustainable <br class='page:lt-md:hidden editor:phone:hidden' />\
        Financial <span class='text-primary'>\
        System</span>",
      subtitle:
        "A telegram and discord based tipping bot, enable users\
        <br class='page:lt-md:hidden editor:phone:hidden' /> send and tip Solana and other SPL tokens",
      illustration: {
        foreBackground: {
          uri: "/images/orbit.svg",
          metadata: {
            alt: "Orbit",
          },
        },
        background: {
          uri: "/images/robot.svg",
          metadata: {
            alt: "TekBot",
          },
        },
      },
      tagLine:
        "Providing trust and Confidence <br class='page:md:hidden editor:tablet:hidden' />\
        for <br class='page:lt-md:hidden editor:phone:hidden' />\
        long term projects and communities on\
        <br class='page:md:hidden editor:tablet:hidden' />\
        <span class='text-primary'>TekFinance</span>",
    },
  }
);
