import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='w-full py-6 flex flex-row justify-between'>
        <div className='flex flex-row gap-3 items-center'>
            <img src="logo.png" alt="" className='w-10'/>
            <p className='font-bold text-2xl text-black'>MySchedule</p>
        </div>

        <Link href='/login' className='bg-[#323030] text-white px-10 py-1 text-lg rounded-md hover:bg-[#4e4a4a]'>Login</Link>
    </nav>
  )
}
