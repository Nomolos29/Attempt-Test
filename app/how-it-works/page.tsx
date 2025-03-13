import { AttemptMap, HeroSection } from '@/components'
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
    </main>
  )
}

export default HowItWorks