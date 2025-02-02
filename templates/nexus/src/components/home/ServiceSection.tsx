import clsx from "clsx";
import { block } from "saitamadotfun/bunshi";

export default block(
  function ServiceSection({ services }) {
    return (
      <section className="flex flex-col space-y-4 px-4 md:px-8">
        <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white/75 via-white/50 to-white/5">
          Our Services
        </h1>
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={clsx(
                "flex flex-col space-y-2 bg-gradient-to-b from-primary-alpha-25 to-green-950/10 border border-primary-alpha-10 p-4 rounded-md md:space-y-4",
                index === Math.floor((services.length - 2) / 2) ? "md:row-span-3 lt-md:h-xs" : "h-xs"
              )}
            >
              <h1 className="text-xl">{service.title}</h1>
              <p className="text-lg text-white/75">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  },
  {
    title: "ServiceSection",
    argsType: {
      services: {
        control: "list",
        items: [
          {
            control: "map",
            keys: {
              title: { control: "input" },
              description: { control: "input", inputType: "textarea" },
            },
          },
        ],
      },
    },
    args: {
      services: [
        {
          title: "Branding",
          description:
            "Utilizing Web3 tools like decentralized social media platforms, Discord, and Telegram to build and manage engaged communities. Hereby helping brands build an authentic, transparent, and community-driven identity in the Web3 spaces.",
        },
        {
          title: "Community Building & Engagement",
          description:
            "Creating community ambassador programs that empower passionate users to spread the brand’s message and then designing a reward systems through tokens or  NFTs to incentivize user interaction and loyalty.",
        },
        {
          title: "Storytelling & Content Creation",
          description:
            "Crafting compelling, Web3 specific brand stories that resonate with decentralized audiences and align with blockchain values and then distributing the contents tailored for Web3 platforms, including blogs, podcasts, videos, and social media & decentralized communities.",
        },
        {
          title: "Influencer Campaigns",
          description:
            "Identifying and partnering with influencers who specialize in blockchain, crypto, NFTs, and decentralized technologies. & then lunching a cobranded initiatives with these Web3 centric influencers, creators, or other blockchain-based projects.",
        },
        {
          title: "Partnerships & Collaborations",
          description:
            "Facilitating partnerships between brands and other Web3 projects, Helping the brand integrate into existing Web3 ecosystems",
        },
      ],
    },
  }
);
