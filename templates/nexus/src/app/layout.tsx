import "uno.css";
import "@unocss/reset/tailwind.css";
import { Api } from "saitamadotfun/sdk";

import clsx from "clsx";
import type { Metadata } from "next";
import LocalFont from "next/font/local";
import { Geist } from "next/font/google";

import "./globals.css";
import { saitamaBaseApiUrl, saitamaApiKey, siteId } from "@/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const helvetica = LocalFont({
  src: "../assets/fonts/Helvetica.ttf",
  variable: "--font-helvetica",
});

export async function generateMetadata(): Promise<Metadata | undefined> {
  const api = new Api(saitamaBaseApiUrl, saitamaApiKey);
  const site = await api.site.retrieve(siteId).then(({ data }) => data);
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
      className={clsx(
        geistSans.variable,
        helvetica.variable,
        "dark antialiased text-sm md:text-base"
      )}
    >
      <body className="flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
