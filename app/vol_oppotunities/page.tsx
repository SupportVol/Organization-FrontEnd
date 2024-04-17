"use client";

import React from "react";
import Image from "next/image";
import { Button, Checkbox, Label, TextInput, FileInput, FloatingLabel, Modal} from "flowbite-react";
import { useRef, useState } from "react";
import InitiativeCard from "@/components/organization/Components/Card4/InitiativeCard";
import ProjectCard from "@/components/organization/Components/Card5/ProjectCard";

const Chip = ({ text }: { text: string }) => (
    <span className="inline-block bg-gray-200 text-gray-800 px-3 py-1 text-xs font-medium rounded-full mr-2">
      {text}
    </span>
  );

export default function VolOpportunities(props: any) {
    const [openModal, setOpenModal] = useState(false);
    const projectNameRef = useRef<HTMLInputElement>(null);
    const projectDescriptionRef = useRef<HTMLInputElement>(null);
    const startDateRef = useRef<HTMLInputElement>(null);
    const endDateRef = useRef<HTMLInputElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    return (
        <main >
            <div>
                <br/>
                <div className="flex justify-center">
                    <Button.Group>
                        <Button className="h-25 w-40" gradientDuoTone="greenToBlue">Ongoing</Button>
                        <Button className="h-25 w-40" gradientDuoTone="greenToBlue">Completed</Button>
                    </Button.Group>
                </div>
                <br/>
                <div className="flex justify-between items-center">
                <h1 className="text-2xl">Initiative Projects</h1>
                </div>
                <br/>
                <div className="flex flex-row gap-4 overflow-x-auto">
                    <InitiativeCard/>
                    <InitiativeCard/>
                    <InitiativeCard/>
                    <InitiativeCard/>
                    <InitiativeCard/>
                </div>
                <br/>
                <div className="flex justify-between items-center">
                <h1 className="text-2xl">Quick Projects</h1>
                <Button onClick={() => setOpenModal(true)} color={"red"}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5"/>
                    </svg>
                </Button>
                <Modal show={openModal} size="xl" popup onClose={() => setOpenModal(false)} initialFocus={projectNameRef}>
                <Modal.Header>Create Quick Project</Modal.Header>
                <Modal.Body>
                <div className="space-y-6">
                    <div>
                    <Label htmlFor="projectName" value="Project Name" />
                    <TextInput id="projectName" ref={projectNameRef} placeholder="Enter project name" required />
                    </div>
                    <div>
                    <Label htmlFor="description" value="Description" />
                    <TextInput id="description" ref={projectDescriptionRef} placeholder="Enter project Description" required />
                    </div>
                    <div>
                    <Label htmlFor="startDate" value="Start Date" />
                    <TextInput id="startDate" ref={startDateRef} type="date" required />
                    </div>
                    <div>
                    <Label htmlFor="endDate" value="End Date" />
                    <TextInput id="endDate" ref={endDateRef} type="date" required />
                    </div>
                    <div className="flex w-full items-center justify-center">
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
                        <FileInput id="dropzone-file" className="hidden" />
                    </Label>
                    </div>
                </div>
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={() => setOpenModal(false)} gradientDuoTone="pinkToOrange">Cancel</Button>
                <Button onClick={() => console.log("Form submitted")} autoFocus gradientDuoTone="pinkToOrange">Submit</Button>
                </Modal.Footer>
            </Modal>
            </div>
                <br/>
                <div className="flex flex-row gap-3 overflow-x-auto">
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </div>

            </div>
        </main>
    );
}
