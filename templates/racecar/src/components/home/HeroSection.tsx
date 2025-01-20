// import { block } from "saitamadotfun/bunshi";

// export default block(
//   function Herosection({ backgroundImage, tagText, character }) {
//     const [firstLine, secondLine] = tagText.split(" ");
//     return (
//       <div className="relative z-10 h-2xl space-y-10 flex flex-col">
//         <img
//           src={backgroundImage.uri}
//           alt={backgroundImage.metadata?.alt}
//           className="h-2xl z-10 w-92 mx-auto object-cover"
//         />

//         <div className="absolute top-[40%] py-4 bottom-[20%] left-[25%] right-[25%] inset-0 flex flex-col items-center justify-center z-20">
//           <div className="text-center relative top-[40%]">
//             <h1 className="ghost-text-size font-race-sport  text-infinity leading-10 font-black text-black uppercase mb-40 ghost-text">
//               {firstLine}
//             </h1>
//             <h1 className="ghost-text-size font-race-sport  text-infinity font-black text-black uppercase ghost-text">
//               {secondLine}
//             </h1>
//           </div>

//           <img
//             src={character.uri}
//             alt={character.metadata?.alt}
//             width={700}
//             height={700}
//             className="z-40"
//           />
//         </div>
//       </div>
//     );
//   },
//   {
//     argsType: {
//       backgroundImage: { control: "asset" },
//       tagText: { control: "input" },
//       character: { control: "asset" },
//     },

//     args: {
//       backgroundImage: {
//         uri: "/il_yellow_bg.png",
//         metadata: {
//           alt: "Background",
//         },
//       },
//       tagText: "Race Brew",
//       character: {
//         uri: "/il_race_car.png",
//         metadata: {
//           alt: "Character",
//         },
//       },
//     },
//   }
// );

import { block } from "saitamadotfun/bunshi";

export default block(
  function Herosection({ backgroundImage, tagText, character }) {
    const [firstLine, secondLine] = tagText.split(" ");
    return (
      <div className="relative z-10 h-2xl flex flex-col">
        <img
          src={backgroundImage.uri}
          alt={backgroundImage.metadata?.alt}
          className="h-2xl z-10 w-5/10 sm:w-10/12 md:w-8/12 lg:w-4/10 mx-auto object-cover"
        />

        <div className="absolute top-[40%] py-4 bottom-[20%] left-[10%] sm:left-[15%] md:left-[20%] lg:left-[25%] right-[10%] sm:right-[15%] md:right-[20%] lg:right-[25%] inset-0 flex flex-col items-center justify-center z-20">
          <div className="text-center relative top-[40%] space-y-4">
            <h1 className="ghost-text-size font-race-sport text-infinity leading-10 font-black text-black uppercase mb-40 ghost-text">
              {firstLine}
            </h1>

            <h1 className="ghost-text-size font-race-sport  text-infinity leading-10 font-black text-black uppercase mb-40 ghost-texs">
              {secondLine}
            </h1>
          </div>

          <img
            src={character.uri}
            alt={character.metadata?.alt}
            width={400}
            height={400}
            className="z-40 w-40 sm:w-60 md:w-80 lg:w-[700px]"
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
        uri: "/il_yellow_bg.png",
        metadata: {
          alt: "Background",
        },
      },
      tagText: "Race Brew",
      character: {
        uri: "/il_race_car.png",
        metadata: {
          alt: "Character",
        },
      },
    },
  }
);
