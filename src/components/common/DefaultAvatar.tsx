"use client";

import { Avatar } from "flowbite-react";

interface DefaultAvatarProps {
  size: string;
}

const DefaultAvatar: React.FC<DefaultAvatarProps> = ({ size }) => {
  console.log("Size", size);
  return (
    <>
      <div
        className={`w-[${size}] rounded-full ring ring-white ring-offset-base-100 ring-offset-2 mx-auto`}
      >
        <Avatar
          size={size}
          color={"light"}
          alt="avatar of Jese"
          img="/src/assets/avatar/avatar1.png"
          rounded
        />
      </div>
    </>
  );
};

export default DefaultAvatar;
