import Link from "next/link";
import { block } from "saitamadotfun/bunshi";
import { MdArrowOutward } from "react-icons/md";

export default block(
  function TradeNow({ link }) {
    return (
      <Link
        href={link}
        className="self-center flex items-center space-x-4 border-2 border-primary p-1 rounded-full hover:bg-primary-alpha"
      >
        <div className="flex items-center space-x-2">
          <div className="bg-primary text-black px-3 py-1 rounded-full">
            Live
          </div>
          <p className="font-300">Trade Now</p>
        </div>
        <div className="px-2">
          <MdArrowOutward className="text-lg" />
        </div>
      </Link>
    );
  },
  {
    title: "TradeNow",
    argsType: { link: { control: "input" } },
    args: { link: "" },
  }
);
