// "use client";

import { block } from "saitamadotfun/bunshi";
import Image from "next/image";
import clsx from "clsx";

// import { block } from "saitamadotfun/bunshi";

// import Image from "next/image";
// import Link from "next/link";
// import { block } from "saitamadotfun/bunshi";
// import { RiMenuFill } from "react-icons/ri";
// import { MdArrowOutward } from "react-icons/md";
// import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";

// import { IcZeroboost } from "@/assets";

// export default block(
//   function Header({ navigations, logo, callAction }) {
//     return (
//       <header className="relative flex items-center px-4">
//         <Link
//           href="/"
//           className="flex-1"
//         >
//           <Image
//             src={IcZeroboost}
//             alt={logo.metadata.alt}
//             width={72}
//             height={72}
//           />
//         </Link>
//         <div className="flex phone:hidden">
//           {navigations.map((navigation, index) => (
//             <Link
//               key={index}
//               href={navigation.path}
//               className="flex items-center space-x-2 text-black/75  p-2 hover:text-black  dark:text-white/75 dark:hover:text-white"
//             >
//               {navigation.name}
//             </Link>
//           ))}
//           <Link
//             href={callAction.href}
//             target="_blank"
//             className="flex items-center space-x-2 border-2 border-primary text-primary px-4 py-2 mx-4 rounded-md hover:bg-primary-alpha"
//           >
//             <span>{callAction.name}</span>
//             <MdArrowOutward />
//           </Link>
//         </div>
//         <Menu
//           as="div"
//           className="tablet:hidden"
//         >
//           <MenuButton>
//             <RiMenuFill className="text-2xl" />
//           </MenuButton>
//           <MenuItems className="min-w-24 absolute right-4 top-16 flex flex-col bg-dark-700 p-2 rounded">
//             {[
//               ...navigations,
//               { name: callAction.name, path: callAction.href },
//             ].map((navigation, index) => (
//               <MenuItem
//                 key={index}
//                 as="button"
//                 className="text-start p-2 text-white/75 hover:bg-primary hover:text-black hover:rounded"
//               >
//                 {navigation.name}
//               </MenuItem>
//             ))}
//           </MenuItems>
//         </Menu>
//       </header>
//     );
//   },
//   {
//     title: "Header",
//     argsType: {
//       logo: { control: "asset" },
//       callAction: {
//         control: "map",
//         keys: {
//           name: { control: "input" },
//           href: { control: "input" },
//         },
//       },
//       navigations: {
//         control: "list",
//         items: [
//           {
//             control: "map",
//             title: (props: { name: string }) => props.name,
//             keys: {
//               name: { control: "input" },
//               path: { control: "input" },
//             },
//           },
//         ],
//       },
//     },
//     args: {
//       logo: {
//         uri: "",
//         metadata: {
//           alt: "Zeroboost",
//         },
//       },
//       callAction: {
//         name: "Launch App",
//         href: "",
//       },
//       navigations: [
//         { name: "Blog", path: "/" },
//         { name: "Docs", path: "/" },
//       ],
//     },
//   }
// );

export default block(
  function Header({ icon, socials, ctaText }) {
    return (
      <header className="flex my-4 items-center justify-between rounded-full mx-auto max-w-5xl bg-transparent text-black border border-b-8 border-black p-2">
        <Image
          src={icon.uri}
          alt={icon.metadata?.alt}
          width={64}
          height={64}
        />

        <div className="flex bg-[#FFCA00] px-4 w-10 h-10 items-center justify-center rounded-full  ">
          {socials.map((social, index) => (
            <div
              key={index}
              className={clsx(
                social.icon,
                "border bg-amber-500 rounded-full border-b-8 p-2 rounded-md"
              )}
            />
          ))}
        </div>

        <button className=" rounded-full px-6 border border-black py-2 bg-[#FFCA00] text-black font-bold-marker">
          {ctaText}
        </button>
      </header>
    );
  },

  {
    argsType: {
      icon: {
        control: "asset",
      },

      socials: {
        control: "list",
        items: [
          {
            control: "map",
            keys: {
              icon: {
                control: "select",
                variants: [
                  { value: "i-fa-brands:twitter", title: "Twitter" },
                  { value: "i-fa-brands:telegram", title: "Telegram" },
                ],
              },
              href: { control: "input" },
            },
          },
        ],
      },

      ctaText: {
        control: "input",
      },
    },
    args: {
      icon: {
        uri: "/RB.png",
        metadata: {
          alt: "",
        },
      },

      socials: [
        {
          icon: "i-fa-brands:twitter",
          href: "",
        },

        {
          icon: "i-fa-brands:telegram",
          href: "",
        },
      ],

      ctaText: "Buy Now",
    },
  }
);
