import React from 'react'
import SectionIntro from '../utilities/SectionIntro'
import ImageBox, { ImageBoxProps } from '../utilities/ImageBox'




const sectionData: ImageBoxProps[] = [
  {
    imgSectionTitle: "Pre-Journey: Setting the Foundation",
    imageSrc: "/how-it-works/pre-journey.png",
    listItems: [
      {
        title: "Select Your Mode",
        description: "Choose the health mode that best fits your needs, whether it’s managing a condition, fitness goals, or general wellness."
      },
      {
        title: "Share Your Health Information",
        description: "Tell us about your health history, goals, and challenges to help us create a personalized plan tailored to you."
      },
      {
        title: "Establish Your Plan",
        description: "Based on your information, we build a roadmap that evolves with your needs, from meal plans to fitness routines and wellness tracking."
      }
    ]
  },
  {
    imgSectionTitle: "During: Engaging in the Process",
    imageSrc: "/how-it-works/during.png",
    listItems: [
      {
        title: "Weekly Meal Ordering",
        description: "Start receiving customized meals or meal kits that align with your health goals, delivered directly to your door."
      },
      {
        title: "Personalized Wellness Monitoring",
        description: "Track key health metrics, including water intake, blood pressure, and other data, helping us refine your journey."
      },
      {
        title: "Weekly Check-Ins",
        description: "Regular virtual check-ins with our team to assess progress, address concerns, and ensure you stay on track."
      }
    ]
  },
  {
    imgSectionTitle: "Post-Journey: Reflecting and Evolving",
    imageSrc: "/how-it-works/post-journey.png",
    listItems: [
      {
        title: "Review Your Progress",
        description: "Evaluate your health, habits, and goals after each cycle to understand what’s working and what needs adjustment."
      },
      {
        title: "Tailored Adjustments",
        description: "Based on your progress, we adjust your meal plans, fitness routines, and wellness strategies to keep pushing toward your goals."
      },
      {
        title: "Ongoing Support",
        description: "Even after achieving your initial goals, we continue supporting you with checkups, monitoring, and adjustments as your needs evolve."
      }
    ]
  }
]


const HealthJourney = () => {


  return (
    <section>
      <main className='pt-12 pb-10'>
        <SectionIntro 
          sectionTitle='Your Health Journey in Three Phases'
          width='wide'
          description='We’ve divided your health journey into three simple phases: Pre, During, and Post. Each phase is designed to make the process smooth, personal, and effective as you work toward your health goals.'
        />

        <div>
          {sectionData.map((section, index) => (
            <ImageBox key={index} imgSectionText={section.imgSectionText} imgSectionTitle={section.imgSectionTitle} imageSrc={section.imageSrc} listItems={section.listItems} reverse={index % 2 === 1} gap textSize='lg' imageSize='lg'  />
          ))}
        </div>
      </main>
    </section>
  )
}

export default HealthJourney