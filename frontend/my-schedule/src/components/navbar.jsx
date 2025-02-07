import React from 'react'

export default function Navbar() {
  return (
    <nav className='w-full py-6 flex flex-row justify-between'>
        <div className='flex flex-row gap-3 items-center'>
            <img src="logo.png" alt="" className='w-10'/>
            <p className='font-bold text-2xl text-black'>MySchedule</p>
        </div>

        <button className='bg-[#323030] text-white px-10 py-1 text-lg rounded-md hover:bg-[#4e4a4a]'>Login</button>
    </nav>
  )
}
