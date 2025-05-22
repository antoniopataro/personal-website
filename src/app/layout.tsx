import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { DESCRIPTION, KEYWORDS } from "@/shared/constants";
import { CursorFollower } from "@/ui/components/cusror-follower/cusror-follower";

import { Header } from "./_components/header/header";

import "@/ui/styles/index.css";

const inter = Inter({
  preload: true,
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  description: DESCRIPTION,
  keywords: KEYWORDS,
  title: "Antônio Pataro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-background flex min-h-dvh flex-col pl-6 antialiased sm:pl-0`}
      >
        <Header />
        <main className="flex grow flex-col">{children}</main>
        <CursorFollower />
      </body>
    </html>
  );
}
