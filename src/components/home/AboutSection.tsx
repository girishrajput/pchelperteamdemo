import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="bg-white min-h-screen py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Column: Content */}
        <div className="flex flex-col space-y-8">
          
          {/* Header Area */}
          <div className="space-y-4">
            <div className="w-12 h-1.5 bg-[#FF4D24]" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              What is <br /> 
              <span className="inline-block mt-1">PCHelperTeam?</span>
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
            <div className="flex items-start gap-5 group">
              <div className="mt-1">
                {/* Custom Gear Icon */}
                <svg 
                  className="w-10 h-10 text-[#FF4D24]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="max-w-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2 underline decoration-[#FF4D24] decoration-2 underline-offset-4 lg:no-underline">Hardware</h3>
                <p className="text-gray-500 leading-relaxed">
                  We will come to you and investigate all the aspects of your
                  environment and objectives and design a system and we will
                  procure the right equipment.
                </p>
              </div>
            </div>

            {/* Software Item */}
            <div className="flex items-start gap-5">
              <div className="w-10" /> {/* Spacer to align with icon above */}
              <div className="max-w-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2 underline decoration-[#FF4D24] decoration-2 underline-offset-4 lg:no-underline">Software</h3>
                <p className="text-gray-500 leading-relaxed">
                  We will figure out exactly what you like to be able to do and
                  what your needs are. We will design the most efficient routes
                  and find the right software and applications for you and your
                  staff.
                </p>
              </div>
            </div>

            {/* Network Item */}
            <div className="flex items-start gap-5">
              <div className="w-10" /> {/* Spacer */}
              <div className="max-w-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2 underline decoration-[#FF4D24] decoration-2 underline-offset-4 lg:no-underline">Network</h3>
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