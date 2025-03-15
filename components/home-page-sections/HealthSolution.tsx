import React from 'react'
import SectionIntro from '../utilities/SectionIntro'
import { FaBookOpen } from 'react-icons/fa6'

const HealthSolution = () => {
  return (
    <section className='flex flex-col gap-y-5 py-14'>
      <SectionIntro 
        icon={<FaBookOpen />}
        labelText="Backed by Health Experts & AI"
        sectionTitle="Proactive, Science-Based Health Solutions Tailored for You."
        description="Food, fitness, monitoring and more"
      />
    </section>
  )
}

export default HealthSolution