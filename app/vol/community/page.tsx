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
import UserProfile from "@/components/volunteer/userProfile";
import { BigNavigation, BigSearch } from "@/ui-components";

export default function Home() {
  return (
    <main className="font-inter flex min-h-screen flex-col items-center justify-center gap-2 dark:bg-gray-800">
      <header className="flex w-full items-center justify-between gap-4 p-4">
        <div className="flex items-center gap-4">
          <BigNavigation />
        </div>
        <div>
          <BigSearch />
        </div>
        <div className="flex items-center gap-4">
          <DarkThemeToggle />
          <UserProfile
            name="John Doe"
            email="johndo@gmail.com"
            imageURL="/path/to/profile-image.jpg"
          />
        </div>
      </header>

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
