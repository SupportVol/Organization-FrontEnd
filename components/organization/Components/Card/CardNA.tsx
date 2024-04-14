import { Button, DarkThemeToggle } from "flowbite-react";
import { Card } from "flowbite-react";
import Image from "next/image";
export default function CardNA() {
    return (
        <main >



            <Card
                className="max-w-sm"
                renderImage={() => <Image width={500} height={500} src='/components/organization/assets/image-1.jpg' alt="image 1" />}
            >
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
