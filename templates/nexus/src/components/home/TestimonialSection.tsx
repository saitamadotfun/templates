import clsx from "clsx";
import Image from "next/image";
import { block } from "saitamadotfun/bunshi";

export default block(
  function TestimonialSection({ testimonies }) {
    return (
      <section
        id="testimonies"
        className="grid grid-cols-4 gap-4 px-4 z-10 tablet:px-8"
      >
        {testimonies.map((testimony, index) => (
          <div
            key={index}
            className={clsx(
              "flex flex-col space-y-2 bg-gradient-to-r from-primary-alpha-25 via-primary-alpha-25 via-primary-alpha-10 p-8 text-base rounded-md tablet:text-lg",
              index === 0 ? "col-span-4" : "col-span-4 tablet:col-span-2"
            )}
          >
            <div className="flex space-x-4">
              <Image
                src={testimony.avatar.uri}
                width={48}
                height={48}
                alt={testimony.avatar.metadata?.alt}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <p>{testimony.name}</p>
                <small className="text-xs text-white/75 tablet:text-sm">
                  {testimony.username}
                </small>
              </div>
            </div>
            <div className="max-w-md">
              <p className="text-white/75">{testimony.testimony}</p>
            </div>
          </div>
        ))}
      </section>
    );
  },
  {
    title: "TestimonialSection",
    argsType: {
      testimonies: {
        control: "list",
        items: [
          {
            control: "map",
            title: (props: { name: string }) => props.name,
            keys: {
              avatar: { control: "asset" },
              name: { control: "input" },
              username: { control: "input" },
              testimony: { control: "input", inputType: "textarea" },
            },
          },
        ],
      },
    },
    args: {
      testimonies: [
        {
          name: "Onisaibogu",
          username: "@onisaibogu",
          avatar: { uri: "/ic_onisaibogu.jpg", metadata: { alt: "Onisabogu" } },
          testimony:
            "Being part of this Web3 community has been a game changer! The engagement, governance, and rewards make it truly decentralized and rewarding.",
        },
        {
          name: "ZeroBoost",
          username: "@zer0boost",
          avatar: { uri: "/ic_zeroboost.jpg", metadata: { alt: "Onisabogu" } },
          testimony:
            "ZeroBoost has taken community-driven DeFi to the next level with this service! From governance to engaging campaigns, our Web3 community is stronger and more active than ever. The perfect partner for decentralized growth.",
        },
        {
          name: "Saitama",
          username: "@saitamadotfun",
          avatar: { uri: "/ic_saitama.jpg", metadata: { alt: "Onisabogu" } },
          testimony:
            "saitama.fun community has grown stronger than ever thanks to this service! Engaging campaigns, strategic partnerships, and authentic Web3 storytelling have helped us connect with the right audience. Highly recommended!",
        },
      ],
    },
  }
);
