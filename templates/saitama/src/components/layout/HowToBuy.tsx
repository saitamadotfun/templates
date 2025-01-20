import { block } from "saitamadotfun/bunshi";

export default block(
  function HowToBuy({ steps }) {
    return (
      <div className="bg-[#FFF9E4] text-black p-8 space-y-10">
        <h1 className="text-4xl font-bold-marker font-bold text-center">
          HOW TO BUY
        </h1>
        <div className="max-w-3xl space-y-2 mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Step Content */}
              <div
                className={`bg-[#FFF6D6] max-w-96 h-52 rounded-lg p-6 shadow-lg relative ${
                  index % 2 === 1 ? "order-1" : ""
                }`}
              >
                <div className="absolute top-0 left-0 -z-10 w-full h-full rounded-lg transform translate-x-2 translate-y-2"></div>
                <div className="flex items-center">
                  <div className="text-5xl font-bold-marker font-bold mr-4">
                    {index + 1}.
                  </div>
                  <div>
                    <h2 className="text-xl font-bold-marker font-bold mb-2">
                      {step.title}
                    </h2>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              </div>
              {/* Step Icon */}
              <div
                className={`absolute ${
                  index % 2 === 0 ? "-left-12" : "-right-12"
                } transform -translate-y-1/2`}
                style={{ top: "50%" }}
              >
                <img
                  src={step.icon.uri}
                  alt={step.icon.metadata?.alt || `Step ${index + 1}`}
                  className="w-16 h-16 gap-4 rounded-full shadow-lg z-10"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
  {
    argsType: {
      steps: {
        control: "list",
        items: [
          {
            control: "map",
            keys: {
              icon: {
                control: "asset",
              },
              title: { control: "input" },
              description: { control: "input" },
            },
          },
        ],
      },
    },
    args: {
      steps: [
        {
          icon: {
            uri: "/saitamaIcon.png",
            metadata: { alt: "Step 1" },
          },
          title: "Create a Wallet",
          description:
            "Download a Solana wallet. We recommend Phantom or Solflare. These can be downloaded from the app store or as Chrome extensions for desktop users.",
        },
        {
          icon: {
            uri: "/saitamaIcon.png",
            metadata: { alt: "Step 2" },
          },
          title: "Add Solana",
          description:
            "Add SOL to your wallet. You can do this by purchasing SOL from a trusted exchange and transferring it to your wallet address.",
        },
        {
          icon: {
            uri: "/saitamaIcon.png",
            metadata: { alt: "Step 3" },
          },
          title: "Swap SOL for TARD",
          description:
            "Use a decentralized exchange to swap your SOL tokens for TARD tokens.",
        },
        {
          icon: {
            uri: "/saitamaIcon.png",
            metadata: { alt: "Step 4" },
          },
          title: "Welcome to TARD",
          description: "You now own TARD tokens. Enjoy the benefits!",
        },
      ],
    },
  }
);
