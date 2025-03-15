import React from 'react'

interface InfoScetionProps {
    title: string
    textColor: string
    size?: "sm" | "lg";
    description: string;
    emphasy?: string;
    bgColor: string
}

const InfoSection: React.FC<InfoScetionProps> = ({title, description, textColor, bgColor, size}) => {
  return (
    <section className={`flex justify-center w-full ${bgColor}`}>
        <main className={`max-w-[1440px] w-full px-14 flex flex-col gap-y-5 py-20 ${textColor}`}>
            <h4 className='font-semibold text-[35px]'>{title}</h4>
            <p className={`${size == "lg" ? "text-[29px]" : size == "sm" ? "text-lg" : "text-[22px]"}`}>{description}</p>
        </main>
    </section>
  )
}

export default InfoSection