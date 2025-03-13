import Image from 'next/image'
import React from 'react'

interface ImageBoxProps {
  imageSrc?: string;
  label?: string;
  title?: string;
  description?: string;
  reverse?: boolean;
}


const ImageBox: React.FC<ImageBoxProps> = ({imageSrc, label, title, description, reverse}) => {
  return (
    <section className="flex w-full justify-center transition-all duration-500 ease-in-out hover:bg-opacity-80 pb-12 md:pb-20 pt-14 gap-y-12">
      <div className={`max-w-[1440px] w-full flex justify-between gap-x-14 flex-col-reverse lg:flex-row ${reverse && "lg:flex-row-reverse"}`}>
        <article className='flex flex-col items-start lg:w-2/5 pt-5 md:pt-10 gap-y-3 md:gap-y-5'>
          <span className={`${label === "communication" ? "text-[#6495ED] border-[#6495EDB2]" : label === "Edit To-Dos" ? "text-[#DE3163] border-[#DE3163B2]" : label === "task overview" ? "text-[#18A582] border-[#18A582B2]" : label === "View Overdue Tasks" ? "text-[#FFC600] border-[#FFC600B2]" : ""} rounded-full py-[10px] text-sm md:text-lg font-medium uppercase px-4 md:px-7 border`}>{label}</span>
          <h3 className='text-[#212121] text-[22px] md:text-[32px] font-bold'>{title}</h3>
          <p className='text-md md:text-[24px] text-[#212121]'>{description}</p>
        </article>

        <div className='lg:w-3/5'>
          {imageSrc && <Image width={850} height={0} src={imageSrc} alt='Section image' />}
        </div> 
      </div>
    </section>
  )
}

export default ImageBox