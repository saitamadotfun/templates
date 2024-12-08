import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import { block } from "saitamadotfun/bunshi";

type DefaultNavigationProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
} & React.ComponentProps<typeof Navigation>;

const Component = (props: DefaultNavigationProps) => <Navigation {...props} />;

const Navigation = block(
  function DefaultNavigation({ logo, navigations, ...props }) {
    let { open, setOpen } = props as DefaultNavigationProps;

    return (
      <div className="flex-1 flex">
        <div
          className={clsx(
            "flex-1 phone:space-y-8 phone:fixed phone:inset-0 phone:bg-black phone:px-4",
            [
              open
                ? "phone:flex phone:flex-col animate-slide-in-up animate-duration-100"
                : "phone:hidden phone:pointer-events-none",
            ]
          )}
        >
          <header className="flex items-center tablet:hidden">
            <div className="flex-1">
              <Image
                className="w-16 h-16"
                src={logo.uri}
                alt={logo.metadata?.alt}
                width={256}
                height={256}
              />
            </div>
            <button className="p-4">
              <MdClose
                className="text-4xl"
                onClick={() => setOpen(false)}
              />
            </button>
          </header>
          <div className="flex phone:flex-col phone:space-y-8 tablet:items-center tablet:justify-center tablet:space-x-4">
            {navigations.map((navigation, index) => (
              <Link
                key={index}
                href={navigation.href}
                className="flex space-x-2 px-4 py-2 phone:text-center phone:font-medium tablet:hover:text-primary tablet:hover:text-white/50"
              >
                <span className="text-lg font-mono text-primary tablet:hidden">
                  0{index + 1}.
                </span>
                <span className="phone:text-2xl ">{navigation.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  },
  {
    argsType: {
      logo: {
        control: "asset",
      },
      navigations: {
        control: "list",
        items: [
          {
            control: "map",
            title: ({ name }: { name: string }) => <>{name}</>,
            keys: {
              name: { control: "input" },
              href: { control: "input" },
            },
          },
        ],
      },
    },
    args: {
      logo: {
        uri: "/icons/ic_logo.png",
        metadata: {
          alt: "Tekfinance",
        },
      },
      navigations: [
        {
          name: "Home",
          href: "/",
        },
        {
          name: "TekBot",
          href: "#tekbot",
        },
        {
          name: "About Us",
          href: "#about-us",
        },
      ],
    },
  }
);

export default Object.assign(Component, {
  args: Navigation.args,
  argsType: Navigation.argsType,
}) as unknown as typeof Component & typeof Navigation;
