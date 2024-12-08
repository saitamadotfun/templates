import Image from "next/image";
import { block } from "saitamadotfun/bunshi";
import { Asset } from "saitamadotfun/sdk";

export default block(
  function FeatureSection({ features }) {
    return (
      <section className="relative flex flex-col space-y-8">
        <div className="flex snap-x overflow-x-scroll flex-nowrap px-8 phone:flex-col phone:space-y-4 tablet:space-x-4 justify-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className={
                "shrink-0 snap-center flex flex-col space-y-4  p-4 rounded-xl backdrop-blur-3xl bg-gradient-to-r bg-secondary-alpha bg-black/10  border-gradient cursor-pointer hover:!bg-gradient-to-b hover:!from-secondary hover:!to-primary tablet:max-w-md tablet:px-8"
              }
            >
              <div className="flex-1 flex flex-col space-y-4">
                <Image
                  width={32}
                  height={32}
                  src={feature.icon.uri}
                  alt={feature.icon.metadata?.alt ?? feature.title}
                />
                <div className="flex-1 flex flex-col space-y-4">
                  <h1 className="text-2xl font-medium">{feature.title}</h1>
                  <p className="text-sm text-white/80 whitespace-pre-line capitalize">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="-z-30 absolute top-64 self-center w-xl h-xl bg-secondary-alpha-30 rounded-full blur-3xl tablet:w-sm tablet:h-sm tablet:top-24" />
      </section>
    );
  },
  {
    title: "FeatureSection",
    argsType: {
      features: {
        control: "list",
        items: [
          {
            control: "map",
            title: ({ title, icon }: { title: string; icon: Asset }) => (
              <div className="flex items-center space-x-2">
                {icon && (
                  <Image
                    src={icon.uri}
                    width={24}
                    height={24}
                    alt={icon.metadata?.alt}
                    className="bg-black rounded shadow-sm"
                  />
                )}
                <span>{title}</span>
              </div>
            ),
            keys: {
              icon: { control: "asset" },
              title: { control: "input" },
              description: { control: "input", inputType: "textarea" },
            },
          },
        ],
      },
    },
    args: {
      features: [
        {
          icon: {
            uri: "/icons/ic_users.png",
            metadata: {
              alt: "Users",
            },
          },
          title: "Personal",
          description:
            "Users can easily transfer cryptocurrencies to their contacts using the platform",
        },
        {
          icon: {
            uri: "/icons/ic_communities.png",
            metadata: {
              alt: "Communities",
            },
          },
          title: "Community",
          description:
            "Community managers and project managers can use this bot to\
          randomly tip their community members, Perhaps during games or when\
          tasks are completed",
        },
        {
          icon: {
            uri: "/icons/ic_organisation.png",
            metadata: {
              alt: "Organisation",
            },
          },
          title: "Organisation",
          description:
            "Organisations can use TekBot to pay salaries and reward workers during award events",
        },
      ],
    },
  }
);
