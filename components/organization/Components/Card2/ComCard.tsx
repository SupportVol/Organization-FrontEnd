'use client';
import {Button, Card} from "flowbite-react";
import React, {useState} from "react";
import Link from "next/link";

import CardNA from "@/components/organization/Components/Card/CardNA";
export default function ComCard(props: any) {

    const [openModal, setOpenModal] = useState(false);

    return (

        <div >
            <Card className="max-w-sm" imgSrc="/pexels-belle-co-1000445.jpg" horizontal>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Example Community Name
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
                <div className="flex justify-end">
                    <Button color="failure" onClick={() => setOpenModal(false)}>
                        Join
                    </Button>
                </div>

            </Card>
        </div>

    );
}
