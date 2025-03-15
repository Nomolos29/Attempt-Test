import React from 'react'
import ImageBox from '../utilities/ImageBox'
import { FaArrowRightLong } from 'react-icons/fa6'

const HealthTransformation = () => {
  return (
    <section className='bg-[#D8F0AE47] w-full'>
        <ImageBox 
            imgSectionTitle="Start Your Health Transformation Today, with Ease."
            imgSectionText='Join us now and unlock personalized meal plans, expert guidance, and a supportive community for a healthier you.'
            imageSrc='/health-transformation.png'
            alignment='bottom'
            titleSize='lg'
            // imageSize='sm'
            icon={<FaArrowRightLong />}
            button
            filled
            lg
            text='Book a free consultation'
        />
    </section>
  )
}

export default HealthTransformation