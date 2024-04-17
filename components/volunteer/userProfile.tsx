"use client";

import React, { useState } from "react";
import { Button, Dropdown, Avatar } from "flowbite-react";

interface UserProfileProps {
  name: string;
  imageURL: string;
  email: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, imageURL, email }) => {
  const [showProfile, setShowProfile] = useState(false);

  const handleProfileClick = () => {
    setShowProfile(!showProfile);
  };

  const handleLogout = () => {
    // Implement logout functionality here
  };

  const handleSettings = () => {
    // Implement settings functionality here
  };

  return (
    <Dropdown
      arrowIcon={false}
      inline
      label={<Avatar alt="User settings" img={imageURL} rounded />}
    >
      <Dropdown.Header>
        <span className="block text-sm">{name}</span>
        <span className="block truncate text-sm font-medium">{email}</span>
      </Dropdown.Header>
      <Dropdown.Item>My activity</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
  //         <img
  //             src="/path/to/profile-image.jpg"
  //             alt="Profile Image"
  //             onClick={handleProfileClick}
  //             width={100}
  //             height={100}
  //             className="profile-image"
  //         />
  //         {showProfile && (
  //             <div>
  //                 <h2>{name}</h2>
  //                 <p>{email}</p>
  //                 <Button onClick={handleLogout}>Logout</Button>
  //                 <Button onClick={handleSettings}>Settings</Button>
  //             </div>
  //         )}
  //     </div>
  // );
};

export default UserProfile;
