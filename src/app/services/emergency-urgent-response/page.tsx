import React from 'react';
import { Settings, Headset } from 'lucide-react';
import InnerHeader from '@/components/InnerHeader';
import WhyChooseUs from '@/components/services/WhyChooseUs';
import ServiceHeroImage from '@/components/services/ServiceHeroImage';
import Solutions from '@/components/services/Solutions';

const Page = () => {
  const pageData = {
    title: "Emergency & Urgent Response",
    subtitle: "Get Immediate Help with Our Emergency & Urgent Response Services",
    heroImage: "/services/emergency-and-urgent-response.jpg",
    features: [
      {
        icon: Settings,
        title: "Expert IT Help",
        description: "With PCHelperTeam, you get quick access to expert IT support for any urgent issues. Our skilled professionals are ready to tackle emergencies and get your systems back on track."
      },
      {
        icon: Headset,
        title: "Reliable Support Anytime",
        description: "Our trained IT professionals are available 24/7, every day of the year. Just give us a call, and we’ll respond immediately to resolve your urgent IT problems and minimize downtime."
      }
    ]
  };

  return (
    <>
      <InnerHeader title={pageData.title} subtitle={pageData.subtitle} />

      <main className="w-full font-sans antialiased text-black overflow-x-hidden bg-white">
        <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
          <WhyChooseUs
            heading={<>Stay Ahead of Problems</>}
            description={
              <>
                <p>Would you like the peace of mind that comes with knowing help is always available in an emergency? No more stress about unexpected IT issues disrupting your business. Imagine feeling secure that any urgent problem will be handled swiftly and efficiently.</p>
                <p>That’s what you get with PCHelperTeam. We offer rapid emergency and urgent response services to address your critical IT needs.</p>
              </>
            }
            features={pageData.features}
          />
          <ServiceHeroImage imageSrc={pageData.heroImage} altText={pageData.title} />
        </section>

        <section className="bg-zinc-100 py-24 px-6 md:px-12 lg:px-24">
          <Solutions title="Solutions" />
        </section>
      </main>
    </>
  );
};

export default Page;