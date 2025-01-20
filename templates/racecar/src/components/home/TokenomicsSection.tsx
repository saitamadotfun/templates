// "use client";
// import clsx from "clsx";
// import { block } from "saitamadotfun/bunshi";
// import { MdAddCircle } from "react-icons/md";
// import { useInView } from "react-intersection-observer";
// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
// } from "@headlessui/react";

// import InView from "../InView";

// export default block(
//   function FaqSection({ faqs }) {
//     const { ref, inView } = useInView();

//     return (
//       <section
//         ref={ref}
//         className="flex flex-col space-y-16 px-4 tablet:px-8 tablet:self-center tablet:w-2xl "
//       >
//         <h1
//           className={clsx(
//             "text-4xl font-bold text-center text-gradient-primary bg-gradient-to-b tablet:text-6xl",
//             { "animate-slide-in-down": inView }
//           )}
//         >
//           Frequently asked Questions
//         </h1>
//         <div className="flex flex-col space-y-4">
//           {faqs.map((faq, index) => (
//             <Disclosure key={index}>
//               {({ open }) => (
//                 <InView
//                   className={clsx(
//                     "transition flex flex-col bg-black/5 border-l-4 dark:bg-dark-900",
//                     open ? "border-primary" : "bg-black/10 dark:border-dark"
//                   )}
//                   animateInClassName="animate-fade-in"
//                 >
//                   <DisclosureButton className="flex items-center space-x-4 text-start p-4 tablet:p-8">
//                     <span className="flex-1 text-xl font-medium tablet:text-2xl">
//                       {faq.title}
//                     </span>
//                     <MdAddCircle
//                       className={clsx("text-3xl text-black dark:text-slate", {
//                         "transition-all rotate-45": open,
//                       })}
//                     />
//                   </DisclosureButton>
//                   <DisclosurePanel
//                     transition
//                     className="origin-top transition ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 text-black/50 p-4 tablet:px-8 dark:text-white/75"
//                   >
//                     {faq.description}
//                   </DisclosurePanel>
//                 </InView>
//               )}
//             </Disclosure>
//           ))}
//         </div>
//       </section>
//     );
//   },
//   {
//     title: "FaqSection",
//     argsType: {
//       faqs: {
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
//       faqs: [
//         {
//           title: "What is Zeroboost?",
//           description:
//             "Zeroboost is an innovative trading platform that allows users to speculate on the rise and fall of major cryptocurrencies and meme tokens. The platform offers advanced features like trading futures without selling your assets, staking in strategy vaults, and beginning trading with no minimums and low fees.",
//         },
//         {
//           title: "What are Strategy Vaults, and how do they work?",
//           description:
//             "Strategy Vaults are passive investment tools that offer optimized returns in various market conditions,",
//         },
//         {
//           title: "What kinds of assets can I trade on Zeroboost?",
//           description:
//             "Zeroboost focuses on major cryptocurrencies and meme tokens, giving you a wide range of options to speculate on.",
//         },
//         {
//           title: "How can I start trading?",
//           description:
//             "With simple onboarding, low entry barriers, and features like strategy vaults, Zeroboost is designed to be user-friendly for beginners while offering advanced tools for seasoned traders.",
//         },
//         {
//           title: "What's the minimum amount needed to start trading?",
//           description:
//             "Zeroboost has no trade minimums, making it accessible for all users, regardless of their starting capital. Additionally, the platform offers low fees, ensuring that trading remains cost-effective for beginners and experienced traders alike.",
//         },
//         {
//           title: "How secure is Zeroboost?",
//           description:
//             "Zeroboost prioritizes the safety of your assets and employs state-of-the-art security measures, including robust encryption and secure smart contract protocols.",
//         },
//       ],
//     },
//   }
// );

// import { block } from "saitamadotfun/bunshi";

// export default block(
//   function TokenomicsSection({ cards }) {
//     return (
//       <div className="py-10">
//         {/* Title */}
//         <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-gold uppercase mb-10">
//           Tokenomics
//         </h2>

