import Image from "next/image";
import { block } from "saitamadotfun/bunshi";

export const TestimonialSection = block(
  function TestimonialSection({ title, testimonies }) {
    return (
      <section className="flex flex-col space-y-8">
        <div className="text-center justify-center">
          <h1 className="text-xl font-medium">{title}</h1>
        </div>
        <div className="flex space-x-4 overflow-x-scroll phone:px-4 tablet:px-16">
          {testimonies.map(({ avatar, name, username, testimony }, index) => (
            <div
              key={index}
              className="shrink-0 flex space-x-2 max-w-sm bg-black/5 p-4 rounded-md shadow"
            >
              <div>
                <Image
                  src={avatar.uri}
                  alt={avatar.metadata?.alt ?? name}
                  width={96}
                  height={96}
                  className="rounded-full"
                />
              </div>
              <div>
                <div className="flex flex-col">
                  <p>{name}</p>
                  <p className="text-xs text-black/60 md:text-sm">{username}</p>
                </div>
                <p className="text-black/75">{testimony}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  },
  {
    title: "Testimonial Section",
    argsType: {
      title: { control: "input" },
      testimonies: {
        control: "list",
        items: [
          {
            control: "map",
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
      title: "Testimonies",
      testimonies: [
        {
          avatar: { uri: "/il_pepe.png", metadata: {} },
          name: "PePe",
          username: "@pepe",
          testimony:
            "Wow, the AI support agent is a game-changer! Solved my wallet syncing issue in seconds. Blockchain support just got futuristic! 🚀✨",
        },
        {
          avatar: { uri: "/il_djtrump.png", metadata: {} },
          name: "Dj Trump",
          username: "@djtrump",
          testimony:
            "I'm blown away by how smart this support AI is. Helped me recover my lost transaction data step-by-step. 10/10 experience!",
        },
        {
          avatar: { uri: "/il_energo.png", metadata: {} },
          name: "Energo",
          username: "@energo",
          testimony:
            "Finally, an AI that understands blockchain lingo! It resolved my staking query with crystal-clear precision. Incredible tech!",
        },
        {
          avatar: { uri: "/il_ai.png", metadata: {} },
          name: "AI",
          username: "@ai",
          testimony:
            "No more waiting hours for support! The blockchain AI agent fixed my node connectivity issue instantly. Highly recommend!",
        },
        {
          avatar: { uri: "/il_bobros.png", metadata: {} },
          name: "Bobros",
          username: "@bobros",
          testimony:
            "This AI assistant is a lifesaver! Guided me through setting up a smart contract without any errors. So seamless!",
        },
        {
          avatar: { uri: "/il_punk.png", metadata: {} },
          name: "Punk",
          username: "@punk",
          testimony:
            "Had a question about minting NFTs, and the AI support agent handled it like a pro. Blockchain customer service leveled up! ",
        },
      ],
    },
  }
);
