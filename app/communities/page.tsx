import React from "react";
import { Carousel } from "flowbite-react";
import ComCard from "@/components/organization/Components/Card2/ComCard";

export default function FindCommunitiesAndJoin(props: any) {
  return (
    <div>
      <br />
      <form className="max-w-5xl mx-auto relative w-full rounded-full overflow-hidden bg-white shadow-lg">
        <label htmlFor="default-search" className="sr-only">
          Search
        </label>
        <div className="flex items-center pl-2">
          <svg
            className="w-6 h-6 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <input
            type="search"
            id="default-search"
            className="block w-full px-4 py-2 text-sm text-gray-900 bg-transparent border-none focus:outline-none dark:text-white"
            placeholder="Search Communities..."
            required
          />
        </div>
      </form>

      <br />
      <div className="grid grid-cols-3 gap-4">
        <ComCard />
        <ComCard />
        <ComCard />
        <ComCard />
        <ComCard />
        <ComCard />
      </div>
    </div>
  );
}
