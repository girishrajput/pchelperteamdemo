import React from 'react';
import { Settings, Headset } from 'lucide-react';
import InnerHeader from '@/components/InnerHeader';
import WhyChooseUs from '@/components/services/WhyChooseUs';
import ServiceHeroImage from '@/components/services/ServiceHeroImage';
import Solutions from '@/components/services/Solutions';

const Page = () => {
  const pageData = {
    title: "Cabling & Wiring & Dressing",
    subtitle: "Ensure Reliable Connectivity with Professional Cabling & Wiring & Dressing",
    heroImage: "/services/cabling-wiring-dressing.jpg",
    features: [
      {
        icon: Settings,
        title: "Expert IT Help",
        description: "With PCHelperTeam, you get quick access to expert IT support for all your cabling and wiring needs. Our skilled professionals ensure your systems are set up correctly and efficiently."
      },
      {
        icon: Headset,
        title: "Reliable Support Anytime",
        description: "Our trained IT professionals are available 24/7, every day of the year. Just give us a call, and we’ll make sure your cabling and wiring are maintained for optimum performance."
      }
    ]
  };

  return (
    <>
      <InnerHeader title={pageData.title} subtitle={pageData.subtitle} />

      <main className="w-full font-sans antialiased text-black overflow-x-hidden bg-white">
        <section className="bg-white py-10 px-6 md:px-12 lg:px-24">
          <WhyChooseUs
            heading={<>Stay Ahead of Problems</>}
            description={
              <>
                <p>Would you like months without any connectivity issues? No tangled cables, no network downtime, and no worries about messy wiring? Imagine feeling confident, knowing your cabling and wiring are perfectly organized and functioning.</p>
                <p>That’s what you get with PCHelperTeam. We provide expert cabling, wiring, and dressing services to ensure your business stays connected and organized.</p>
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