//         {/* Cards Container */}
//         <div className="flex flex-wrap justify-center gap-6">
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className={`w-72 sm:w-80 md:w-96 p-6 rounded-lg shadow-lg border-2 border-${card.borderColor}-500 bg-${card.backgroundColor}-100`}
//             >
//               {/* Car Image */}
//               <img
//                 src={card.image.uri}
//                 alt={card.image.metadata?.alt}
//                 className="w-full h-40 object-cover rounded-lg mb-4"
//               />
//               {/* Text */}
//               <h3 className={`text-${card.textColor}-600 font-bold text-lg mb-2`}>
//                 {card.title}
//               </h3>
//               <p className="text-gray-700">{card.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   },
//   {
//     argsType: {
//       cards: {
//         control: "list",
//         schema: {
//           title: { control: "input" },
//           description: { control: "input" },
//           image: { control: "asset" },
//           backgroundColor: { control: "color" },
//           textColor: { control: "color" },
//           borderColor: { control: "color" },
//         },
//       },
//     },

//     args: {
//       cards: [
//         {
//           title: "Burn 1M Tokens",
//           description: "One million tokens will be burnt.",
//           image: {
//             uri: "/car-green.png",
//             metadata: { alt: "Green Car" },
//           },
//           backgroundColor: "green",
//           textColor: "green",
//           borderColor: "green",
//         },
//         {
//           title: "Burn 1M Tokens",
//           description: "One million tokens will be burnt.",
//           image: {
//             uri: "/car-yellow.png",
//             metadata: { alt: "Yellow Car" },
//           },
//           backgroundColor: "yellow",
//           textColor: "yellow",
//           borderColor: "yellow",
//         },
//         {
//           title: "Burn 1M Tokens",
//           description: "One million tokens will be burnt.",
//           image: {
//             uri: "/car-red.png",
//             metadata: { alt: "Red Car" },
//           },
//           backgroundColor: "red",
//           textColor: "red",
//           borderColor: "red",
//         },
//       ],
//     },
//   }
// );

// import { block } from "saitamadotfun/bunshi";

// export default block(
//   function TokenomicsSection({ cards }) {
//     return (
//       <div className="py-10">
//         {/* Title */}
//         <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-gold uppercase mb-10">
//           Tokenomics
//         </h2>

//         {/* Cards Container */}
//         <div className="flex flex-wrap justify-center gap-6">
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className={`w-72 sm:w-80 md:w-96 p-6 rounded-lg shadow-lg border-2 border-${card.borderColor}-500 bg-${card.backgroundColor}-100`}
//             >
//               {/* Card Image */}
//               <img
//                 src={card.image.uri}
//                 alt={card.image.metadata?.alt || "Card Image"}
//                 className="w-full h-40 object-cover rounded-lg mb-4"
//               />
//               {/* Card Title */}
//               <h3
//                 className={`text-${card.textColor}-600 font-bold text-lg mb-2`}
//               >
//                 {card.title}
//               </h3>
//               {/* Card Description */}
//               <p className="text-gray-700">{card.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   },
//   {
//     argsType: {
//       cards: {
//         control: "list",
//         schema: {
//           title: { control: "input" },
//           description: { control: "input" },
//           image: {
//             control: "map",
//             schema: {
//               uri: { control: "asset" },
//               metadata: {
//                 control: "map",
//                 schema: {
//                   alt: { control: "input" },
//                 },
//               },
//             },
//           },
//           backgroundColor: { control: "color" },
//           textColor: { control: "color" },
//           borderColor: { control: "color" },
//         },
//       },
//     },

//     args: {
//       cards: [
//         {
//           title: "Burn 1M Tokens",
//           description: "One million tokens will be burnt.",
//           image: {
//             uri: "/car-green.png",
//             metadata: { alt: "Green Car" },
//           },
//           backgroundColor: "green",
//           textColor: "green",
//           borderColor: "green",
//         },
//         {
//           title: "Burn 1M Tokens",
//           description: "One million tokens will be burnt.",
//           image: {
//             uri: "/car-yellow.png",
//             metadata: { alt: "Yellow Car" },
//           },
//           backgroundColor: "yellow",
//           textColor: "yellow",
//           borderColor: "yellow",
//         },
//         {
//           title: "Burn 1M Tokens",
//           description: "One million tokens will be burnt.",
//           image: {
//             uri: "/car-red.png",
//             metadata: { alt: "Red Car" },
//           },
//           backgroundColor: "red",
//           textColor: "red",
//           borderColor: "red",
//         },
//       ],
//     },
//   }
// );

// import { block } from "saitamadotfun/bunshi";

