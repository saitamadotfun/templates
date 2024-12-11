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
              light: {
                control: "map",
                keys: {
                  default: { control: "color" },
                  alpha50: { control: "color" },
                  alpha70: { control: "color" },
                },
              },
              dark: {
                control: "map",
                keys: {
                  default: { control: "color" },
                  alpha50: { control: "color" },
                  alpha70: { control: "color" },
                },
              },
            },
          },
        },
      },
    },
    args: {
      theme: {
        primary: {
          light: {
            default: "#F8B40B",
            alpha50: "rgba(248,180,11,0.5)",
            alpha70: "rgba(248,180,11,0.7)",
          },
          dark: {
            default: "#F8B40B",
            alpha50: "rgba(232,144,46,0.5)",
            alpha70: "rgba(232,144,46,0.7)",
          },
        },
      },
    },
  }
);
