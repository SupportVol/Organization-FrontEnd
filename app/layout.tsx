import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeModeScript } from "flowbite-react";
import "./globals.css";

import "@aws-amplify/ui-react/styles.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SupportVol",
  description: "a volunteering platform open to non-profitable organizations to publish volunteering tasks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
        <body className={inter.className}>{children}</body>
    </html>
  );
}
