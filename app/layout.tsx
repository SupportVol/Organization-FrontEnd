import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeModeScript } from "flowbite-react";
import "./globals.css";

import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";

import awsconfig from "./aws-exports";

import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components";

Amplify.configure(awsconfig);

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
