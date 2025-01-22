import "uno.css";
import "@unocss/reset/tailwind.css";
import { Api } from "saitamadotfun/sdk";

import clsx from "clsx";
import type { Metadata } from "next";
import LocalFont from "next/font/local";
import { Inter, Inter_Tight } from "next/font/google";

import "./globals.css";
import { saitamaBaseApiUrl, saitamaApiKey, siteId } from "@/config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const boldMarker = LocalFont({
  src: "../assets/fonts/Bold-Marker.otf",
  variable: "--font-bold-marker",
});

export async function generateMetadata(): Promise<Metadata | undefined> {
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={clsx(inter.variable, interTight.variable, boldMarker.variable)}
    >
      <body className="flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
