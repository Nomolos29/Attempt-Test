import { HeroSection, ImageBox, InfoSection } from '@/components'
import { GetStarted, PriceDetails } from '@/components/pricing-page-sections'
import { ListItemProps } from '@/components/utilities/ListItem'
import Image from 'next/image'
import React from 'react'


const CheckIcon = () => (
  <div>
    <Image src="/checkIcon.svg" alt='check icon' width={40} height={40} />
  </div>
)


const Pricing = () => {

  const listItems: ListItemProps[] = [
    {
      description: "Offer your team personalized nutrition, fitness, and health monitoring as a company-sponsored benefit.",
      icon: <CheckIcon />
    },
    {
      description: "From monthly health checkups to curated wellness events, we support both remote and in-office teams.",
      icon: <CheckIcon />
    },
    {
      description: "Employees can access physical checkups, recovery sessions, and wellness experiences at our partner health centers.",
      icon: <CheckIcon />
    },
    {
      description: "Flexible plans that fit your organization’s size and health goals.",
      icon: <CheckIcon />
    }
  ]

  return (
    <section>
        <HeroSection 
            title='Wellness designed to fit your life and pocket' 
            label
            text=''
            wide
            description='Your health journey should be personalized, flexible, and accessible. Choose a plan that meets your needs, whether you&apos;re looking for expert guidance, AI-driven insights, or in-person health checkups. Invest in your well-being today.' 
            imageUrl='/pricing/hero-image.png'
        />

        <PriceDetails />

        <InfoSection size='lg' textColor='text-white' title='Personalized Meal Subscription (Separate from Membership Plans)' description="Our meal subscription is separate from the monthly wellness plans, giving you the freedom to choose. Starting from as low as ₦20,000 per week, our meals are carefully crafted to match the selections in your personalized meal plan, ensuring balance, variety, and convenience without the hassle of meal prep" bgColor='bg-[#454745]' />

        <ImageBox 
          imgSectionTitle='Corporate Wellness & Partnerships' 
          imgSectionText="Empower your team with proactive health solutions by integrating Attempts as an employee wellness benefit. We work with corporate teams, organizations, and insurers to provide holistic health support tailored to employees' needs." 
          imageSrc='/pricing/corporate-wellness.png'
          listItems={listItems}
        />

        <GetStarted />
    </section>
  )
}

export default Pricing