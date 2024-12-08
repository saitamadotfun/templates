import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { block } from "saitamadotfun/bunshi";

export default block(
  function Footer({ logo, motto, socials, footerText }) {
    return (
      <footer className="relative flex flex-col space-y-8 p-4 tablet:space-y-16  tablet:px-8">
        <div className="flex flex-col space-y-8 tablet:flex-row tablet:space-x-8 tablet:items-center">
          <div className="flex-1 flex flex-col space-y-8 phone:items-center phone:justify-center">
            <Image
              src={logo.uri}
              width={128}
              height={128}
              alt={logo.metadata?.alt}
            />
            <p
              className="text-lg phone:text-center"
              dangerouslySetInnerHTML={{ __html: motto }}
            />
          </div>
          <div className="self-center flex space-x-2">
            {socials.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                className="bg-dark p-4 rounded-full cursor-pointer"
              >
                <div className={clsx(social.icon, "text-xl")} />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-center">{footerText}</p>
        </div>
      </footer>
    );
  },
  {
    title: "Footer",
    argsType: {
      logo: {
        control: "asset",
      },
      motto: {
        control: "input",
        inputType: "textarea",
      },
      socials: {
        control: "list",
        items: [
          {
            control: "map",
            title: ({ icon }: { icon: string }) => (
              <div className={clsx(icon, "")} />
            ),
            keys: {
              href: {
                control: "input",
              },
              icon: {
                control: "select",
                variants: [
                  { title: "Telegram", value: "i-fa-brands:telegram" },
                  { title: "Twitter", value: "i-fa-brands:twitter" },
                  { title: "Discord", value: "i-fa-brands:discord" },
                ],
              },
            },
          },
        ],
      },
      footerText: {
        control: "input",
      },
    },
    args: {
      logo: {
        uri: "/images/logo.svg",
        metadata: {
          alt: "TekFinance",
        },
      },
      motto:
        "Building a sustainable Financial Reward <br className='phone:hidden' /> System On Solana",
      socials: [
        {
          icon: "i-fa-brands:telegram",
          href: "https://t.me/tekfinance",
        },
        {
          icon: "i-fa-brands:twitter",
          href: "https://x.com/tek_finance",
        },
      ],
      footerText: "© Build by TekFinance. All rights reserved.",
    },
  }
);
