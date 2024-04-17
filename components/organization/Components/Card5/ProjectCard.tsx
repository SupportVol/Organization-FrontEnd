import React from "react";
import Image from "next/image";
import { Card, Button, Badge } from "flowbite-react";
import { Avatar } from "flowbite-react";

const ProjectCard = () => (
  <Card className="w-80 h-65 px-2 py-2 bg-white rounded-lg shadow border border-gray-200 flex flex-col justify-start items-start">
    <div className="flex flex-wrap gap-2">
    <Badge color="warning">Quick Project</Badge>
    </div>
    <div className="flex p-2 justify-start items-start gap-2">
    <div className="flex flex-wrap gap-2">
      <Avatar
        img="/images/image-2.jpg"
        alt="avatar of Jese"
        size="lg"
        rounded
        style={{ width: "100px", height: "50px" }}
      />
    </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <h1 className="text-base font-bold text-gray-900 leading-tight">MoraClean</h1>
          <Badge color="violet" className="text-violet-800 text-xs font-medium leading-tight">New</Badge>
        </div>
        <div className="flex items-start gap-1">
          <p className="text-xs text-gray-500 font-normal leading-normal">Cleaning beaches in Moratuwa Costal area</p>
        </div>
      </div>
    </div>
    <div className="flex pt-2 justify-center items-center gap-2">
      <div className="flex flex-col items-center">
        <p className="text-xs text-gray-600 font-semibold leading-normal">40</p>
        <p className="text-xs text-gray-600 font-normal leading-tight">day streak</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-xs text-gray-600 font-semibold leading-normal">5.3K+</p>
        <p className="text-xs text-gray-600 font-normal leading-tight">members</p>
      </div>
      <Button outline className="w-20 h-8 bg-gray-200 text-gray-800 text-xs flex justify-center items-center" gradientDuoTone="pinkToOrange">messages</Button>
    </div>
    <div className="flex pt-4 gap-1">
      <Badge color="gray" className="bg-gray-100 text-gray-900 text-xs font-medium leading-tight">#NoPlastic</Badge>
      <Badge color="gray" className="bg-gray-100 text-gray-900 text-xs font-medium leading-tight">#GoGreen</Badge>
      <Badge color="gray" className="bg-gray-100 text-gray-900 text-xs font-medium leading-tight">#Recycle</Badge>
    </div>
  </Card>
);

export default ProjectCard;
