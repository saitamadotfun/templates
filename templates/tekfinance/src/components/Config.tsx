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
              alpha20: { control: "color" },
              alpha30: { control: "color" },
              alpha50: { control: "color" },
              alpha80: { control: "color" },
              alpha90: { control: "color" },
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
          secondary: {
            control: "map",
            description:
              "Secondary color. This will be used for secondary backgrounds",
            keys: {
              default: { control: "color" },
              alpha: { control: "color" },
              alpha20: { control: "color" },
              alpha30: { control: "color" },
              alpha50: { control: "color" },
              alpha80: { control: "color" },
              alpha90: { control: "color" },
            },
          },
        },
      },
    },
    args: {
      theme: {
        primary: {
          default: "#6AF2CE",
          alpha: "rgba(106,242,206,0.1)",
          alpha20: "rgba(106,242,206,0.2)",
          alpha30: "rgba(106,242,206,0.3)",
          alpha50: "rgba(106,242,206,0.5)",
          alpha80: "rgba(106,242,206,0.5)",
          alpha90: "rgba(106,242,206,0.5)",
        },
        inverse: {
          default: "#000000",
          alpha: "#FFFFFF",
        },
        secondary: {
          default: "#5607EC",
          alpha: "rgba(86,7,236,0.1)",
          alpha20: "rgba(86,7,236,0.2)",
          alpha30: "rgba(86,7,236,0.3)",
          alpha50: "rgba(86,7,236,0.5)",
          alpha80: "rgba(86,7,236,0.5)",
          alpha90: "rgba(86,7,236,0.5)",
        },
        border: {
          primary: "rgba(87, 7, 236, 0.5)",
          secondary: "#6AF2CE",
        },
      },
    },
  }
);
