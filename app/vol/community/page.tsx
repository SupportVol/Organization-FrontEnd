"use client";

import Navigation from "@/components/volunteer/navigation";
import CommunityCard from "@/ui-components/CommunityCard";
import RoadmapButton from "@/ui-components/RoadmapButton";
import { Button, DarkThemeToggle } from "flowbite-react";
import {
  HiOutlineAcademicCap,
  HiOutlineHome,
  HiAcademicCap,
  HiHome,
} from "react-icons/hi";

export default function Home() {
  return (
    <main className="font-inter flex min-h-screen flex-col items-center justify-center gap-2 dark:bg-gray-800">
      <DarkThemeToggle className="fixed right-10 top-10" />

      <div className="flex flex-col items-center justify-center gap-2 dark:text-gray-100">
        <h1 className="text-center text-4xl font-bold">Community</h1>
        <p className="text-center text-lg">Welcome to the community page</p>
        <Button color="blue">Click me</Button>

        <CommunityCard />
        <RoadmapButton />
      </div>
    </main>
  );
}
