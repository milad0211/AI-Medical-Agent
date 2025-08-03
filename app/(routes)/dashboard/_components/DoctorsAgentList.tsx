import React from 'react'
import { AIDoctorAgents } from '@/shared/list'
import DoctorAgentCard from './DoctorAgentCard'

const DoctorsAgentList = () => {
  return (
    <div className='mt-10 '>
        <h2 className='font-bold text-xl'>AI Specialist Doctors Agent</h2>

        <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-5'>
            {AIDoctorAgents.map((doctor,index)=>(
                <div key={index}>
                    <DoctorAgentCard doctorAgent = {doctor}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default DoctorsAgentList