import Image from "next/image";
import { block } from "saitamadotfun/bunshi";

export default block(
  function HeroSection({ backgroundImage, tagText, character }) {
    return (
      <div className="relative my-6 h-2xl mb-10 flex flex-col">
        <img
          src={backgroundImage.uri}
          alt={backgroundImage.metadata?.alt}
          className="h-2xl object-cover"
        />
        <div className="absolute top-[39%] botttom-[25%] left-[25%] right-[25%] flex flex-col items-center justify-center z-10">
          <div className="absolute">
            <h1 className="ghost-text-size  text-infinity font-black uppercase font-bold-marker ghost-text">
              {tagText}
            </h1>
          </div>
          <img
            src={character.uri}
            alt={backgroundImage.metadata?.alt}
            width={512}
            height={512}
            className="z-10"
          />
        </div>
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
        uri: "/hero_section_bg.png",
        metadata: {
          alt: "Background",
        },
      },
      tagText: "Saitama",
      character: {
        uri: "/saitama.png",
        metadata: {
          alt: "Saitama",
        },
      },
    },
  }
);
