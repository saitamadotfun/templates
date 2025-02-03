"use client";

import GlobalStateProvider from "./GlobalStateProvider";

export default function Provider({ children }: React.PropsWithChildren) {
  return <GlobalStateProvider>{children}</GlobalStateProvider>;
}
