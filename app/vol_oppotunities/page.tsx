"use client";

import { Button } from "flowbite-react";
import React from "react";
import { Card } from "flowbite-react";
import cardI from "@/public/image-1.jpg"
import Image from "next/image";
export default function VolOpportunities(props: any) {
    return (
        <main >
            <div>
                <div className="p-4 border-2 border-gray-200 grid grid-cols-2 md:grid-cols-3 gap-4 ">
                    <h1>Volunteer Opportunities</h1>
                </div>
                <br/>
                <div className="flex justify-center">
                    <Button.Group>
                        <Button className="h-25 w-40" gradientDuoTone="greenToBlue">Ongoing</Button>
                        <Button className="h-25 w-40" gradientDuoTone="greenToBlue">Completed</Button>
                    </Button.Group>
                </div>
                <br/>
                <h1 className="text-2xl  bg-orange-500 p-2">Initiative Projects</h1>
                <br/>
                <div className="flex flex-row gap-3 ">
                    <Card className="max-w-sm "  horizontal>
                        <Image src="/image-1.jpg" height={500} width={500} alt="hello"/>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Initiative Projects
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                    <Card className="max-w-sm"  horizontal>
                        <Image src="/image-1.jpg" height={500} width={500} alt="hello"/>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Initiative Projects
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                    <Card className="max-w-sm"  horizontal>
                        <Image src="/image-1.jpg" height={500} width={500} alt="hello"/>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Initiative Projects
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                    <Card className="max-w-sm"  horizontal>
                        <Image src="/image-1.jpg" height={500} width={500} alt="hello"/>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Initiative Projects
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                </div>
                <br/>
                <h1 className="text-2xl  bg-orange-500 p-2">Quick Projects</h1>
                <br/>
                <div className="flex flex-row gap-3 scroll-ps-6 snap-x ...">
                    <Card className="max-w-sm"  horizontal>
                        <Image src="/next.svg" height={500} width={500} alt="hello"/>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Quick Projects
                        </h5>
                        <div className="flex flex-row">
                            <div className="basis-4/5">

                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                                </p>
                            </div>
                            <div className="basis-1/5">
                                <svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeWidth="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                </svg>
                            </div>
                        </div>
                        <Button outline gradientDuoTone="purpleToPink">
                            Chat
                        </Button>
                    </Card>
                    <Card className="max-w-sm"  horizontal>
                        <Image src="/next.svg" height={500} width={500} alt="hello"/>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Quick Projects
                        </h5>
                        <div className="flex flex-row">
                            <div className="basis-4/5">

                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                                </p>
                            </div>
                            <div className="basis-1/5">
                                <svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeWidth="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                </svg>
                            </div>
                        </div>
                        <Button outline gradientDuoTone="purpleToPink">
                            Chat
                        </Button>
                    </Card>
                    <Card className="max-w-sm"  horizontal>
                        <Image src="/next.svg" height={500} width={500} alt="hello"/>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Quick Projects
                        </h5>
                        <div className="flex flex-row">
                            <div className="basis-4/5">

                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                                </p>
                            </div>
                            <div className="basis-1/5">
                                <svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeWidth="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                </svg>
                            </div>
                        </div>
                        <Button outline gradientDuoTone="purpleToPink">
                            Chat
                        </Button>
                    </Card>
                    <Card className="max-w-sm"  horizontal>
                        <Image src="/next.svg" height={500} width={500} alt="hello"/>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Quick Projects
                        </h5>
                        <div className="flex flex-row">
                            <div className="basis-4/5">

                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                                </p>
                            </div>
                            <div className="basis-1/5">
                                <svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeWidth="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                </svg>
                            </div>
                        </div>
                        <Button outline gradientDuoTone="purpleToPink">
                            Chat
                        </Button>
                    </Card>
                </div>

            </div>
        </main>
    );
}
