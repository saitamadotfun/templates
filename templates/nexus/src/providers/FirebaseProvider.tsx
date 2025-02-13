"use client";

import { block } from "saitamadotfun/bunshi";
import { initializeApp, FirebaseApp } from "firebase/app";
import React, { createContext, useContext, useMemo } from "react";

type FirebaseContext = {
  app: FirebaseApp;
};

const FirebaseContext = createContext<Partial<FirebaseContext>>({});

const FirebaseBlock = block(
  function FirebaseProvider({ config, style, ...props }) {
    const { children } = props as React.PropsWithChildren;
    const app = useMemo(() => initializeApp(config), [config]);

    return (
      <FirebaseContext.Provider value={{ app }}>
        {children}
      </FirebaseContext.Provider>
    );
  },
  {
    title: "FirebaseConfig",
    argsType: {
      config: {
        control: "map",
        keys: {
          projectId: { control: "input" },
          measurementId: { control: "input" },
          messagingSenderId: { control: "input" },
          authDomain: { control: "input" },
          apiKey: { control: "input" },
          appId: { control: "input" },
          storageBucket: { control: "input" },
        },
      },
    },
    args: {
      config: {
        projectId: "nexusbuilder001",
        measurementId: "G-MK8CRZYL9Q",
        messagingSenderId: "598838394773",
        authDomain: "nexusbuilder001.firebaseapp.com",
        apiKey: "AIzaSyAhZFhzVa4pY_Ig2E1z9KcfXFCFnD5L9p4",
        appId: "1:598838394773:web:bb8d4344e7bb97a881c09c",
        storageBucket: "nexusbuilder001.firebasestorage.app",
      },
    },
  }
);

const FirebaseProvider = function FirebaseProvider({
  children,
  ...props
}: React.PropsWithChildren<React.ComponentProps<typeof FirebaseBlock>>) {
  return <FirebaseBlock {...props}>{children}</FirebaseBlock>;
};

Object.assign(FirebaseProvider, {
  title: FirebaseBlock.title,
  args: FirebaseBlock.args,
  argsType: FirebaseBlock.argsType,
});

export default FirebaseProvider as typeof FirebaseProvider &
  typeof FirebaseBlock;

export const useFirebase = () => useContext(FirebaseContext) as FirebaseContext;
