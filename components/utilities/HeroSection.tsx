"use client"


import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Button, { ButtonProps } from './Button'

interface HeroSectionProps extends ButtonProps {
    title: string;
    description: string;
    imageUrl?: string;
    backgroundImage?: string;
    button?: boolean;
    label?: boolean;
    gradient?: boolean;
    darkThemed?: boolean;
    wide?: boolean;
    maxWidth?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, imageUrl, wide, maxWidth, backgroundImage, darkThemed, gradient, button, label, ...ButtonProps }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section
            className={`flex flex-col w-full relative items-center overflow-hidden justify-evenly transition-all duration-500 ease-in-out hover:bg-opacity-80`}>
            {label && <div className='bg-[#FFF2D2] w-full text-center py-3 text-[14px]'>
                <p>EARN DOUBLE POINTS ALL MONTH LONG! GET 2X POINTS & REDEEM FOR BIG DISCOUNTS! . <Link href="#" className='underline'>Sign up to get started</Link></p>
            </div>}

            {gradient &&
                <div className='absolute'>
                    <div className='relative'>
                        <div className='h-[600px] w-[1000px] bg-[#F2C94C38] -rotate-[20deg] blur-3xl rounded-[300%] absolute -right-0 bottom-40'></div>
                        <div className='h-[500px] w-[820px] bg-[#28616740] -rotate-[30deg] blur-3xl rounded-[300%] absolute -right-20 -top-68'></div>
                        <div className='h-[800px] w-[1000px] bg-[#28616740] -rotate-[30deg] blur-3xl rounded-[200%] absolute -bottom-40 -left-24'></div>
                    </div>
                </div>
            }

            <main className={`flex w-full z-10 flex-col px-5 xl:px-0 ${imageUrl && "gap-y-12"} ${backgroundImage} ${darkThemed ? "text-white" : gradient ? "bg-transparent" : "bg-white"}`}>
                <div className={`w-full flex flex-col justify-center items-center gap-y-12 ${imageUrl ? "py-14" : "h-[650px]"}`}>
                    <div className={`${wide ? "w-[1000px]" : maxWidth ? "max-w-[1440px]" : "w-[700px]"} mx-auto flex flex-col justify-between items-center gap-6 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        <h2 className="text-3xl w-full text-center md:text-[64px] leading-tight font-extrabold transition-colors duration-300 capitalize">{title}</h2>
                        <p className="text-[17px] md:text-[24px] w-full leading-tight md:leading-normal transition-colors duration-300">{description}</p>
                    </div>

                    {button && <Button {...ButtonProps} />}
                </div>

                <div className={`mx-auto ${wide ? "w-[1100px]" : maxWidth ? "max-w-[1440px]" : "w-[900px]"} flex flex-col justify-between items-center gap-6 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    {imageUrl && <Image src={imageUrl} alt='Hero demo image' width={1440} height={500} />}
                </div>
            </main>
        </section>
    )
}

export default HeroSection