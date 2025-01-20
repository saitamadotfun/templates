import { block } from "saitamadotfun/bunshi";

export default block(
  function Herodisplay({ headerText, headerparagraph, character, ctaText }) {
    return (
      <div className="flex flex-col lg:flex-row items-center justify-around bg-black text-white p-8 lg:p-16">
        <div className="max-w-lg space-y-4">
          <h1 className="text-4xl lg:text-4xl font-bold-marker mb-4 font-extrabold">
            {headerText}
          </h1>
          <p className="text-gray-300 leading-relaxed">{headerparagraph}</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 font-bold-marker font-bold text-black font-bold py-2 px-6 rounded shadow-lg transform hover:scale-105 transition-transform duration-300">
            {ctaText}
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-8 lg:mt-0">
          <img
            src={character.uri}
            alt={character.metadata?.alt}
            className="w-64 lg:w-60 mx-auto shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300"
          />
        </div>
      </div>
    );
  },

  {
    argsType: {
      headerText: { control: "input" },
      headerparagraph: { control: "input" },
      character: { control: "asset" },
      ctaText: { control: "input" },
    },

    args: {
      headerText: "IN A PUNCH",
      headerparagraph:
        "Saitama is the main protagonist of the anime and manga series One Punch Man, created by ONE. He is a hero who can defeat any opponent with a single punch, leading to a lack of challenge and excitement in his life. Known for his unassuming bald appearance and simple personality, Saitama began his hero journey as a hobby after intense training that left him overwhelmingly strong. Despite his unmatched power, he remains humble, often struggling to gain recognition in the Hero Association. His character blends humor, satire, and action, making him a unique and beloved figure in modern anime.",
      character: {
        uri: "/satama.png",
        metadata: {
          alt: "Satama",
        },
      },
      ctaText: "BUY NOW",
    },
  }
);
