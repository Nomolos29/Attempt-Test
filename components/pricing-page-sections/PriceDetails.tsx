"use client"

import React, { useState } from 'react'
import { PricePlans , pricePlanButton} from '@/lib/pricing-details'
import {PriceCard} from '@/components'

const PriceDetails = () => {

  const [activeButton, setActiveButton] = useState(pricePlanButton[0])

  return (
    <section className='w-full flex justify-center items-center'>
        <main className='flex flex-col max-w-[1440px] w-full gap-y-10 px-16 py-20'>
            <div className='flex flex-col gap-y-3'>
                <h4 className='text-[54px] font-medium'>Plans for every stage</h4>

                <main className='flex gap-x-10'>
                  {PricePlans.map((pricePlan, index) => (
                    <div key={index} className=''>
                      <PriceCard cardType='plan' title={pricePlan.planTitle} details={pricePlan.planDetail} price={pricePlan.price} buttonCTA={pricePlan.cta} label />
                    </div>
                  ))}
                </main>
            </div>

            <div className='flex flex-col gap-y-10 pt-10'>
                <h4 className='text-[54px] font-medium leading-none'>A breakdown of What you get</h4>
                
                <div className='flex gap-x-5 items-center'>
                  {pricePlanButton.map((button, index) => (
                    <button 
                      key={index} 
                      type='button'
                      onClick={() => setActiveButton(button)}
                      className={`w-[167px] h-[44px] flex justify-center items-center border rounded-full cursor-pointer ${button === activeButton ? "bg-black text-white" : "text-black"}`}
                    >{button}</button>
                  ))}
                </div>

                <main className='flex gap-x-10 w-full'>
                  {PricePlans.map((pricePlan, index) => (
                    <div key={index} className='flex justify-between gap-[20px] flex-wrap'>
                      {pricePlan.planTitle === activeButton && pricePlan.planFeature.length > 0 &&
                        pricePlan.planFeature.map((feature, index) => (
                          <div key={index} className='w-[calc(100%/3-20px)]'>
                            <PriceCard cardType='plan-feature' title={feature.title} details={feature.detail} />
                          </div>
                        ))
                      }
                    </div>
                  ))}
                </main>
            </div>
        </main>
    </section>
  )
}

export default PriceDetails