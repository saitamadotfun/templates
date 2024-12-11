"use client";
import Image from "next/image";
import { block } from "saitamadotfun/bunshi";
import type { Asset } from "saitamadotfun/sdk";

export const FeatureSection = block(
  function FeatureSection({ features }) {
    return (
      <section className="flex flex-col space-y-8 phone:px-4 tablet:px-16">
        <div className="grid gap-4 phone:px-4 phone:grid-cols-1 tablet:self-center tablet:grid-cols-2 tablet:px-16 desktop:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex min-h-32 p-2 rounded-md phone:flex-col phone:space-y-2 tablet:space-x-2"
            >
              {feature && feature.illustration && feature.illustration.uri && (
                <div>
                  <Image
                    src={feature?.illustration?.uri}
                    alt={feature?.illustration?.metadata?.alt}
                    width={256}
                    height={256}
                    className="phone:w-full phone:h-xs rounded-md"
                  />
                </div>
              )}
              <div className="flex flex-col">
                <h1 className="text-xl font-medium">{feature.title}</h1>
                <p className="text-black/75">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  },
  {
    title: "Feature Section",
    argsType: {
      title: { control: "input" },
      features: {
        control: "list",
        items: [
          {
            title: (props: {
              illustration: Asset;
              title: string;
              description: string;
            }) => (
              <div>
                {props.illustration && (
                  <Image
                    src={props.illustration.uri}
                    alt={props.illustration.metadata?.alt}
                    width={24}
                    height={24}
                  />
                )}
                <div className="flex flex-col">
                  <p className="text-base font-medium">{props.title}</p>
                  <p className="text-xs line-clamp-1 truncate text-black/75">
                    {props.description}
                  </p>
                </div>
              </div>
            ),

            control: "map",
            keys: {
              illustration: {
                control: "asset",
              },
              title: {
                control: "input",
              },
              description: {
                control: "input",
                inputType: "textarea",
              },
            },
          },
        ],
      },
    },
    args: {
      title: "Challenges in Customer Support Today",
      features: [
        {
          illustration: {
            uri: "",
            metadata: {},
          },
          title: "AI-Driven Support for Businesses",
          description:
            "Offer businesses automated, 24/7 customer assistance powered by advanced AI.",
        },
        {
          illustration: {
            uri: "",
            metadata: {},
          },
          title: "Multi-Channel Communication",
          description:
            "Enable customer support through calls, SMS, and web-based SDKs tailored to the business's needs.",
        },
        {
          illustration: {
            uri: "",
            metadata: {},
          },
          title: "Decentralized Framework",
          description:
            "Leverage blockchain to ensure data security, transparency, and accountability. ",
        },
        {
          illustration: {
            uri: "",
            metadata: {},
          },
          title: "Cost Efficiency",
          description:
            "Reduce operational costs by automating repetitive support tasks with AI. ",
        },
      ],
    },
  }
);
