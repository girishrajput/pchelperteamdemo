import React from 'react';

const features = [
  { title: "Quality Driven Approach", icon: "🏆", hoverIcon: "🥇", color: "primary" },
  { title: "Transparent Work Culture", icon: "🤝", hoverIcon: "💎", color: "black" },
  { title: "High Standards For Customer Service", icon: "📞", hoverIcon: "🎧", color: "primary" },
  { title: "Passion For Perfection", icon: "✨", hoverIcon: "🚀", color: "black" },
  { title: "Innovative Thinking", icon: "💡", hoverIcon: "🔥", color: "primary" },
  { title: "Problem Solving Skills", icon: "🧩", hoverIcon: "⚙️", color: "black" },
  { title: "Commitment to Timely Delivery", icon: "⏱️", hoverIcon: "⚡", color: "primary" },
  { title: "Focus on Long Term Relationships", icon: "❤️", hoverIcon: "♾️", color: "black" },
];

export default function ResultsSection() {
  return (
    <section className="bg-gray-light py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
          Driving Results That Matter
        </h2>
        <p className="text-gray-dark max-w-2xl mx-auto mb-12">
          Turning ideas into meaningful achievements through our core values.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div 
              key={index} 
              // Added suppressHydrationWarning to handle extension attributes like bis_skin_checked
              suppressHydrationWarning={true}
              className="group relative bg-white p-10 rounded-2xl shadow-sm border border-gray-light 
                         hover:shadow-xl hover:-translate-y-1 transition-all duration-500 cursor-pointer 
                         flex flex-col items-center justify-center overflow-hidden"
            >
              {/* Animated Icon Container */}
              <div 
                suppressHydrationWarning={true}
                className={`w-20 h-20 mb-6 rounded-full bg-gray-light flex items-center justify-center 
                            transition-all duration-500 transform group-hover:rotate-12 group-hover:text-white ${item.color === 'primary' ? 'group-hover:bg-primary' : 'group-hover:bg-black'}`}
              >
                
                {/* Initial Icon */}
                <span className="text-4xl transition-all duration-300 group-hover:hidden">
                  {item.icon}
                </span>

                {/* Hover Icon */}
                <span className="text-4xl hidden group-hover:block animate-bounce">
                  {item.hoverIcon}
                </span>
              </div>

              <h3 className={`text-gray-dark font-bold text-sm uppercase tracking-wide transition-colors ${item.color === 'primary' ? 'group-hover:text-black' : 'group-hover:text-primary'}`}>
                {item.title}
              </h3>
              
              {/* Bottom decorative bar */}
              <div 
                suppressHydrationWarning={true}
                className={`absolute bottom-0 left-0 w-full h-1 bg-transparent transition-all duration-500 ${item.color === 'primary' ? 'group-hover:bg-primary' : 'group-hover:bg-black'}`} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}