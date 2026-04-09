import HeroSlider from '@/components/home/HeroSlider'
import WeOffer from '@/components/home/WeOffer'
import AboutSection from '@/components/home/AboutSection'    
import Industries from '@/components/home/Industries'   
import OurPartners from '@/components/home/OurPartners'
import WhyPCHelper from '@/components/home/WhyPCHelper'

// 1. Metadata must be exported from a Server Component
export const metadata = {
  title: 'Home | PCHelperTeam',
  description: 'Driving business results with Smartbiz HRMS and custom technology solutions.',
}

// 2. Ensure the function is marked as default export properly
export default function HomePage() {
  return (
    <main>
      <HeroSlider />
      <AboutSection />
      <WeOffer />
      <OurPartners />
      <WhyPCHelper />
      {/* <DrivingResults /> */}
      <Industries />
    </main>
  )
}