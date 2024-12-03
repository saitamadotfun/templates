"use client";
import Image from "next/image";
import { block } from "saitamadotfun/bunshi";
import type { Asset } from "saitamadotfun/sdk";

export const FeatureSection = block(
  function FeatureSection({ features }) {
    return (
      <section className="grid gap-4 phone:grid-cols-1 tablet:self-center tablet:grid-cols-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex phone:flex-col phone:space-y-2 tablet:space-x-2"
          >
            <div>
              {feature && feature.illustration && (
                <Image
                  src={feature?.illustration?.uri}
                  alt={feature?.illustration?.metadata?.alt}
                  width={256}
                  height={256}
                  className="phone:w-full phone:h-xs rounded-md"
                />
              )}
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-medium">{feature.title}</h1>
              <p className="text-black/75">{feature.description}</p>
            </div>
          </div>
        ))}
      </section>
    );
  },
  {
    title: "Feature Section",
    argsType: {
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
      features: [],
    },
  }
);
