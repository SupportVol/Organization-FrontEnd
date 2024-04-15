'use client';
import {Button, Card, FileInput, FloatingLabel, Label, Modal} from "flowbite-react";
import React, {useState} from "react";
import {  Dropdown } from "flowbite-react";
import { Datepicker } from "flowbite-react";

import Image from "next/image";
import Link from "next/link";

import CardNA from "@/components/organization/Components/Card/CardNA";
export default function TraCard(props: any) {

    const [openModal, setOpenModal] = useState(false);

    // @ts-ignore
    return (

        <div >

            <Card className="max-w-sm ">
                <div className="flex justify-end px-4 pt-4 bg-orange-500">
                    <Dropdown inline label="">
                        <Dropdown.Item>
                            <a  onClick={() => setOpenModal(true)}
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Edit
                            </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Export Data
                            </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Delete
                            </a>
                        </Dropdown.Item>
                    </Dropdown>
                </div>
                <div className="flex flex-col items-center pb-10">
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                    <br/>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Training Session</h5>
                    <span className="text-lg text-gray-500 dark:text-gray-400">Supervisor</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">2024/04/14</span>
                    <div className="mt-4 flex space-x-3 lg:mt-6">
                        <a
                            href="#"
                            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                        >
                            Add member
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                        >
                            Generated PDF
                        </a>
                    </div>
                </div>
            </Card>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Edite Trainin</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <FloatingLabel variant="standard" label="Training Session" />
                        <Datepicker />
                        <FloatingLabel variant="standard" label="Training Supervisor" />
                        <FloatingLabel variant="standard" label="Prerequisites" />
                        <textarea id="description"  className=" resize-y h-40 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>



                    </div>
                </Modal.Body>
                <Modal.Footer>

                    <div className="flex justify-center gap-4">
                        <Button color="failure" onClick={() => setOpenModal(false)}>
                            Yes, I'm sure
                        </Button>
                        <Button color="gray" onClick={() => setOpenModal(false)}>
                            No, cancel
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>


        </div>

    );
}
