import { AttemptMap, FutureOfWellness, HealthTransformation, HeroSection, InfoSection } from '@/components'
import { HealthJourney } from '@/components/howItWorks-page-sections';
import { FaArrowRightLong } from "react-icons/fa6";

const HowItWorks = () => {
  return (
    <main className='w-full flex flex-col items-center'>
        <HeroSection 
            title='A science-backed and personalized process' 
            label
            button filled white shadow lg darkThemed
            backgroundImage='bg-[url(/how-it-works/hero-bg-image.png)]'
            text='Book a free consultation'
            icon={<FaArrowRightLong />}
            description='We begin with a free consultation to understand your health history, goals, and habits. Then, we create a personalized plan that evolves as you progress.' 
        />

        <AttemptMap />

        <InfoSection textColor='text-black' title='Observation Week' description="After your free consultation, the next step is the Observation Week. For 7 days, we’ll closely monitor your daily habits, from food choices to fitness routines, while our experts gather key insights to better understand your unique needs. This allows us to fine-tune our recommendations and feed Asabe, our AI, with accurate information tailored specifically to you. At the end of the week, we design your personalized wellness plan, and you gain full access to our platform to continue your journey." bgColor='bg-[#F4FBE9]' />

        <HealthJourney />

        <FutureOfWellness />

        <HealthTransformation />
    </main>
  )
}

export default HowItWorks