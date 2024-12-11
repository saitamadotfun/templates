import Image from "next/image";
import Link from "next/link";
import { MdArrowUpward } from "react-icons/md";
import { block } from "saitamadotfun/bunshi";

export default block(
  function TokenomicSection({ tokenomics, contractAddress, dexscreener }) {
    return (
      <footer className="p-8 flex flex-col space-y-8 md:w-[32em] md:self-center md:p-16">
        <div className="flex-col space-y-8 md:w-[36em] md:self-center ">
          <div className="flex flex-col space-y-4">
            {tokenomics.map((tokenomic, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gradient-to-r from-primary-dark-50 to-primary-light-50 border border-primary-dark rounded-md"
              >
                <h1 className="flex-1 text-xl">{tokenomic.name}</h1>
                <p className="text-xl font-extrabold">{tokenomic.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="self-center flex flex-col space-y-4">
          <Link
            target="_blank"
            href={dexscreener.href}
            className="flex space-x-1 bg-black text-white text-xs text-center rounded-full px-2 py-1 items-center justify-center"
          >
            <Image
              src="/dexscreener.png"
              width={16}
              height={16}
              alt="dexscreener"
            />
            <p className="truncate">{contractAddress}</p>
            <MdArrowUpward className="rotate-45 text-lg" />
          </Link>
          <div className="self-center">
            <p className="text-center">ca: {contractAddress}</p>
          </div>
        </div>
      </footer>
    );
  },
  {
    title: "Tokenomic Section",
    argsType: {
      tokenomics: {
        control: "list",
        items: [
          {
            control: "map",
            title: ({ name }: { name: string }) => (
              <p className="truncate line-clamp-1">{name}</p>
            ),
            keys: {
              name: { control: "input" },
              value: { control: "input" },
            },
          },
        ],
      },
      contractAddress: {
        title: "Contract Address",
        control: "input",
      },
      dexscreener: {
        control: "map",
        keys: {
          href: { control: "input" },
        },
      },
    },
    args: {
      tokenomics: [
        {
          name: "Total Supply",
          value: "1B+",
        },
        {
          name: "Liquidity Token Burnt",
          value: "1M+",
        },
        {
          name: "Tax",
          value: "0/0",
        },
      ],
      contractAddress: "0x22dA3dCbCEC36947De7C7aD3d3CA138E6d37f27d",
      dexscreener: {
        href: "",
      },
    },
  }
);
