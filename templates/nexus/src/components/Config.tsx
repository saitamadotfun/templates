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
              alpha10: { control: "color" },
              alpha25: { control: "color" },
              alpha50: { control: "color" },
              alpha75: { control: "color" },
            },
          },
          secondary: {
            control: "map",
            description: "Secondary color. This will be used for backgrounds",
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
        },
      },
    },
    args: {
      theme: {
        primary: {
          default: "#5CA47A",
          alpha10: "rgba(92,164,122,0.1)",
          alpha25: "rgba(92,164,122,0.25)",
          alpha50: "rgba(92,164,122,0.5)",
          alpha75: "rgba(92,164,122,0.75)",
        },
        secondary: {
          default: "#201E1E",
        },
        inverse: {
          default: "#FFFFFF",
        },
      },
    },
  }
);
