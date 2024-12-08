import clsx from "clsx";
import "@unocss/reset/tailwind.css";

import "@/globals.css";
import { Open_Sans } from "next/font/google";

const defaultFont = Open_Sans({
  subsets: ["latin"],
});

export default function EditorLayout({ children }: React.PropsWithChildren) {
  return (
    <body
      className={clsx(
        defaultFont.className,
        "fixed inset-0 flex flex-col  text-[14px] overflow-x-hidden overflow-y-scroll"
      )}
    >
      {children}
    </body>
  );
}