// export default block(
//   function TokenomicsSection({ cards }) {
//     return (
//       <div className="py-10">
//         {/* Title */}
//         <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-gold uppercase mb-10">
//           Tokenomics
//         </h2>

//         {/* Cards Container */}
//         <div className="flex flex-wrap justify-center gap-6">
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className={`w-72 sm:w-80 md:w-96 p-6 rounded-lg shadow-lg border-2 border-${card.borderColor}-500 bg-${card.backgroundColor}-100`}
//             >
//               {/* Card Image */}
//               <img
//                 src={card.image.uri}
//                 alt={card.image.metadata?.alt || "Card Image"}
//                 className="w-full h-40 object-cover rounded-lg mb-4"
//               />
//               {/* Card Title */}
//               <h3
//                 className={`text-${card.textColor}-600 font-bold text-lg mb-2`}
//               >
//                 {card.title}
//               </h3>
//               {/* Card Description */}
//               <p className="text-gray-700">{card.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   },
//   {
//     argsType: {
//       cards: {
//         control: "list",
//         items: [
//           {
//             control: "map",
//             title: (props: { title: string }) => props.title,
//             keys: {
//               title: { control: "input" },
//               description: { control: "input" },
//               image: {
//                 control: "map",
//                 keys: {
//                   uri: { control: "asset" },
//                   metadata: {
//                     control: "map",
//                     keys: {
//                       alt: { control: "input" },
//                     },
//                   },
//                 },
//               },
//               backgroundColor: { control: "color" },
//               textColor: { control: "color" },
//               borderColor: { control: "color" },
//             },
//           },
//         ],
//       },
//     },

//     args: {
//       cards: [
//         {
//           title: "Burn 1M Tokens",
//           description: "One million tokens will be burnt.",
//           image: {
//             uri: "/car-green.png",
//             metadata: { alt: "Green Car" },
//           },
//           backgroundColor: "green",
//           textColor: "green",
//           borderColor: "green",
//         },
//         {
//           title: "Burn 1M Tokens",
//           description: "One million tokens will be burnt.",
//           image: {
//             uri: "/car-yellow.png",
//             metadata: { alt: "Yellow Car" },
//           },
//           backgroundColor: "yellow",
//           textColor: "yellow",
//           borderColor: "yellow",
//         },
//         {
//           title: "Burn 1M Tokens",
//           description: "One million tokens will be burnt.",
//           image: {
//             uri: "/car-red.png",
//             metadata: { alt: "Red Car" },
//           },
//           backgroundColor: "red",
//           textColor: "red",
//           borderColor: "red",
//         },
//       ],
//     },
//   }
// );

// import { block } from "saitamadotfun/bunshi";

// export default block(
//   function TokenomicsSection({ cards }: { cards: Card[] }) {
//     return (
//       <div className="py-10">
//         {/* Title */}
//         <h2 className="text-left text-xl md:text-2xl lg:text-3xl font-bold text-[#C99B18] uppercase mb-10">
//           Tokenomics
//         </h2>

//         {/* Cards Container */}
//         <div className="flex flex-wrap justify-between gap-6">
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className={`w-70 sm:w-80 md:w-96 p-6 rounded-lg shadow-lg border-2 border-${card.borderColor} bg-${card.backgroundColor}-500`}
//             >
//               {/* Card Image */}
//               <img
//                 src={card.image.uri}
//                 alt={card.image.metadata?.alt || "Card Image"}
//                 className="w-full h-40 object-cover rounded-lg mb-4"
//               />
//               {/* Card Title */}
//               <h3
//                 className={`text-${card.textColor} font-car-marker font-infinite font-bold text-lg mb-2`}
//               >
//                 {card.title}
//               </h3>
//               {/* Card Description */}

//               <p className="text-gray-700">{card.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   },
//   {
//     argsType: {
//       cards: {
//         control: "list",
//         items: [
//           {
//             control: "map",
//             title: (props: { title: string }) => props.title,
//             keys: {
//               title: { control: "input" },
//               description: { control: "input" },
//               image: {
//                 control: "map",
//                 keys: {
//                   uri: { control: "input" }, // Ensure 'uri' is treated as a string
//                   metadata: {
//                     control: "map",
//                     keys: {
//                       alt: { control: "input" },
//                     },
//                   },
//                 },
//               },
//               backgroundColor: { control: "color" },
//               textColor: { control: "color" },
//               borderColor: { control: "color" },
//             },
//           },
//         ],
//       },
//     },

