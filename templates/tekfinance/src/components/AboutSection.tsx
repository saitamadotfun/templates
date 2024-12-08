import clsx from "clsx";

import Image from "next/image";
import { block } from "saitamadotfun/bunshi";

export default block(
  function AboutSection({ title, logo, contents: { ethos, usages } }) {
    return (
      <section className="flex flex-col space-y-16 p-8">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2 tablet:justify-center">
            <h1
              dangerouslySetInnerHTML={{ __html: title }}
              className="text-2xl font-medium"
            />
            <Image
              src={logo.uri}
              width={48}
              height={48}
              alt={logo.metadata?.alt}
            />
          </div>
          <div className="flex flex-col space-y-4">
            <h1
              dangerouslySetInnerHTML={{ __html: ethos.title }}
              className="text-xl uppercase text-primary tablet:hidden"
            />
            <div className="flex flex-col space-y-2 text-cyan-50 tablet:self-center tablet:max-w-lg">
              {ethos.content.map((line, index) => (
                <p
                  key={index}
                  dangerouslySetInnerHTML={{ __html: line }}
                  className="tablet:text-center"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="relative flex flex-col space-y-8">
          <h1
            dangerouslySetInnerHTML={{ __html: usages.title }}
            className="text-xl uppercase tablet:text-xl"
          />
          <div className="self-center grid grid-cols-1 gap-4 tablet:grid-cols-2 desktop:grid-cols-3">
            {usages.reasons.map((reason, index) => (
              <div
                key={index}
                className={clsx(
                  "min-h-40 flex flex-col space-y-4 bg-gradient-to-r px-4 py-8 rounded-xl backdrop-blur-3xl desktop:max-w-md",
                  [
                    index % 2 == 0
                      ? "from-dark via-secondary-alpha-20 to-secondary-alpha-50"
                      : "border border-secondary bg-stone-950",
                  ]
                )}
              >
                <h1
                  dangerouslySetInnerHTML={{ __html: reason.title }}
                  className="flex-1 text-lg font-bold pr-16 capitalize"
                ></h1>
                <p dangerouslySetInnerHTML={{ __html: reason.description }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },
  {
    title: "AboutSection",
    argsType: {
      title: {
        control: "input",
        inputType: "textarea",
      },
      logo: { control: "asset" },
      contents: {
        control: "map",
        keys: {
          ethos: {
            control: "map",
            keys: {
              title: { control: "input" },
              content: {
                control: "list",
                items: [
                  {
                    title: (title: string) => (
                      <p className="line-clamp-2 truncate">{title}</p>
                    ),
                    control: "input",
                    inputType: "textarea",
                  },
                ],
              },
            },
          },
          usages: {
            control: "map",
            keys: {
              title: { control: "input" },
              reasons: {
                control: "list",
                items: [
                  {
                    control: "map",
                    title: ({ title }: { title: string }) => (
                      <p className="line-clamp-2 truncate">{title}</p>
                    ),
                    keys: {
                      title: { control: "input" },
                      description: { control: "input", inputType: "textarea" },
                    },
                  },
                ],
              },
            },
          },
        },
      },
    },
    args: {
      title: "About <span className='text-primary'>Tek Finance</span>",
      logo: {
        uri: "/icons/ic_logo.png",
        metadata: {
          alt: "TekFinance",
        },
      },
      contents: {
        ethos: {
          title: "Our Ethos",
          content: [
            "TekFinance is a crypto reward, gifting and distribution system\
             for friends, families, influencers, group managers, founders,\
             developers and more. <br class='page:lt-md:hidden editor:phone:hidden' /> Beyond just\
             rewarding and tipping, we offer loyalty programs through our\
             open loyalty initiatives.",
            "TekBot is powered by TekFinance, designed specifically as an\
              decentralized management tool in Telegram groups and Discord\
              server for rewarding users in Sol and other SPL tokens.",
            "The idea behind TekFinance tipping bot is to enable users to\
             send zero-fee digital assets payment using social tags to\
             enhance community engagement with no wallet app installs\
             necessary.",
          ],
        },
        usages: {
          title: "Why use us?",
          reasons: [
            {
              title: "Effortless crypto<br />Distribution",
              description:
                "TekFinance simplifies sending cryptocurrency to anyone using social tags, eliminating the need for complex crypto distribution.",
            },
            {
              title: "Rich gifting and rewards",
              description:
                "TekFinance offers a unique crypto gifting and rewarding system beyond just tipping.",
            },
            {
              title: "Loyalty Program Integration",
              description:
                "TekFinance offers an open loyalty program system that enables businesses to create crypto based reward programs, boosting customer engagement",
            },
            {
              title: "Secure and reliable platform",
              description:
                "TekFinance prioritizes security, providing a safe and reliable platform for users to send and receive theirc cryptocurreny with peace of mind.",
            },
            {
              title: "Frictionless Transactions",
              description:
                "TekFinance simplifies crypto transactions with social tags, eliminating complex wallet address.",
            },
            {
              title: "Fast Redeem Link",
              description:
                "TekFinance offer easy redeem link for hassle-free claiming of crypto gifts and rewards.",
            },
          ],
        },
      },
    },
  }
);
