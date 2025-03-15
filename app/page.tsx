import { FutureOfWellness, HealthTransformation, HeroSection } from "@/components";
import FaqSection from "@/components/global/FaqSection";
import { Features, HealthSolution } from "@/components/home-page-sections";
import ChatSection from "@/components/home-page-sections/ChatSection";
import { FaArrowRightLong } from "react-icons/fa6";


// function urlBase64ToUint8Array(base64String: string) {
//   const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
//   const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
 
//   const rawData = window.atob(base64)
//   const outputArray = new Uint8Array(rawData.length)
 
//   for (let i = 0; i < rawData.length; ++i) {
//     outputArray[i] = rawData.charCodeAt(i)
//   }
//   return outputArray
// }


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
      {/* <PushNotificationManager />
      <InstallPrompt /> */}
      <Features />
      <ChatSection />
      <HealthSolution />
      <FutureOfWellness />
      <HealthTransformation />
      <FaqSection />
    </main>
  );
}