//     args: {
//       cards: [
//         {
//           title: "Burn 1M Tokens",
//           description: "One million tokens will be burnt.",
//           image: {
//             uri: "/car-green.png",
//             metadata: { alt: "Green Car" },
//           },
//           backgroundColor: "green",
//           textColor: "#5DAA5B",
//           borderColor: "#5DAA5B",
//         },

//         {
//           title: "Burn 1M Tokens",
//           description: "One million tokens will be burnt.",
//           image: {
//             uri: "/car-yellow.png",
//             metadata: { alt: "Yellow Car" },
//           },
//           backgroundColor: "yellow",
//           textColor: "yellow",
//           borderColor: "yellow",
//         },
//         {
//           title: "Burn 1M Tokens",
//           description: "One million tokens will be burnt.",
//           image: {
//             uri: "/il_race_red_car.png",
//             metadata: { alt: "Red Car" },
//           },
//           backgroundColor: "red",
//           textColor: "red",
//           borderColor: "red",
//         },
//       ],
//     },
//   }
// );

// // Define TypeScript types
// type Card = {
//   title: string;
//   description: string;
//   image: {
//     uri: string; // Ensure 'uri' is typed as a string
//     metadata?: {
//       alt?: string;
//     };
//   };
//   backgroundColor: string;
//   textColor: string;
//   borderColor: string;
// };

import { block } from "saitamadotfun/bunshi";

export default block(
  function TokenomicsSection({ cards }: { cards: Card[] }) {
    return (
      <div className="py-10">
        <h2 className="text-left text-xl md:text-2xl lg:text-3xl font-bold text-[#C99B18] uppercase mb-10">
          Tokenomics
        </h2>

        <div className="flex flex-wrap justify-between gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-70 sm:w-80 md:w-96 rounded-lg shadow-lg border-2"
              style={{
                borderColor: card.borderColor,
                backgroundColor: card.backgroundColor,
              }}
            >
              <div style={{ backgroundColor: card.partialBackgroundColor }}>
                <h3
                  className=" font-race-sport  font-infinite font-bold text-lg mb-2"
                  style={{ color: card.textColor }}
                >
                  {card.title}
                </h3>
                <img
                  src={card.image.uri}
                  alt={card.image.metadata?.alt || "Card Image"}
                  className="w-full object-cover rounded-lg mb-4"
                />
              </div>

              <div>
                <p className="text-white p-8">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
  {
    argsType: {
      cards: {
        control: "list",
        items: [
          {
            control: "map",
            title: (props: { title: string }) => props.title,
            keys: {
              title: { control: "input" },
              description: { control: "input" },
              image: {
                control: "map",
                keys: {
                  uri: { control: "input" },
                  metadata: {
                    control: "map",
                    keys: {
                      alt: { control: "input" },
                    },
                  },
                },
              },
              backgroundColor: { control: "color" },
              textColor: { control: "color" },
              borderColor: { control: "color" },
              partialBackgroundColor: { control: "color" },
            },
          },
        ],
      },
    },
    args: {
      cards: [
        {
          title: "Burn 1M  Tokens",
          description: "One million tokens will be burnt.",
          image: {
            uri: "/car-green.png",
            metadata: { alt: "Green Car" },
          },
          backgroundColor: "#5DAA5B",
          textColor: "#5DAA5B",
          borderColor: "#C3E6CB",
          partialBackgroundColor: "#D1F3D0",
        },
        {
          title: "Burn 1M Tokens",
          description: "One million tokens will be burnt.",
          image: {
            uri: "/car-yellow.png",
            metadata: { alt: "Yellow Car" },
          },
          backgroundColor: "#DDB10A",
          textColor: "#DDB10A",
          borderColor: "#DDB10A",
          partialBackgroundColor: "#FFF0B5",
        },
        {
          title: "Burn 1M Tokens",
          description: "One million tokens will be burnt.",
          image: {
            uri: "/car-red.png",
            metadata: { alt: "Red Car" },
          },
          backgroundColor: "#D0361F",
          textColor: "#D0361F",
          borderColor: "#D0361F",
          partialBackgroundColor: "#FFCCC7",
        },
      ],
    },
  }
);

type Card = {
  title: string;
  description: string;
  image: {
    uri: string;
    metadata?: {
      alt?: string;
    };
  };
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  partialBackgroundColor: string;
};
