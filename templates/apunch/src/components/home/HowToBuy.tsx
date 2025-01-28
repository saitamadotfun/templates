import clsx from "clsx";
import { block } from "saitamadotfun/bunshi";

import { format } from "@/lib/utils";

export default block(
  function HowToBuy({ icon, steps }) {
    return (
      <div className="flex flex-col bg-inverse text-black p-8 space-y-8">
        <h1 className="text-4xl font-bold-marker font-bold text-center uppercase">
          How to buy
        </h1>
        <div className="m-auto space-y-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex"
              style={{
                transform: format(
                  "translateY(%) translateX(%)",
                  index === 0 ? "0" : -index * 32 + "px",
                  index % 2 === 1 ? "96px" : "0"
                ),
              }}
            >
              <img
                src={icon.uri}
                className={clsx(
                  "absolute top-0 size-16 object-contain",
                  index % 2 === 0 ? "-left-16" : "-right-16 -scale-x-100"
                )}
              />
              <div
                className={clsx(
                  "max-w-md h-52  flex bg-primary-alpha p-6 border border-b-8 border-black rounded-lg"
                )}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-5xl font-bold-marker font-bold">
                    {index + 1}
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h1 className="text-2xl font-bold-marker font-bold">
                      {step.title}
                    </h1>
                    <p className="text-black/75">{step.description}</p>
                  </div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={clsx(
                    "absolute -bottom-8 size-32 border-1 border-black rounded-full -z-10",
                    index % 2 === 0 ? "-right-12" : "-left-12"
                  )}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  },
  {
    title: "HowToBuy",
    argsType: {
      icon: { control: "asset" },
      steps: {
        control: "list",
        items: [
          {
            control: "map",
            title: (props: { title: string }) => props.title,
            keys: {
              title: { control: "input" },
              description: { control: "input" },
            },
          },
        ],
      },
    },
    args: {
      icon: {
        uri: "/il_saitama_suprised.png",
        metadata: {
          alt: "Saitama Suprised",
        },
      },
      steps: [
        {
          title: "Create a Wallet",
          description:
            "Download a Solana wallet. We recommend Phantom or Solflare. These can be downloaded from the app store or as Chrome extensions for desktop users.",
        },
        {
          title: "Add Solana",
          description:
            "Add SOL to your wallet. You can do this by purchasing SOL from a trusted exchange and transferring it to your wallet address.",
        },
        {
          title: "Swap SOL for SAT",
          description:
            "Use a decentralized exchange to swap your SOL tokens for SAT tokens.",
        },
        {
          title: "Welcome to SAT",
          description: "You now own TARD tokens. Enjoy the benefits!",
        },
      ],
    },
    style: {
      transform: {
        ">=md": {},
      },
    },
  }
);
