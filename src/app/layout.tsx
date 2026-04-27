import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const gtAlpina = localFont({
  variable: "--font-serif",
  display: "swap",
  src: [
    {
      path: "../../public/fonts/GT-Alpina-Standard-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/GT-Alpina-Standard-Thin-Italic.woff2",
      weight: "100",
      style: "italic",
    },
  ],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Celo Celopedia Skills — Know the ecosystem before you build",
  description:
    "The comprehensive skill for building on Celo. Ecosystem intelligence, DeFi protocols, MiniPay development, ODIS phone-to-wallet lookup, live Mini Apps discovery snapshot, AI agent infrastructure, grants, and verified contract addresses — all in one install.",
  openGraph: {
    title: "Celo Celopedia Skills",
    description: "Know the ecosystem before you build.",
    type: "website",
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
      className={`${inter.variable} ${gtAlpina.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
