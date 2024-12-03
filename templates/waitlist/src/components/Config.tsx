"use client";
import { block } from "saitamadotfun/bunshi";
import { initializeApp, getApps } from "firebase/app";
import { toCustomPropertiesString } from "object-to-css-variables";

export const Config = block(
  function Config({ theme, firebase }) {
    const apps = getApps();
    if (apps.length === 0) initializeApp(firebase);

    return (
      <style
        dangerouslySetInnerHTML={{
          __html: `:root { ${toCustomPropertiesString(theme)} }`,
        }}
      />
    );
  },
  {
    title: "Config",
    argsType: {
      firebase: {
        control: "map",
        keys: {
          apiKey: { control: "input", description: "Firebase api key" },
          authDomain: { control: "input", description: "Firebase auth domain" },
          projectId: { control: "input", description: "Firebase project Id" },
          storageBucket: {
            control: "input",
            description: "Firebase storage bucket",
          },
          appId: { control: "input", description: "Firebase appId" },
          measurementId: {
            control: "input",
            description: "Firebase measurementId",
          },
        },
      },
      theme: {
        control: "map",
        keys: {
          primary: {
            control: "map",
            description: "Primary color. This will be used for backgrounds",
            keys: {
              default: {
                control: "color",
              },
              alpha: {
                control: "color",
              },
            },
          },
          inverse: {
            control: "color",
            description: "Primary color inverse. This will be used for texts.",
          },
        },
      },
    },
    args: {
      firebase: {
        appId: "",
        apiKey: "",
        authDomain: "",
        projectId: "",
        storageBucket: "",
        measurementId: "",
        messagingSenderId: "",
      },
      theme: {
        primary: {
          default: "#000000",
          alpha: "rgba(0,0,0,0.05)",
        },
        inverse: "#FFFFFF",
      },
    },
  }
);
