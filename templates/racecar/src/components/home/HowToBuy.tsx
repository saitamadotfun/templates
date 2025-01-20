import { title } from "process";
import React from "react";

type StepProps = {
  number: number;
  title: string;
  description: string;
  color: string;
  borderColor: string;
  textColor: string;
};

type HowToBuyProps = {
  steps: StepProps[];
};

export const HowToBuy: React.FC<HowToBuyProps> = ({ steps }) => {
  return (
    <div className="bg-[#FFF4D8] py-10 px-6 md:px-20 relative">
      <h2 className="text-[#C99B18] font-bold text-2xl md:text-3xl uppercase mb-10">
        How to Buy
      </h2>

      <div className="flex flex-col md:flex-row relative">
        <div className="flex-shrink-0 md:w-1/2 relative">
          <img
            src="/by-race-green.png"
            alt="Green Car"
            className="w-full h-auto object-contain"
          />

          {/* Small Ellipses */}
          {steps.map((step, index) => (
            <div
              key={index}
              className="absolute w-4 h-4 rounded-full"
              style={{
                top: `${index * 25 + 15}%`,
                left: "85%",
                backgroundColor: step.borderColor,
                border: "2px solid white",
              }}
            ></div>
          ))}
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-12 md:w-1/2 pl-8 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-6 rounded-lg shadow-lg"
              style={{
                backgroundColor: step.color,
                borderColor: step.borderColor,
                borderWidth: "2px",
              }}
            >
              <div className=" flex space-x-4 items-center">
                <h3
                  className="font-bold font-race-sport text-5xl mb-2"
                  style={{ color: step.textColor }}
                >
                  {step.number}
                </h3>

                <div>
                  <h3
                    className="font-bold text-xl mb-2"
                    style={{ color: step.textColor }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{step.description}</p>
                </div>
              </div>

              {/* Line Connecting Ellipse to Step */}
              <svg
                className="absolute -left-40"
                width="200"
                height="60"
                viewBox="0 0 120 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <path
                  d={`M0 30 L0 20 L40 30 L120 30`}
                  stroke={step.borderColor}
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ArgsType
export const stepsData: StepProps[] = [
  {
    number: 1,
    title: "CONNECT YOUR WALLET",
    description:
      "Download a Solana wallet. We recommend Phantom or Solflare. These can be downloaded from the appstore or as chrome extensions for desktop users.",
    color: "#D4EDDA", // Light green background
    borderColor: "#5DAA5B", // Green border
    textColor: "#155724", // Green text
  },
  {
    number: 2,
    title: "SELECT YOUR \n NFT",
    description:
      "Choose the NFT you’d like to purchase from the marketplace. Be sure to have enough funds in your wallet.",
    color: "#FFF3CD", // Light yellow background
    borderColor: "#856404", // Yellow border
    textColor: "#856404", // Yellow text
  },
  {
    number: 3,
    title: "CONFIRM YOUR PURCHASE",
    description:
      "Once you’ve selected your NFT, confirm the transaction in your wallet to complete the purchase.",
    color: "#F8D7DA", // Light red background
    borderColor: "#721C24", // Red border
    textColor: "#721C24", // Red text
  },
];

// import React from "react";

// type Card = {
//   title: string;
//   description: string;
//   image: {
//     uri: string;
//     metadata?: {
//       alt?: string;
//     };
//   };
//   backgroundColor: string;
//   textColor: string;
//   borderColor: string;
//   partialBackgroundColor: string;
// };

// type HowToBuyProps = {
//   cards: Card[];
// };

// export const HowToBuy: React.FC<HowToBuyProps> = ({ cards = [] }) => {
//   return (
//     <div className="bg-[#FFFBEF] py-10 px-6 md:px-20 relative">
//       {/* Title */}
//       <h2 className="text-[#C99B18] font-bold text-2xl md:text-3xl uppercase mb-10">
//         How to Buy
//       </h2>

//       <div className="flex flex-col md:flex-row">
//         {/* Car Image */}
//         <div className="flex-shrink-0 md:w-1/2 relative">
//           {cards.length > 0 && (
//             <img
//               src={cards[0].image.uri}
//               alt={cards[0].image.metadata?.alt || "Car"}
//               className="w-full h-auto object-contain"
//             />
//           )}

//           {/* Ellipses and Lines */}
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className="absolute"
//               style={{
//                 top: `${index * 25 + 15}%`, // Adjust position based on index
//                 left: "10%",
//               }}
//             >
//               {/* Circle */}
//               <div
//                 className="w-4 h-4 rounded-full"
//                 style={{
//                   backgroundColor: card.borderColor,
//                   border: "2px solid white",
//                   position: "absolute",
//                   transform: "translate(-50%, -50%)",
//                 }}
//               ></div>
//               {/* Line */}
//               <div
//                 className="h-[2px] w-[200px]"
//                 style={{
//                   backgroundColor: card.borderColor,
//                   position: "absolute",
//                   left: "20px",
//                   top: "50%",
//                 }}
//               ></div>
//             </div>
//           ))}
//         </div>

//         {/* Steps */}
//         <div className="relative flex flex-col gap-8 md:w-1/2 pl-8">
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className="p-6 rounded-lg shadow-lg"
//               style={{
//                 backgroundColor: card.backgroundColor,
//                 borderColor: card.borderColor,
//                 borderWidth: "2px",
//               }}
//             >
//               <h3
//                 className="font-bold text-xl mb-2"
//                 style={{ color: card.textColor }}
//               >
//                 {index + 1}. {card.title}
//               </h3>
//               <p className="text-gray-700 text-sm">{card.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // ArgsType
// export const argsType = {
//   argsType: {
//     cards: {
//       control: "list",
//       items: [
//         {
//           control: "map",
//           title: (props: { title: string }) => props.title,
//           keys: {
//             title: { control: "input" },
//             description: { control: "input" },
//             image: {
//               control: "map",
//               keys: {
//                 uri: { control: "input" },
//                 metadata: {
//                   control: "map",
//                   keys: {
//                     alt: { control: "input" },
//                   },
//                 },
//               },
//             },
//             backgroundColor: { control: "color" },
//             textColor: { control: "color" },
//             borderColor: { control: "color" },
//             partialBackgroundColor: { control: "color" },
//           },
//         },
//       ],
//     },
//   },
//   args: {
//     cards: [
//       {
//         title: "Connect Your Wallet",
//         description:
//           "Download a Solana wallet. We recommend Phantom or Solflare. These can be downloaded from the appstore or as chrome extensions for desktop users.",
//         image: {
//           uri: "/car-green.png",
//           metadata: { alt: "Green Car" },
//         },
//         backgroundColor: "#D4EDDA",
//         textColor: "#155724",
//         borderColor: "#5DAA5B",
//         partialBackgroundColor: "#C3E6CB",
//       },
//       {
//         title: "Connect Your Wallet",
//         description:
//           "Download a Solana wallet. We recommend Phantom or Solflare. These can be downloaded from the appstore or as chrome extensions for desktop users.",
//         image: {
//           uri: "/car-yellow.png",
//           metadata: { alt: "Yellow Car" },
//         },
//         backgroundColor: "#FFF3CD",
//         textColor: "#856404",
//         borderColor: "#DDB10A",
//         partialBackgroundColor: "#FFF0B5",
//       },
//       {
//         title: "Connect Your Wallet",
//         description:
//           "Download a Solana wallet. We recommend Phantom or Solflare. These can be downloaded from the appstore or as chrome extensions for desktop users.",
//         image: {
//           uri: "/car-red.png",
//           metadata: { alt: "Red Car" },
//         },
//         backgroundColor: "#F8D7DA",
//         textColor: "#721C24",
//         borderColor: "#D0361F",
//         partialBackgroundColor: "#FFCCC7",
//       },
//     ],
//   },
// };
