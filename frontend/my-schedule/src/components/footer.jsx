import React from 'react'

export default function Footer() {
  return (
    <div className='flex flex-row gap-96 p-8  mt-16 bg-slate-200'>
        <div className='flex flex-row gap-3 items-center'>
            <img src="logo-removebg-preview.png" alt="" className='w-16'/>
            <p className='font-bold text-4xl ml-3 text-black'>MySchedule</p>
        </div>
        <div>
          <h3 className='font-bold text-2xl text-black'>Contacts</h3>
          <p className='text-xl'>contact@myschedule.com</p> 
          <p className='text-xl'>0555 55 55 55</p>  
        </div>
    </div>
    
  )
}
