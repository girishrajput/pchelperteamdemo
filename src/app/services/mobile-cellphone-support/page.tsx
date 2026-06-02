import React from 'react';
import { Settings, Headset } from 'lucide-react';
import InnerHeader from '@/components/InnerHeader';
import WhyChooseUs from '@/components/services/WhyChooseUs';
import ServiceHeroImage from '@/components/services/ServiceHeroImage';
import Solutions from '@/components/services/Solutions';

const Page = () => {
  const pageData = {
    title: "Mobile & Cellphone Support",
    subtitle: " Keep Connected with Expert Mobile & Cellphone Support",
    heroImage: "/services/mobile-cellphone-support.jpg",
    features: [
      {
        icon: Settings,
        title: "Expert IT Help",
        description: "With PCHelperTeam, you get quick access to expert support for all your mobile and cellphone needs. Our skilled professionals handle everything from troubleshooting issues to configuring devices, ensuring optimal performance."
      },
      {
        icon: Headset,
        title: "Reliable Support Anytime",
        description: "Our trained IT professionals are available 24/7, every day of the year. Just give us a call, and we’ll provide prompt support to resolve any mobile or cellphone problems, so you can stay connected and productive."
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
                <p>Would you like to ensure your mobile and cellphone systems are always functioning flawlessly? No more dealing with connectivity issues or device malfunctions. Imagine having reliable support for your mobile technology that keeps you and your team connected without interruptions.</p>
                <p>That’s what you get with PCHelperTeam. We offer comprehensive mobile and cellphone support to keep your devices running smoothly and your communication seamless.</p>
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