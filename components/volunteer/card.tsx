import { Button, ButtonGroup } from "flowbite-react";
import { HiAdjustments, HiCloudDownload, HiUserCircle } from "react-icons/hi";

export default function Card(props: any) {
  return (
    <div className="w-96 h-80 px-4 pt-4 pb-10 bg-white rounded-lg shadow border border-gray-200 flex-col justify-start items-start inline-flex">
      <div className=" p-2.5 justify-end items-center gap-2.5 inline-flex">
        <div className="w-5 h-5 relative" />
      </div>
      <div className=" h-40 flex-col justify-start items-center gap-3 flex">
        <div className=" h-12 flex-col justify-start items-center gap-1 flex">
          <div className=" text-center text-gray-900 text-xl font-medium  leading-normal">
            {props.name}
          </div>
          <div className=" text-center text-gray-500 text-sm font-normal  leading-tight">
            {props.role}
          </div>
        </div>
      </div>
      <div className=" pt-6 justify-center items-center gap-3 inline-flex">
        <Button color="blue" size='xl'>dd</Button>
      </div>
    </div>
  );
}