import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeModeScript } from "flowbite-react";
import "./globals.css";
import Page from "@/app/main/page";
import OrgSideBar from "@/app/main/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Flowbite React",
  description: "Generated by create flowbite react",
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
      <body className={inter.className}>
      <div className="flex  bg-amber-100">
          <OrgSideBar/>
      </div>
      <div className="flex flex-col  h-full ml-64 p-4">
          {children}
      </div>

      </body>
    </html>
  );
}
