import React from 'react';

interface UserProfileProps {
  userName: string;
  profilePicture: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ userName, profilePicture }) => {
  return (
    <div className="flex items-center space-x-4">
      <img
        src={profilePicture}
        alt={`${userName}'s Profile`}
        className="w-10 h-10 rounded-full"
      />
      <span className="text-lg font-medium">{userName}</span>
    </div>
  );
};

export default UserProfile;
