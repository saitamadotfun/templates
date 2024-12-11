import { block } from "saitamadotfun/bunshi";

export default block(
  function HomeFaq({ title, faqs }) {
    return (
      <section className="flex flex-col items-center justify-center space-y-8">
        <div className="text-2xl tablet:text-4xl">
          <h1>{title}</h1>
        </div>
        <div className="flex flex-col space-y-4 phone:px-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="flex flex-col space-y-2 max-w-2xl"
            >
              <h1 className="text-xl tablet:text-2xl">
                {index + 1}. {faq.title}{" "}
              </h1>
              <p
                className="font-inter"
                dangerouslySetInnerHTML={{ __html: faq.content }}
              />
            </div>
          ))}
        </div>
      </section>
    );
  },
  {
    title: "Faq",
    argsType: {
      title: { control: "input" },
      faqs: {
        control: "list",
        items: [
          {
            control: "map",
            title: ({ title }: { title: string }) => (
              <p className="truncate line-clamp-1">{title}</p>
            ),
            keys: {
              title: { control: "input" },
              content: { control: "input", inputType: "textarea" },
            },
          },
        ],
      },
    },
    args: {
      title: "Frequently asked questions?",
      faqs: [
        {
          title: "What is fliedlice?",
          content:
            "Despite the name Baby Doge Coin is actually a fun collectible\
              token built on Binance smart chain with the purpose to spread\
              awareness of animal adoption. Originally created as a meme joke\
              with 420 Quadrillion supply.",
        },
        {
          title: "What are the fees?",
          content:
            "The community voted to remove all transfer fees so you can transfer/buy/sell now set to 0%",
        },
        {
          title: "What do you mean by decentralized?",
          content:
            "It means you don't have to trust any central organization or person \
             the way you would a bank. The developers cannot seize your baby doge tokens, \
             but they also can't return them if you send them to the wrong address. \
             There is no company, team, or person you may rely on to increase the value or enhancement \
             of baby doge.",
        },
        {
          title: "How to fix insufficient output on Pancake Swap?",
          content: "Increase slippage to 12%",
        },
      ],
    },
  }
);
