import Image from "next/image";
import Link from "next/link";
import { block } from "saitamadotfun/bunshi";

export default block(
  function HeroSection({ title, subtitle, ca, callAction, mascot }) {
    return (
      <div className="flex flex-col space-y-8 tablet:flex-row tablet:space-y-0">
        <div className="flex-1 flex flex-col space-y-4 px-4 tablet:px-8">
          <div>
            <h1 className="text-4xl font-extrabold text-secondary">{title}</h1>
            <p>{subtitle}</p>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="text-sm text-black/50">
              <p>CA</p>
              {ca}
            </div>
            <Link
              href={callAction.href}
              target="_blank"
              className="self-start btn btn-primary"
            >
              {callAction.buttonText}
            </Link>
          </div>
        </div>
        <div>
          <Image
            src={mascot.uri}
            alt={mascot.metadata?.alt}
            width={512}
            height={512}
          />
        </div>
      </div>
    );
  },
  {
    title: "Hero Section",
    argsType: {
      title: { control: "input" },
      subtitle: { control: "input" },
      ca: { control: "input" },
      callAction: {
        control: "map",
        keys: {
          href: { control: "input" },
          buttonText: { control: "input" },
        },
      },
      mascot: {
        control: "asset",
      },
    },
    args: {
      title: "FliedLice",
      subtitle: "The Happiest Coin in the Crypto Bowl!",
      ca: "0x22dA3dCbCEC36947De7C7aD3d3CA138E6d37f27d",
      callAction: {
        href: "https://dexscreener.com/ethereum/0x22dA3dCbCEC36947De7C7aD3d3CA138E6d37f27d",
        buttonText: "Buy Now",
      },
      mascot: {
        uri: "/mascot.png",
        metadata: { alt: "FliedLice" },
      },
    },
  }
);
