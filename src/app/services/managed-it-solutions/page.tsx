import React from 'react';
import { Settings, Headset } from 'lucide-react';
import InnerHeader from '@/components/InnerHeader';
import WhyChooseUs from '@/components/services/WhyChooseUs';
import ServiceHeroImage from '@/components/services/ServiceHeroImage';
import Solutions from '@/components/services/Solutions';

const Page = () => {
  const pageData = {
    title: "Managed IT Solutions",
    subtitle: "Streamline Your Operations with Comprehensive Managed IT Solutions",
    heroImage: "/services/managed-it-solutions.webp",
    features: [
      {
        icon: Settings,
        title: "Expert IT Help",
        description: "With PCHelperTeam, you get access to a dedicated team of IT professionals who manage all aspects of your technology. From routine maintenance to advanced troubleshooting, we handle it all to ensure your systems run efficiently."
      },
      {
        icon: Headset,
        title: "Reliable Support Anytime",
        description: "Our trained IT professionals are available 24/7, every day of the year. Just give us a call, and we’ll address any IT issues promptly, keeping your systems secure and operational at all times."
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
                <p>Would you like to ensure your IT systems are always running smoothly without constant oversight? No more worrying about tech issues or maintenance hassles. Imagine having a reliable IT partner who proactively manages and optimizes your technology.</p>
                <p>That’s what you get with PCHelperTeam. We offer fully managed IT solutions to keep your technology in top shape, so you can focus on growing your business.</p>
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