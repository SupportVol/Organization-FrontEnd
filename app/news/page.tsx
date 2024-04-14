import { Button, DarkThemeToggle } from "flowbite-react";
import React from "react";
import Link from "next/link";

import CardNA from "@/components/organization/Components/Card/CardNA";
export default function NewsArt(props: any) {
    return (
        <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
         <h1>News & Articles</h1>
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 grid grid-cols-2 md:grid-cols-3 gap-4 ">
                    <CardNA/>
                    <CardNA/>
                    <CardNA/>
                    <CardNA/>

                </div>
            </div>
        </main>
    );
}
