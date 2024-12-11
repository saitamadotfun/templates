import "uno.css";
import { Api } from "saitamadotfun/sdk";
import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";

import "@/globals.css";
import clsx from "clsx";
import { saitamaBaseApiUrl, saitamaApiKey, siteId } from "@/config";

const defaultFont = Open_Sans({
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const api = new Api(saitamaBaseApiUrl, saitamaApiKey);
  const site = await api.site
    .retrieve(siteId)
    .then(({ data }) => data)
    .catch(() => null);
  if (site)
    return {
      icons: [site.metadata?.settings?.favicon?.uri],
      openGraph: {
        images: [site.metadata?.settings?.socialPreview?.uri],
      },
      title: site.metadata?.title,
      description: site.metadata?.description,
    };
  return {
    title: "PopCaty | Meme for cats",
    description: "This is a meme for undercats. Let's go to the moon now.",
    openGraph: {
      images: ["/bonk.png"],
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#fccd53",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(defaultFont.className, "fixed inset-0 flex flex-col")}
      >
        {children}
      </body>
    </html>
  );
}
