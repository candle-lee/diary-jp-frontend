'use client';

import { Button, Spinner } from 'flowbite-react';

export const ButtonSpinner = () => {
  return (
    <>
      <Button className='w-[410px] h-[54px] text-white bg-[#4318FF] font-medium rounded-[16px] text-sm px-2.5 py-2 text-center'>
        <Spinner
          aria-label="Spinner button example"
          size="sm"
        />
        <span className="pl-3">
          Loading...
        </span>
      </Button>
    </>
  )
}


