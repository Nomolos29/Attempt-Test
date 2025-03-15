import React from 'react'
import ImageBox from '../utilities/ImageBox'

const FutureOfWellness = () => {
  return (
    <section className='bg-[#2D3126] w-full'>
        <ImageBox 
            imgSectionTitle="Help us shape the future of wellness"
            imgSectionText='Join our research team and contribute to groundbreaking innovations in nutrition, fitness, and health technology. Influence how AI-driven wellness evolves, get early insights into new features and programs and work with health experts, data scientists, and fitness professionals.'
            imageSrc='/future-wellness.png'
            titleSize='xl'
            light
            button
            filled
            white
            text='Join our Research Program'
        />
    </section>
  )
}

export default FutureOfWellness