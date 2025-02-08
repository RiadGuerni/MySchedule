import React from 'react'

export default function DetailCard({ title, description }) {
  return (
    <div className='w-80 h-96 shadow-xl border-x border-y border-2 rounded-3xl py-3 px-10'>
      <h3 className='text-center font-bold py-5 text-2xl sm:text-3xl'>{title}</h3>
      <p className='text-xl md:text-lg lg:text-2xl mt-8'>{description}</p>
    </div>
  )
}
