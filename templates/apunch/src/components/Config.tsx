"use client";
import { block } from "saitamadotfun/bunshi";
import { toCustomPropertiesString } from "object-to-css-variables";

export default block(
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
          default: "#FFCA00",
          alpha: "#FFF6D6",
        },
        inverse: {
          default: "#FFF9E4",
          alpha: "#FFFFFF",
        },
      },
    },
  }
);
