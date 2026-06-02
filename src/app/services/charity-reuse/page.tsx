import React from 'react';
import { Settings, Headset } from 'lucide-react';
import InnerHeader from '@/components/InnerHeader';
import WhyChooseUs from '@/components/services/WhyChooseUs';
import ServiceHeroImage from '@/components/services/ServiceHeroImage';
import Solutions from '@/components/services/Solutions';

const Page = () => {
  const pageData = {
    title: "Charity & Reuse",
    subtitle: "Make a Difference with Charity & Reuse",
    heroImage: "/services/charity-and-reuse.webp",
    features: [
      {
        icon: Settings,
        title: "Expert IT Help",
        description: "With PCHelperTeam, you get quick access to expert advice on donating and reusing your old technology. Our skilled professionals will guide you through the process, ensuring your equipment finds a new home where it’s needed most."
      },
      {
        icon: Headset,
        title: "Reliable Support Anytime",
        description: "Our trained IT professionals are available 24/7, every day of the year. Just give us a call, and we’ll assist you in donating your old devices and making a positive impact on the community."
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
                <p>Would you like to contribute to a better world while solving your IT issues? Imagine having a solution for outdated equipment that also benefits the community. Feel great knowing your old technology is being put to good use instead of ending up in a landfill.</p>
                <p>That’s what you get with PCHelperTeam. We provide Charity & Reuse services to help you donate your old equipment responsibly and support those in need.</p>
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