import clsx from "clsx";
import { block } from "saitamadotfun/bunshi";

export default block(
  function Tokenomic({ tokenomics }) {
    return (
      <section className="flex flex-col bg-black text-white p-8 space-y-4 tablet:flex-row tablet:space-x-8 tablet:space-y-0 tablet:items-center tablet:justify-center">
        {tokenomics.map((tokenomic, index) => (
          <div
            key={index}
            className="flex-1 shrink-0 flex flex-col space-y-2"
          >
            <h1 className="text-4xl font-extrabold">{tokenomic.title}</h1>
            <p className="font-inter text-white/90">{tokenomic.content}</p>
          </div>
        ))}
      </section>
    );
  },
  {
    title: "Tokenomic",
    argsType: {
      tokenomics: {
        control: "list",
        items: [
          {
            control: "map",
            title: ({ title }: { title: string }) => (
              <p className="truncate line-clamp-1">{title}</p>
            ),
            keys: {
              title: { control: "input" },
              content: { control: "input" },
            },
          },
        ],
      },
    },
    args: {
      tokenomics: [
        { title: "Supply", content: "1,000,000,000 Tokens" },
        { title: "Lp Burnt", content: "100% Burnt" },
        { title: "Tax", content: "Buy/Sell 0" },
      ],
    },
  }
);
