// "use client";

// import clsx from "clsx";
// import { useInView } from "react-intersection-observer";
// import { block } from "saitamadotfun/bunshi";
// import InView from "../InView";

// export default block(
//   function FeatureSection({ features }) {
//     const { ref, inView } = useInView();

//     return (
//       <section
//         ref={ref}
//         className="self-center flex px-4 py-8 phone:flex-col phone:space-y-8 tablet:px-8 tablet:space-x-16"
//       >
//         <div
//           className={clsx("max-w-xl", {
//             "animate-slide-in-down tablet:animate-slide-in-left": inView,
//           })}
//         >
//           <h1 className="text-4xl font-inter font-bold text-gradient-primary bg-gradient-to-b tablet:text-8xl">
//             Dive into the ultimate memecoin exchange
//           </h1>
//         </div>
//         <div className="flex-1 flex flex-col space-y-4">
//           {features.map((feature, index) => (
//             <InView
//               key={index}
//               className="flex-1 text-xl font-medium border-l border-dark p-8"
//               animateInClassName="animate-fade-in"
//             >
//               <h1 className="text-2xl">{feature.title}</h1>
//               <p className="text-black/50 dark:text-white/75">
//                 {feature.description}
//               </p>
//             </InView>
//           ))}
//         </div>
//       </section>
//     );
//   },
//   {
//     title: "FeatureSection",
//     argsType: {
//       features: {
//         control: "list",
//         items: [
//           {
//             control: "map",
//             title: (props: { title: string }) => props.title,
//             keys: {
//               title: { control: "input" },
//               description: { control: "input" },
//             },
//           },
//         ],
//       },
//     },
//     args: {
//       features: [
//         {
//           title: "Trade Futures Without Selling",
//           description:
//             "Keep ownership of your memes and use them to trade futures.",
//         },
//         {
//           title: "Stake in Strategy Vaults",
//           description:
//             "A range of passive strategy vaults outperform in upward, downward and ranging markets.",
//         },
//         {
//           title: "Begin trading now",
//           description: "with no trade minimums and low fees.",
//         },
//       ],
//     },
//   }
// );

import { block } from "saitamadotfun/bunshi";

export default block(
  function RaceSection({ backgroundImage, tagText, character }) {
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
        uri: "/il_race_red_car.png",
        metadata: {
          alt: "Car",
        },
      },
    },
  }
);
