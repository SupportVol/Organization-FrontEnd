
import React from "react";
import Link from "next/link";

import CardNA from "@/components/organization/Components/Card/CardNA";
import TraCard from "@/components/organization/Components/Card3/TraCard";
export default function TrainingSessions(props: any) {
    return (
        // <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
            <div >
                <div className="p-4 border-2 border-gray-200 grid grid-cols-2 md:grid-cols-3 gap-4 ">
                    <h1>Training Session</h1>
                </div>
                <div className="p-4 border-2 border-gray-200 grid grid-cols-2 md:grid-cols-3 gap-4 ">
                    <TraCard/>
                    <TraCard/>
                    <TraCard/>
                    <TraCard/>
                    <TraCard/>
                    <TraCard/>
                </div>

            </div>
        // </main>
    );
}
