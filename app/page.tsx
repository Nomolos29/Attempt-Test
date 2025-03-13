import { HeroSection } from "@/components";
import { HealthSolution } from "@/components/home-page-sections";
import { FaArrowRightLong } from "react-icons/fa6";


export default function Home() {
  return (
    <main className="">
      <HeroSection 
        title="Your Health, Your Journey, Your Way" 
        description="Discover how to eat well, stay active, and prioritize your health, all tailored to your goals and lifestyle." 
        button text="Book a free consultation" lg filled 
        gradient
        icon={<FaArrowRightLong />}
        imageUrl="/home-page/HeroImage.png"
      />

      <HealthSolution />
    </main>
  );
}
