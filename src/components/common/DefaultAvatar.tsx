"use client";

import { Avatar } from "flowbite-react";

const DefaultAvatar = () => {
  return (
    <>
      <div className="w-[87px] rounded-full ring ring-white ring-offset-base-100 ring-offset-2 mx-auto">
        <Avatar
          size={"87px"}
          color={"light"}
          alt="avatar of Jese"
          img="/src/assets/avatar/avatar1.png"
          rounded
        />
      </div>
      <div className="text-center text-[#2B3674] font-bold font-dm-sans text-xl leading-[32px] tracking-[-0.4px] mt-[15px]">
        Adela Parkson
      </div>
      <div className="text-center text-[#A3AED0] font-bold text-[14px] leading-6 tracking-[-0.28px] ">
        How was your day today?
      </div>
    </>
  );
};

export default DefaultAvatar;
