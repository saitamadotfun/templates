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
              default: { control: "color" },
              alpha: { control: "color" },
              alpha25: { control: "color" },
              alpha50: { control: "color" },
              alpha75: { control: "color" },
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
        projectId: "saitamadotfun",
        measurementId: "G-J9E6J7TM3G",
        messagingSenderId: "832401933524",
        authDomain: "saitamadotfun.firebaseapp.com",
        apiKey: "AIzaSyA57lymHvQxL0uM3PBZ4qXOef1ctus6SzA",
        storageBucket: "saitamadotfun.firebasestorage.app",
        appId: "1:832401933524:web:f8d25f2359373d860ea741",
      },
      theme: {
        primary: {
          default: "#000000",
          alpha: "rgba(0,0,0,0.05)",
          alpha25: "rgba(0,0,0,0.25)",
          alpha50: "rgba(0,0,0,0.5)",
          alpha75: "rgba(0,0,0,0.75)",
        },
        inverse: "#FFFFFF",
      },
    },
  }
);
