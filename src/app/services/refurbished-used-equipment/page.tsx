import React from 'react';
import { Settings, Headset } from 'lucide-react';
import InnerHeader from '@/components/InnerHeader';
import WhyChooseUs from '@/components/services/WhyChooseUs';
import ServiceHeroImage from '@/components/services/ServiceHeroImage';
import Solutions from '@/components/services/Solutions';

const Page = () => {
  const pageData = {
    title: "Refurbished & Used Equipment",
    subtitle: "Maximize Value with High-Quality Refurbished & Used Equipment",
    heroImage: "/services/refurbished-and-used-equipment.webp",
    features: [
      {
        icon: Settings,
        title: "Expert IT Help",
        description: "With PCHelperTeam, you get access to a wide selection of high-quality refurbished and used equipment. Our skilled professionals ensure that every item meets stringent performance and reliability standards before it reaches you."
      },
      {
        icon: Headset,
        title: "Reliable Support Anytime",
        description: "Our trained IT professionals are available 24/7, every day of the year. Just give us a call, and we’ll help you find the right refurbished or used equipment to fit your needs, ensuring it performs reliably and efficiently."
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
                <p>Would you like to equip your business with reliable technology while saving costs? No more overspending on new equipment or dealing with outdated technology. Imagine getting high-performance, refurbished, or used equipment that meets your needs at a fraction of the cost.</p>
                <p>That’s what you get with PCHelperTeam. We offer a range of refurbished and used equipment solutions to help you get the best value for your technology investments.</p>
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