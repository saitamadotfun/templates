import Link from "next/link";
import { block } from "saitamadotfun/bunshi";

export default block(
  function Header({ icon, navigations, socials }) {
    return (
      <header className="mx-auto py-2 z-10 phone:mx-4 tablet:w-4xl">
        <div className="flex items-center bg-white text-black border border-b-8 border-black border-b-primary p-2 rounded-md">
          <Link
            href="/"
            className="font-bold-marker text-2xl text-primary text-stroke-1.5 text-stroke-black md:text-3xl"
          >
            {icon}
          </Link>
          <div className="flex-1 flex items-center justify-center space-x-4">
            {navigations.map((navigation, index) => (
              <Link
                href={navigation.href}
                key={index}
                className="p-2 font-bold-marker text-base tablet:text-xl"
              >
                {navigation.name}
              </Link>
            ))}
          </div>

          <div className="flex space-x-2">
            {socials.map((social, index) => (
              <Link
                key={index}
                className="btn"
                href={social.href}
              >
                <div className={social.icon} />
              </Link>
            ))}
          </div>
        </div>
      </header>
    );
  },
  {
    title: "Header",
    argsType: {
      icon: {
        control: "input",
      },
      navigations: {
        control: "list",
        items: [
          {
            control: "map",
            title: (props: { name: string }) => <>{props.name} </>,
            keys: {
              name: { control: "input" },
              href: { control: "input" },
            },
          },
        ],
      },
      socials: {
        control: "list",
        items: [
          {
            control: "map",
            title: (props: { icon: string }) => (
              <div className={props.icon} />
            ),
            keys: {
              icon: {
                control: "select",
                variants: [
                  { value: "i-fa-brands:twitter", title: "Twitter" },
                  { value: "i-fa-brands:telegram", title: "Telegram" },
                  { value: "i-fa-brands:discord", title: "Discord" },
                ],
              },
              href: { control: "input" },
            },
          },
        ],
      },
    },
    args: {
      icon: "Saitama",
      navigations: [
        {
          name: "About",
          href: "#about",
        },
        {
          name: "How to buy",
          href: "#how-to-buy",
        },
      ],
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
    },
  }
);
