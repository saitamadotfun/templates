import "uno.css";
import "@unocss/reset/tailwind.css";
import "react-toastify/dist/ReactToastify.css";

import clsx from "clsx";
import { Api } from "saitamadotfun/sdk";
import { ToastContainer } from "react-toastify";

import { Open_Sans } from "next/font/google";
import type { Metadata } from "next";

import "@/globals.css";
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
    title: "Join waitlist",
    description: "Be the first to know when we launch",
  };
}

const defaultFont = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          defaultFont.className,
          "fixed inset-0 flex flex-col antialiased"
        )}
      >
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
