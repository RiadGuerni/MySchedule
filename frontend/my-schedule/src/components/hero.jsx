import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <div>
      <div className='mt-4 flex flex-row lg:justify-around gap-0 md:items-center'>
        <div className='flex flex-col items-center lg:items-start'>
          <p className='font-bold xl:text-7xl xl:w-[650px] mb-8 mr-0 lg:text-6xl md:text-7xl text-5xl lg:w-[450px] md:7xl bt:text-6xl text-center text-wrap lg:text-left smd:text-6xl'>
            Your schedule a few clicks away
          </p>
          <p className='text-2xl text-center lg:w-[560px] ml-2 font-thin smd:w-[700px]'>
            MySchedule is a plateform that allows you to generate custom efficient schedules in just a few clicks.
          </p>

        </div>

        <img src="hero img.png " alt="" className=' xl:mr-4 rounded-xl border-black shadow-lg border-2 hidden lg:block  lg:h-[220px] xl:h-[250px] w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 h-auto' />


      </div>

      <div className='flex flex-col items-center mt-6 bg-blue-200 w-full'>
        <Link href={"/login"}>
          <button className='bg-[#323030] text-white px-12 mt-6 py-2 text-2xl rounded-md hover:bg-[#4e4a4a]'>Start Now</button>
        </Link>
      </div>
    </div>
  )
}
