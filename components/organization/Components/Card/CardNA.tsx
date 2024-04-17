
import { Card } from "flowbite-react";
import Image from "next/image";
export default function CardNA() {
    return (
        <main >



            <Card className="max-w-sm">
                <Image src="/vercel.svg" height={500} width={500} alt="hello"/>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Example News & Articles
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </Card>




        </main>
    );
}
