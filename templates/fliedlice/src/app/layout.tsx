import "uno.css";
import type { Metadata } from "next";

import "@/globals.css";
import { defaultFont } from "@/assets/fonts";

export const metadata: Metadata = {
  title: "FliedLice | Stir frying your investments",
  description:
    "Discover the delightful world of Fliedlice, the latest meme coin sensation that's taking the crypto market by storm. Join the Fliedlice community today and stir up your investments with a smile.",
  metadataBase: new URL("https://fliedlice.xyz"),
  openGraph: {
    images: "/banner.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={defaultFont.variable}
    >
      <body className="fixed inset-0 flex flex-col">{children}</body>
    </html>
  );
}
