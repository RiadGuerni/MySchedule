import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <>
      <div className='mt-4 flex flex-row justify-between'>
        <div>
          <p className='font-bold text-7xl w-[650px] mb-8'>
            Your schedule a few clicks away
          </p>
          <p className='text-2xl w-[560px] ml-2 font-thin'>
            MySchedule is a plateform that allows you to generate custom efficient schedules in just a few clicks.
          </p>

        </div>

        <div className='border-black rounded-xl shadow-lg border-2'>
          <img src="hero img.png " alt="" className='w-[661px] rounded-xl' />
        </div>

      </div>

      <div className='grid place-content-center mt-6'>
        <Link href={"/login"}>
          <button className='bg-[#323030] text-white px-12 mt-6 py-2 text-2xl rounded-md hover:bg-[#4e4a4a]'>Start Now</button>
        </Link>
      </div>
    </>
  )
}
