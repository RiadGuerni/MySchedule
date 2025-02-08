import React from 'react'
import Footer from '@/components/footer'

export default function MainPage() {
  return (

    <div className='flex flex-col gap-20 items-center'>


      {/* Logo */}
      <div className='flex flex-row gap-3 items-center mr-[45rem] '>
            <img src="logo-removebg-preview.png" alt="" className='w-16'/>
            <p className='font-bold text-4xl ml-3 text-black'>MySchedule</p>
      </div>

      {/* Champs de Saisie */}
      <div className='flex flex-col gap-10'>
            <div className='w-[1018px] h-[101px] '>
              <h2 className='text-xl font-bold my-2 pl-2'>Today's Goals : </h2>
              <p><input className='w-[1018px] h-10 border-b-[1px] p-2 border-gray-950 focus:outline-none focus:ring-0 focus:border-black bg-transparent' type="text" placeholder="Enter your goals for today"/> </p>
            </div>
            <div className='w-[1018px] h-[101px] '>
              <h2 className='text-xl font-bold my-2 pl-2'>Schedule Start Time : </h2>
              <p><input className='w-[1018px] h-10 border-b-[1px] p-2 border-gray-950 focus:outline-none focus:ring-0 focus:border-black bg-transparent' type="text" placeholder="Enter the start time for the schedule (HH:MM format)"/> </p>
            </div>
            <div className='w-[1018px] h-[101px] '>
              <h2 className='text-xl font-bold my-2 pl-2'>Schedule End Time : </h2>
              <p><input className='w-[1018px] h-10 border-b-[1px] p-2 border-gray-950 focus:outline-none focus:ring-0 focus:border-black bg-transparent' type="text" placeholder="Enter the end time for the schedule (HH:MM format)"/> </p>
            </div>
      </div>



      {/* Generate Button */}
      <div>
        <button className='bg-[#323030] text-white px-12 mt-6 py-2 text-2xl rounded-md hover:bg-[#4e4a4a]'>Generate</button>
      </div>


      {/* Proposed Agendas */}
      <div className='flex flex-row'>
        <div className='w-96 border-[1px] border-black p-10'>
          <header className='flex flex-row justify-between text-2xl font-bold pb-6'><h1>Agenda 1</h1> <a href="#"><img src='editer1.png'></img></a></header>

          <div>
            <div className='border-[1px] border-black rounded-md m-3 px-4 py-2 '><h2 className='text-xl font-[500]'>Study Subject</h2> <p>8am - 9:30am</p></div>
            <div className='border-[1px] border-black rounded-md m-3 px-4 py-2 '><h2 className='text-xl font-[500]'>Study Subject</h2> <p>8am - 9:30am</p></div>
            <div className='border-[1px] border-black rounded-md m-3 px-4 py-2 '><h2 className='text-xl font-[500]'>Study Subject</h2> <p>8am - 9:30am</p></div>
            <div className='border-[1px] border-black rounded-md m-3 px-4 py-2 '><h2 className='text-xl font-[500]'>Study Subject</h2> <p>8am - 9:30am</p></div>
            <div className='border-[1px] border-black rounded-md m-3 px-4 py-2 '><h2 className='text-xl font-[500]'>Study Subject</h2> <p>8am - 9:30am</p></div>
          </div>
        </div>


        <div className='w-96 border-[1px] border-black p-10'>
          <header className='flex flex-row justify-between text-2xl font-bold pb-6'><h1>Agenda 2</h1> <a href="#"><img src='editer1.png'></img></a></header>

          <div>
            <div className='border-[1px] border-black rounded-md m-3 px-4 py-2 '><h2 className='text-xl font-[500]'>Study Subject</h2> <p>8am - 9:30am</p></div>
            <div className='border-[1px] border-black rounded-md m-3 px-4 py-2 '><h2 className='text-xl font-[500]'>Study Subject</h2> <p>8am - 9:30am</p></div>
            <div className='border-[1px] border-black rounded-md m-3 px-4 py-2 '><h2 className='text-xl font-[500]'>Study Subject</h2> <p>8am - 9:30am</p></div>
            <div className='border-[1px] border-black rounded-md m-3 px-4 py-2 '><h2 className='text-xl font-[500]'>Study Subject</h2> <p>8am - 9:30am</p></div>
            <div className='border-[1px] border-black rounded-md m-3 px-4 py-2 '><h2 className='text-xl font-[500]'>Study Subject</h2> <p>8am - 9:30am</p></div>
          </div>
        </div>


        <div className='w-96 border-[1px] border-black p-10'>
          <header className='flex flex-row justify-between text-2xl font-bold pb-6'><h1>Agenda 3</h1> <a href="#"><img src='editer1.png'></img></a></header>

          <div>
            <div className='border-[1px] border-black rounded-md m-3 px-4 py-2 '><h2 className='text-xl font-[500]'>Study Subject</h2> <p>8am - 9:30am</p></div>
            <div className='border-[1px] border-black rounded-md m-3 px-4 py-2 '><h2 className='text-xl font-[500]'>Study Subject</h2> <p>8am - 9:30am</p></div>
            <div className='border-[1px] border-black rounded-md m-3 px-4 py-2 '><h2 className='text-xl font-[500]'>Study Subject</h2> <p>8am - 9:30am</p></div>
            <div className='border-[1px] border-black rounded-md m-3 px-4 py-2 '><h2 className='text-xl font-[500]'>Study Subject</h2> <p>8am - 9:30am</p></div>
            <div className='border-[1px] border-black rounded-md m-3 px-4 py-2 '><h2 className='text-xl font-[500]'>Study Subject</h2> <p>8am - 9:30am</p></div>
          </div>
        </div>

      </div>


      <Footer></Footer>
    </div>
  )
}



