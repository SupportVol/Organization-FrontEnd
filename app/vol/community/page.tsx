import Navigation from "@/components/volunteer/navigation";
import { Button, DarkThemeToggle } from "flowbite-react";
import { HiOutlineAcademicCap, HiOutlineHome, HiAcademicCap, HiHome} from "react-icons/hi"

export default function Home() {

  return (
    <main className="flex flex-col font-inter min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
      <DarkThemeToggle className="fixed top-10 right-10" />

      <div className="flex flex-col items-center justify-center gap-2 dark:text-gray-100">
        <h1 className="text-4xl font-bold text-center">Community</h1>
        <p className="text-lg text-center">Welcome to the community page</p>
        <Button color="blue">Click me</Button>
      </div>

    </main>
  );
}
