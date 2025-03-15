import React from 'react'
import { SectionIntro, Button } from '@/components'


const GetStarted = () => {
  return (
<section className='w-full justify-center bg-[#F4FBE9] pb-10 mt-20'>
        <main className='flex flex-col items-center justify-center max-w-[1440px] px-16'>
            <SectionIntro 
                sectionTitle='Try It Free for a Week - Because Results Matter!'
                width='small'
                description='We believe in results, not just promises. Try Attempts free for a month, no commitment, just real progress. Pay only when you see it working for you!'
            />

            <div className='flex items-center'>
                <Button text='Get started' outline />
                <Button text='Learn more' />
            </div>
        </main>
    </section>
  )
}

export default GetStarted