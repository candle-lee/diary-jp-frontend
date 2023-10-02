'use client';

import { Spinner } from 'flowbite-react';

export const CircleSpinner = () => {
    return (
        <>
            <div className="flex h-screen items-center justify-center">
                <Spinner aria-label="Center-aligned spinner example" />
            </div>
        </>
      )
}