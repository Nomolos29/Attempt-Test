import React from 'react'
import { IoPaperPlaneOutline } from "react-icons/io5";
import { VscGlobe } from "react-icons/vsc";
import { LuWalletMinimal } from "react-icons/lu";

const featureContents = [
    {
        icons: <IoPaperPlaneOutline />,
        text: "Personalized food and health plans, monitored just for you."
    },
    {
        icons: <VscGlobe />,
        text: "Personalized food and health plans, monitored just for you."
    },
    {
        icons: <LuWalletMinimal />,
        text: "Personalized food and health plans, monitored just for you."
    }
]

const Features = () => {

  return (
    <section className='flex max-w-[1440px] mx-auto px-16 bg-[#F8FAFC] h-[180px] items-center justify-between'>
        {featureContents.map((feature, index) => (
            <div key={index} className='flex gap-x-4 items-center w-[30%]'>
                <div className='p-4 flex justify-center items-center text-2xl rounded-full bg-black text-white'>{feature.icons}</div>
                <h4 className='font-medium text-xl'>{feature.text}</h4>
            </div>
        ))}
    </section>
  )
}

export default Features