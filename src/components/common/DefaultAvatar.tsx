'use client';

import { Avatar } from 'flowbite-react';

const DefaultAvatar = () => {
  return (
    <div className='w-87 rounded-full ring ring-white ring-offset-base-100 ring-offset-2'>
      <Avatar
        size={'87px'}
        color={'light'}
        alt="avatar of Jese"
        img="/src/assets/avatar/avatar1.png"
        rounded
      />
    </div>
  )
}

export default DefaultAvatar;