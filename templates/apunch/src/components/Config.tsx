"use client";
import { block } from "saitamadotfun/bunshi";
import { toCustomPropertiesString } from "object-to-css-variables";

export const Config = block(
  function Config({ theme }) {
    return (
      <>
        <style
          dangerouslySetInnerHTML={{
            __html: `:root { ${toCustomPropertiesString(theme)} }`,
          }}
        />
      </>
    );
  },
  {
    title: "Config",
    argsType: {
      theme: {
        control: "map",
        keys: {
          primary: {
            control: "map",
            description: "Primary color. This will be used for backgrounds",
            keys: {
              default: { control: "color" },
              alpha: { control: "color" },
            },
          },
          inverse: {
            control: "map",
            description: "Primary color inverse. This will be used for texts.",

            keys: {
              default: { control: "color" },
              alpha: { control: "color" },
            },
          },
        },
      },
    },
    args: {
      theme: {
        primary: {
          default: "#84cc16",
          alpha: "rgba(132,204,22,0.2)",
        },
        inverse: {
          default: "#000000",
          alpha: "#FFFFFF",
        },
      },
    },
  }
);
