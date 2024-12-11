import localFont from "next/font/local";
import { Open_Sans } from "next/font/google";

export const chinese = localFont({
  src: "./chinese.ttf",
});

export const defaultFont = Open_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
});
