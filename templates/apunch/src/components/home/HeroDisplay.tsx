import Link from "next/link";
import { block } from "saitamadotfun/bunshi";

export default block(
  function HeroDisplay({ title, description, illustration, action }) {
    return (
      <div className="relative flex h-2xl bg-black tablet:h-4xl">
        <div className="size-xs absolute -left-24 bottom-0 bg-inverse opacity-50 blur-[128px] rounded-full tablet:size-lg" />
        <div className="mx-auto w-9/10 relative flex p-4 desktop:w-7/11">
          <div className="max-w-xl flex flex-col space-y-8 py-32 z-10 laptop:max-w-2xl">
            <div className="flex flex-col space-y-8">
              <h1 className="text-2xl font-bold-marker">{title}</h1>
              <p className="text-white/75 tracking-wide">{description}</p>
            </div>
            <Link
              href={action.href}
              className="self-start btn-primary"
            >
              {action.name}
            </Link>
          </div>
          <img
            src={illustration.uri}
            alt={illustration.metadata?.alt}
            width={512}
            height={512}
            className="absolute right-0 -top-16 phone:absolute phone:-top-32 phone:-right-32"
          />
        </div>
      </div>
    );
  },
  {
    title: "HeroDisplay",
    argsType: {
      title: { control: "input" },
      description: { control: "input", inputType: "textarea", },
      illustration: { control: "asset" },
      action: {
        control: "map",
        keys: {
          name: { control: "input" },
          href: { control: "input", description: "Link to" },
        },
      },
    },
    args: {
      title: "In a punch",
      description:
        "Saitama is the main protagonist of the anime and manga series\
        One Punch Man, created by ONE. He is a hero who can defeat any \
        opponent with a single punch, leading to a lack of challenge and\
        excitement in his life. Known for his unassuming bald appearance \
        and simple personality, Saitama began his hero journey as a hobby \
        after intense training that left him overwhelmingly strong. Despite\
        his unmatched power, he remains humble, often struggling to gain \
        recognition in the Hero Association. His character blends humor, \
        satire, and action, making him a unique and beloved figure in modern anime.",
      illustration: {
        uri: "/il_satama_stand.png",
        metadata: {
          alt: "Sataima",
        },
      },
      action: {
        name: "Buy now",
        href: "",
      },
    },
  }
);
