import { block } from "saitamadotfun/bunshi";

export default block(
  function BrewSection({ backgroundImage, tagText, character }) {
    const [firstLine, secondLine] = tagText.split(" ");
    return (
      <div className="relative z-10 mt-10 flex flex-col items-end justify-center">
        <img
          src={backgroundImage.uri}
          alt={backgroundImage.metadata?.alt}
          className="absolute rounded-md inset-0 w-full h-full object-cover z-10"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-start z-20">
          <div className="text-center space-y-4">
            <h1 className="ghost-text-size font-race-sport text-infinite text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase ghost-text">
              {firstLine}
            </h1>

            <h1 className="ghost-text-size font-race-sport text-infinite text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase ghost-text">
              {secondLine}
            </h1>
          </div>
        </div>

        <img
          src={character.uri}
          alt={character.metadata?.alt}
          className="relative z-30 w-[300px] sm:w-[400px] md:w-[600px] lg:w-[900px]"
        />
      </div>
    );
  },
  {
    argsType: {
      backgroundImage: { control: "asset" },
      tagText: { control: "input" },
      character: { control: "asset" },
    },

    args: {
      backgroundImage: {
        uri: "/bg.png",
        metadata: {
          alt: "Background",
        },
      },
      tagText: "Race Brew",
      character: {
        uri: "/car-yellow.png",
        metadata: {
          alt: "Car",
        },
      },
    },
  }
);
