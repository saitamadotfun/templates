import "uno.css";
import type { Metadata } from "next";
import { Api } from "saitamadotfun/sdk";

import "@/globals.css";
import { defaultFont } from "@/assets/fonts";
import { saitamaBaseApiUrl, saitamaApiKey, siteId } from "@/config";

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
    title: "FliedLice | Stir frying your investments",
    description:
      "Discover the delightful world of Fliedlice, the latest meme coin sensation that's taking the crypto market by storm. Join the Fliedlice community today and stir up your investments with a smile.",
    openGraph: {
      images: "/banner.png",
    },
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
      className={defaultFont.variable}
    >
      <body className="fixed inset-0 flex flex-col bg-primary">{children}</body>
    </html>
  );
}
