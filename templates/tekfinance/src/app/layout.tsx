import "uno.css";
import "@unocss/reset/tailwind.css";

import type { Metadata } from "next";
import { Api } from "saitamadotfun/sdk";

import "@/globals.css";
import { defaultFont } from "@/fonts";
import { saitamaBaseApiUrl, saitamaApiKey, siteId } from "@/config";

export async function generateMetadata(): Promise<Metadata> {
  const api = new Api(saitamaBaseApiUrl, saitamaApiKey);
  const site = await api.site
    .retrieve(siteId)
    .then(({ data }) => data)
    .catch(() => null);
  if (site)
    return {
      icons: [site.metadata.settings.favicon.uri],
      openGraph: {
        images: [site?.metadata.settings.socialPreview?.uri],
      },
      title: site?.metadata.title,
      description: site?.metadata.description,
    };
  return {
    title: "Sustainable Finance System On Solana | TekFinance",
    description:
      "Tip, loyalty, reward, airdrop and manage community growth using Solana and other SPL tokens.",
    openGraph: {
      images: ["https://tekfinance.fun/banner.jpg"],
    },
  };
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html
      lang="en"
      className={defaultFont.className}
    >
      {children}
    </html>
  );
}
