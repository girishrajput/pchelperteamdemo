import React from 'react';
import { Settings, Headset } from 'lucide-react';
import InnerHeader from '@/components/InnerHeader';
import WhyChooseUs from '@/components/services/WhyChooseUs';
import ServiceHeroImage from '@/components/services/ServiceHeroImage';
import Solutions from '@/components/services/Solutions';

const Page = () => {
  const pageData = {
    title: "Formatting Data Import & Export",
    subtitle: "Streamline Your Business with Efficient Data Import & Export",
    heroImage: "/services/formatting-data-import-export.webp",
    features: [
      {
        icon: Settings,
        title: "Expert IT Help",
        description: "With PCHelperTeam, you get quick access to expert IT support for all your data import and export needs. Our skilled professionals handle the entire process, ensuring your data is transferred correctly and securely."
      },
      {
        icon: Headset,
        title: "Reliable Support Anytime",
        description: "Our trained IT professionals are available 24/7, every day of the year. Just give us a call, and we’ll make sure your data import and export processes are running smoothly without interruptions."
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
                <p>Would you like seamless, error-free data transfers into and out of your systems? No more hassles with compatibility issues or data loss. Imagine feeling confident that your data import and export processes are smooth and reliable.</p>
                <p>That’s what you get with PCHelperTeam. We provide expert data import and export solutions to ensure your business data flows efficiently and accurately.</p>
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