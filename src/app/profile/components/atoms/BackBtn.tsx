'use client';
import React from 'react'
import { useRouter } from 'next/navigation'

const BackBtn = () => {
    const router = useRouter();
  return (
    <>
         <div className="mt-4 flex justify-center w-full">
        <button
          onClick={() => router.push('/')} // Navigate to the home page
          className="px-4 py-2 bg-slate-300  rounded-md hover:bg-slate-200 transition-colors cursor-pointer"
        >
          Back to Home
        </button>
      </div>
    </>
  )
}

export default BackBtn