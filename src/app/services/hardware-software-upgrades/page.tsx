import React from 'react';
import { Settings, Headset } from 'lucide-react';
import InnerHeader from '@/components/InnerHeader';
import WhyChooseUs from '@/components/services/WhyChooseUs';
import ServiceHeroImage from '@/components/services/ServiceHeroImage';
import Solutions from '@/components/services/Solutions';

const Page = () => {
  const pageData = {
    title: "Hardware & Software Upgrades",
    subtitle: "Enhance Your Business with Expert Hardware & Software Upgrades",
    heroImage: "/services/hardware-software-upgrades.jpg",
    features: [
      {
        icon: Settings,
        title: "Expert IT Help",
        description: "With PCHelperTeam, you get quick access to expert IT support for all your hardware and software upgrade needs. Our skilled professionals handle upgrades efficiently, ensuring minimal disruption to your operations."
      },
      {
        icon: Headset,
        title: "Reliable Support Anytime",
        description: "Our trained IT professionals are available 24/7, every day of the year. Just give us a call, and we’ll manage your upgrades with precision, so your systems stay modern and reliable."
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
                <p>Would you like to ensure your technology stays up-to-date and runs smoothly? No more dealing with outdated hardware or software issues. Imagine feeling confident that your systems are always current and performing at their best.</p>
                <p>That’s what you get with PCHelperTeam. We provide professional hardware and software upgrade services to keep your technology in top shape.</p>
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