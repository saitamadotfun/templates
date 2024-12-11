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
            },
          },
          inverse: {
            control: "map",
            description: "Primary color inverse. This will be used for texts.",

            keys: {
              default: { control: "color" },
            },
          },
          secondary: {
            control: "map",
            description:
              "Secondary color. This will be used for secondary backgrounds",
            keys: {
              default: { control: "color" },
            },
          },
          tetiary: {
            control: "map",
            description:
              "Tetiary color. This will be used for tetiary backgrounds",
            keys: {
              default: { control: "color" },
            },
          },
        },
      },
    },
    args: {
      theme: {
        primary: {
          default: "#B2E2F9",
        },
        inverse: {
          default: "#000000",
          alpha: "#FFFFFF",
        },
        secondary: {
          default: "#DF533A",
        },
        alpha: {
          default: "#000000",
        },
        tetiary: {
          default: "#000000",
        },
      },
    },
  }
);
