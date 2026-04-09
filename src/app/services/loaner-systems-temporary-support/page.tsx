import React from 'react';
import { Settings, Headset } from 'lucide-react';
import InnerHeader from '@/components/InnerHeader';
import WhyChooseUs from '@/components/services/WhyChooseUs';
import ServiceHeroImage from '@/components/services/ServiceHeroImage';
import Solutions from '@/components/services/Solutions';

const Page = () => {
  const pageData = {
    title: "Loaner Systems & Temporary Support",
    subtitle: "Optimize Your Operations with Professional IT & Server Room Management",
    heroImage: "/services/loaner-systems-temporary-support.jpg",
    features: [
      {
        icon: Settings,
        title: "Expert IT Help",
        description: "With PCHelperTeam, you get quick access to loaner systems and temporary IT support. Our skilled professionals provide the resources you need to keep your operations going while your main systems are being serviced or upgraded."
      },
      {
        icon: Headset,
        title: "Reliable Support Anytime",
        description: "Our trained IT professionals are available 24/7, every day of the year. Just give us a call, and we’ll ensure you have the necessary temporary solutions to maintain productivity and minimize downtime."
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
                <p>Would you like to ensure your operations continue smoothly even when your primary systems are down? No more disruptions or productivity losses. Imagine having immediate access to loaner systems and temporary support whenever you need it.</p>
                <p>That’s what you get with PCHelperTeam. We offer reliable loaner systems and temporary support solutions to keep your business running seamlessly during system repairs or upgrades.</p>
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