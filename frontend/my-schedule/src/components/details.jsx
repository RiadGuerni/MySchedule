import React from 'react'
import DetailCard from './DetailCard'


export default function Details() {
  return (
    <div>

      <h3 className='pb-5 mb-5 mt-12 border-b-2 w-fit border-b-zinc-950 text-4xl font-bold'>Why MySchedule?</h3>

      <p className='pb-14 pt-6 text-2xl'>MySchedule helps you create daily plans quickly and efficiently. Simply describe your goals for the day, and MySchedule will generate multiple schedule options for you to choose from. You can easily edit, customize, and copy your preferred schedule directly into Google Calendar.</p>


      <div  className='flex smd:flex-row smd:justify-between gap-4 flex-col items-center'>

      <DetailCard title="Customizable" description="You can customise all the gerneated schedules, and copy them into your google calendar." />
      <DetailCard title="Automated" description="No need to waste your time preparing for your schedule, MySchedule gives you just that in a few clicks." />
      <DetailCard title="AI Powered" description="MySchedule utilizes ChatGPT's API to generate your Schedules!" />
      </div>

    </div>
  )
}
