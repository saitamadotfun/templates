import clsx from "clsx";
import Link from "next/link";
import { MdClose } from "react-icons/md";

import { block } from "saitamadotfun/bunshi";

type LayoutNavigationProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const Block = block(
  function LayoutNavigation({ socials, action, ...props }) {
    const { show, setShow } = props as LayoutNavigationProps;
    return (
      <nav
        className={clsx(
          "flex-1 fixed inset-0 bg-black/50 tablet:static tablet:flex tablet:items-center tablet:bg-transparent",
          show ? "flex" : "hidden tablet:flex"
        )}
      >
        <div className="flex-1 flex flex-col bg-black text-white w-2/3 h-full tablet:flex-row tablet:bg-transparent tablet:text-black">
          <div className="flex flex-col md:hidden">
            <button
              className="self-end p-4"
              onClick={() => setShow(false)}
            >
              <MdClose className="text-xl" />
            </button>
          </div>
          <div className="flex phone:flex-col tablet:flex-1 tablet:items-center tablet:justify-center tablet:space-x-4">
            {socials.map((social, index) => (
              <Link
                href={social.href}
                key={index}
                className="p-4"
              >
                {social.name}
              </Link>
            ))}
          </div>
          <Link
            href={action.href}
            className="self-start btn btn-primary tablet:self-auto"
          >
            {action.text}
          </Link>
        </div>
      </nav>
    );
  },
  {
    argsType: {
      socials: {
        control: "list",
        items: [
          {
            control: "map",
            title: ({ name }: { name: string }) => <>{name}</>,
            keys: { name: { control: "input" }, href: { control: "input" } },
          },
        ],
      },
      action: {
        control: "map",
        keys: {
          text: { control: "input" },
          href: { control: "input" },
        },
      },
    },
    args: {
      socials: [
        {
          name: "Telegram",
          href: "https://t.me/fliedlicetoken",
        },
        {
          name: "Twitter",
          href: "https://x.com/FliedLicetoken",
        },
        {
          name: "DexTools",
          href: "https://dexscreener.com/ethereum/0x22dA3dCbCEC36947De7C7aD3d3CA138E6d37f27d",
        },
      ],
      action: {
        text: "Buy Now",
        href: "https://dexscreener.com/ethereum/0x22dA3dCbCEC36947De7C7aD3d3CA138E6d37f27d",
      },
    },
  }
);

const LayoutNavigation = (
  props: LayoutNavigationProps & React.ComponentProps<typeof Block>
) => <Block {...props} />;

export default Object.assign(LayoutNavigation, {
  args: Block.args,
  argsType: Block.argsType,
}) as typeof LayoutNavigation & typeof Block;
