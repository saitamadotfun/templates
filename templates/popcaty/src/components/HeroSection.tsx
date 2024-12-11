import { block } from "saitamadotfun/bunshi";

export default block(
  function HeroSection({ name }) {
    return (
      <main className="flex-1 self-center flex flex-col">
        <h1 className="m-auto text-7xl text-white/50 font-outline-2 uppercase md:text-9xl">
          {name}
        </h1>
      </main>
    );
  },
  {
    argsType: {
      name: { control: "input" },
    },
    args: {
      name: "PopCaty",
    },
  }
);
