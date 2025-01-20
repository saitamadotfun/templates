import { block } from "saitamadotfun/bunshi";

export default block(
  function Footer({ ctaText, icon1, icon2, icon3, icon4, text, text1 }) {
    return (
      <div className=" bg-black text-white text-center py-6">
        <div className="flex flex-col bg-white text-black my-6 mx-auto border max-w-72 mx-auto border-b-8 border-black border-b-amber-500 rounded-md">
          <div className=" flex items-center justify-between p-4 rounded-lg shadow-md">
            <button className="bg-yellow-500 hover:bg-yellow-600 font-bold-marker font-bold text-black font-bold py-2 px-2 rounded shadow-lg transform hover:scale-105 transition-transform duration-300">
              {ctaText}
            </button>

            <div className="flex space-x-4">
              <img
                src={icon1.uri}
                alt={icon1.metadata?.alt}
                className="w-6 h-6"
              />
              <img
                src={icon2.uri}
                alt={icon2.metadata?.alt}
                className="w-6 h-6"
              />
              <img
                src={icon3.uri}
                alt={icon3.metadata?.alt}
                className="w-6 h-6"
              />
              <img
                src={icon4.uri}
                alt={icon4.metadata?.alt}
                className=" w-6 h-6"
              />
            </div>
          </div>
        </div>

        <div className=" max-w-6xl mx-auto">
          <p className=" mb-4 text-sm font-bold-marker font-semibold">{text}</p>
          <p className=" mb-4"> {text1}</p>
        </div>
      </div>
    );
  },

  {
    argsType: {
      ctaText: { control: "input" },
      icon1: { control: "asset" },
      icon2: { control: "asset" },
      icon3: { control: "asset" },
      icon4: { control: "asset" },
      text: { control: "input" },
      text1: { control: "input" },
    },

    args: {
      ctaText: "Buy Now",
      icon1: {
        uri: "/logo1.png",
        metadata: {
          alt: "Logo 1",
        },
      },
      icon2: {
        uri: "/logo2.png",
        metadata: {
          alt: "Logo 2",
        },
      },
      icon3: {
        uri: "/logo3.png",
        metadata: {
          alt: "Logo 3",
        },
      },
      icon4: {
        uri: "/logo4.png",
        metadata: {
          alt: "Logo 4",
        },
      },
      text: "ALL RIGHTS RESERVED, 2025",
      text1:
        "WE WANT THIS PROJECT TO SUCCEED AND BECOME THE TOP MEME COIN ON COINMARKETCAP, AND WE WILL DO EVERYTHING IN OUR POWER TO ACHIEVE THIS. HOWEVER, REMEMBER THE RISKS AND ALWAYS TAKE RESPONSIBILITY FOR THEM. IT IS IMPORTANT TO THINK FOR YOURSELF.",
    },
  }
);
