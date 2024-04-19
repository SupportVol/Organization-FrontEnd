'use client';
import CardNA from "@/components/organization/Components/Card/CardNA";

import {Button, FileInput, FloatingLabel, Label, Modal} from "flowbite-react";
import { useState } from "react";

export default function NewsArt(props: any) {

    const [openModal, setOpenModal] = useState(false);
    const [Img, setImg] = useState('');




    return (
        // <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
        //     <div className="p-4 sm:ml-64">
        <div>
            <div className="p-4 border-2 border-gray-200 grid grid-cols-2 md:grid-cols-3 gap-4 ">
                <h1>News & Articles</h1>
            </div>
            <br/>
            <div>

                <Button color={"red"}  onClick={() => setOpenModal(true)}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5"/>
                    </svg>
                    </Button>
                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                    <Modal.Header>Add News or Articles</Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6">
                            <FloatingLabel variant="standard" label="Title Name" />
                            <FloatingLabel variant="standard" label="Tag" />

                            <Label
                                htmlFor="dropzone-file"
                                className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                            >
                                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                                    <svg
                                        className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 16"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                        />
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="font-semibold">Click to upload</span> or drag and drop
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input type="file" onChange={(e) => setImg(e.target.files[0])} id="dropzone-file" className="hidden" />
                            </Label>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>

                        <div className="flex justify-center gap-4">
                            <Button color="failure" onClick={() => setOpenModal(false)}>
                                Yes,I'm sure
                            </Button>
                            <Button color="gray" >
                                No, cancel
                            </Button>
                        </div>
                    </Modal.Footer>
                </Modal>
            </div>
            <br/>

            <div className="p-4 border-2 border-gray-200 grid grid-cols-2 md:grid-cols-3 gap-4 ">

                <CardNA/>
                <CardNA/>
                <CardNA/>
                <CardNA/>
                <CardNA/>
                <CardNA/>

            </div>
        </div>

);
}

