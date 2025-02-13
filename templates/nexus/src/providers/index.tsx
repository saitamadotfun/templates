"use client";

import GlobalStateProvider from "./GlobalStateProvider";

type Props = unknown;

export default function Provider({ children }: React.PropsWithChildren<Props>) {
  return <GlobalStateProvider>{children}</GlobalStateProvider>;
}
