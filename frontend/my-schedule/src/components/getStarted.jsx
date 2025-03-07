import React from 'react'
import Link from 'next/link'

export default function GetStarted() {
    return (
        <div className='flex flex-col justify-center gap-8 items-center place-content-center'>
            <p className='text-3xl font-bold  mt-16 '>So what are you waiting for?</p>
            <Link href='/login' className='bg-[#323030] text-white px-12 py-2 text-2xl rounded-md hover:bg-[#4e4a4a]'>Create your schedules</Link>
        </div>
    )
}

