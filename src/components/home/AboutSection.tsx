import { Code, Cpu, Wifi } from 'lucide-react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="bg-white min-h-screen py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left Column: Content */}
        <div className="flex flex-col space-y-8">

          {/* Header Area */}
          <div className="space-y-2">
            <div className="w-12 h-1.5 bg-[#FF4D24]" />

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              What is <span className="inline-block mt-1">PCHelperTeam?</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-lg">
              PCHelperTeam is a one-stop shop for all your computer equipment,
              software and technical support services at your convenient time and
              place. PCHelperTeam is a team of experienced and friendly IT
              professionals.
            </p>
            <button className="bg-[#FF4D24] text-white font-bold py-3 px-8 rounded-sm w-fit transition-transform hover:scale-105 active:scale-95">
              Read More
            </button>
          </div>

          {/* Services List */}
          <div className="space-y-10 pt-4">

            {/* Hardware Item */}
            <div className="flex items-start gap-2 mb-2 group">
              <div className="mt-1">
                <Cpu className="w-10 h-10 text-[#FF4D24]" />

              </div>
              <div className="max-w-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2 mt-2 underline decoration-[#FF4D24] decoration-2 underline-offset-4 lg:no-underline">Hardware</h3>
                <p className="text-gray-500 leading-relaxed">
                  We will come to you and investigate all the aspects of your
                  environment and objectives and design a system and we will
                  procure the right equipment.
                </p>
              </div>
            </div>



            <div className="flex items-start gap-2 mb-2 group">
              <div className="mt-1">
                <Code className="w-10 h-10 text-[#FF4D24]" />
              </div>
              <div className="max-w-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2 mt-2 underline decoration-[#FF4D24] decoration-2 underline-offset-4 lg:no-underline">Software</h3>
                <p className="text-gray-500 leading-relaxed">
                  We will figure out exactly what you like to be able to do and
                  what your needs are. We will design the most efficient routes
                  and find the right software and applications for you and your
                  staff.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2 mb-2 group">
              <div className="mt-1">
                <Wifi className="w-10 h-10 text-[#FF4D24]" />
              </div>
              <div className="max-w-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2 mt-2 underline decoration-[#FF4D24] decoration-2 underline-offset-4 lg:no-underline">Network</h3>
                <p className="text-gray-500 leading-relaxed">
                  We will put it together and make it all work in your small or
                  big network. Whether if your concern is to access your
                  system remotely or protection against attacks or your data
                  safety we will implement the measures.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Grayscale Image */}
        <div className="relative w-full h-[500px] lg:h-[700px]">
          <Image
            src="/about/about-home.webp" // Place image in public folder
            alt="Office workspace"
            fill
            className="object-cover grayscale"
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;