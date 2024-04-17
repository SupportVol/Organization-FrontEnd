//create me a dropdown component
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Dropdown } from 'flowbite-react';
import { HiOutlineAcademicCap, HiOutlineHome, HiAcademicCap, HiHome } from 'react-icons/hi';


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('My activity');

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectItem = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div>

      {/* read the Dropdown component imported from 'flowbite-react' and customize to include a left icon in both the button and DropdownItem */}


      <button onClick={handleToggleDropdown} className="inline-flex h-[41px] w-[195px] items-center justify-between rounded-lg border-2 border-blue-200 bg-blue-800 px-5 py-2.5">
        <div className="relative h-5 w-5">
          <Image
            src="/icons/clipboard.svg"
            alt="clipboard Logo"
            className="h-full w-full"
            width={20}
            height={20}
            priority
          />
        </div>
        <div className="font-['Inter'] text-sm font-medium leading-[21px] text-white">
          {selectedItem}
        </div>
        <div className="relative h-5 w-5">
          <Image
            src="/icons/chevron-down.svg"
            alt="chevron-down Logo"
            className="h-full w-full"
            width={20}
            height={20}
            priority
          />
        </div>
      </button>
      <div className={isOpen ? "fixed" : "hidden"}>
        <div onClick={() => handleSelectItem("My activity")} className='flex gap-1 items-center text-white border'>
          <HiOutlineAcademicCap />
          <span>My activity</span>
        </div>
        <div onClick={() => handleSelectItem("Community")}>
          <i className="icon clipboard" />
          <span>Community</span>
        </div>
        <div onClick={() => handleSelectItem("Feed")}>
          <i className="icon clipboard" />
          <span>Feed</span>
        </div>
        <div onClick={() => handleSelectItem("Conversation")}>
          <i className="icon clipboard" />
          <span>Conversation</span>
        </div>
        <div onClick={() => handleSelectItem("Learning")}>
          <i className="icon clipboard" />
          <span>Learning</span>
        </div>
      </div>
    </div>
  );
};

export default Navigation;