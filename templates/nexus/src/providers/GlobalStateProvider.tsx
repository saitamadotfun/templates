import { createContext, useContext, useState } from "react";

type GlobalStateContext = {
  showContactDialog: boolean;
  setShowContactDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

const GlobalStateContext = createContext<Partial<GlobalStateContext>>({});

export default function GlobalStateProvider({
  children,
}: React.PropsWithChildren) {
  const [showContactDialog, setShowContactDialog] = useState(false);
  return (
    <GlobalStateContext.Provider
      value={{ setShowContactDialog, showContactDialog }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
}

export const useGlobalState = () =>
  useContext(GlobalStateContext) as GlobalStateContext;
