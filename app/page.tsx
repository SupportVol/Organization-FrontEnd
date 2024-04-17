"use client";

import { Button, DarkThemeToggle } from "flowbite-react";
import {CommunityCard} from "@/ui-components";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
      <h1 className="text-2xl dark:text-white">Flowbite React + Next.js</h1>
      <DarkThemeToggle />
      <CommunityCard Title="custom name"/>
    </main>
  );
}
