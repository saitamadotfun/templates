import "uno.css";
import "@unocss/reset/tailwind.css";
import { Api } from "saitamadotfun/sdk";

import clsx from "clsx";
import type { Metadata } from "next";
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
    openGraph: {
      images: ["https://ik.imagekit.io/orgk45qhh/banner.png"],
    },
    title: "Zeroboost | Deposit Anything to Trade Everything",
    description:
      "Speculate on Rising & Falling of Majors and Memes. Stake in different strategies to outperform market situations.",
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
      className={clsx(inter.variable, interTight.variable)}
    >
      <body className='flex flex-col'>
        {children}
      </body>
    </html>
  );
}
