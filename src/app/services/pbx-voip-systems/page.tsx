import React from 'react';
import { Settings, Headset } from 'lucide-react';
import InnerHeader from '@/components/InnerHeader';
import WhyChooseUs from '@/components/services/WhyChooseUs';
import ServiceHeroImage from '@/components/services/ServiceHeroImage';
import Solutions from '@/components/services/Solutions';

const Page = () => {
  const pageData = {
    title: "PBX & VoIP Systems",
    subtitle: "Optimize Communication with Expert PBX & VoIP Systems",
    heroImage: "/services/pbx-and-voip-systems.webp",
    features: [
      {
        icon: Settings,
        title: "Expert IT Help",
        description: "With PCHelperTeam, you get quick access to expert support for all your PBX and VoIP needs. Our skilled professionals handle everything from installation to maintenance, ensuring your communication systems run smoothly."
      },
      {
        icon: Headset,
        title: "Reliable Support Anytime",
        description: "Our trained IT professionals are available 24/7, every day of the year. Just give us a call, and we’ll address any issues with your PBX or VoIP systems promptly, keeping your communication channels open and efficient."
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
                <p>Would you like to ensure seamless, high-quality communication for your business? No more dealing with unreliable phone systems or complicated setups. Imagine having a state-of-the-art PBX or VoIP system that keeps your team connected effortlessly.</p>
                <p>That’s what you get with PCHelperTeam. We offer professional PBX and VoIP systems to enhance your communication infrastructure, ensuring clear and reliable connections.</p>
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