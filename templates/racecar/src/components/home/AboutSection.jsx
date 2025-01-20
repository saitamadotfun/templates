import { block } from "saitamadotfun/bunshi";

export default block(
  function AboutSection({ aboutText, aboutParagraph, character }) {
    const [firstLine, secondLine] = aboutParagraph.split("");
    return (
      <div className="flex flex-col mt-20 lg:flex-row items-center justify-around bg-[#FFF4D8] text-white p-8 lg:p-16">
        <div className="max-w-lg space-y-4">
          <h1 className="text-4xl lg:text-4xl capitalize text-[#C99B18]  font-bold-marker mb-4 font-extrabold">
            {aboutText}
          </h1>
          <p className="text-[#565555] leading-relaxed">{aboutParagraph}</p>
        </div>

        <div className="mt-8 lg:mt-0">
          <img
            src={character.uri}
            alt={character.metadata?.alt}
            className="w-64 lg:w-80 mx-auto shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300"
          />
        </div>
      </div>
    );
  },

  {
    argsType: {
      aboutText: { control: "input" },
      aboutParagraph: { control: "input" },
      character: { control: "asset" },
    },

    args: {
      aboutText: "about us",
      aboutParagraph:
        "On the sunlit streets of Maranello, a legend was born—a Ferrari like no other. Named Race Brew, this masterpiece combined the raw, untamed power of Ferrari’s racing legacy with a design inspired by the art of Italian craftsmanship. Its creators envisioned more than just a car they wanted an experience that would intoxicate the senses like a perfectly brewed espresso. Every detail, from its roaring V12 engine to its sleek curves, embodied speed, precision, and an unmatched elegance. The unveiling of Race Brew was met with awe. Its crimson body shimmered under the lights, the nameplate etched with intricate vines, paying homage to Italys rich coffee culture. Behind the wheel, drivers felt the rush of 1,000 horsepower surging through them, as if the car itself was alive. It was more than a Ferrari—it was a symphony of adrenaline and artistry, a testament to the brands pursuit of perfection. Race Brew was not just driven; it was savored.",
      character: {
        uri: "/il_trunk.png",
        metadata: {
          alt: "Satama",
        },
      },
    },
  }
);
