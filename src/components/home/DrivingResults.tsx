import React from 'react';
// Import the specific icons from lucide-react
import { 
  Trophy, Medal, 
  Users, Gem, 
  PhoneCall, Headset, 
  Sparkles, Rocket, 
  Lightbulb, Flame, 
  Puzzle, Settings, 
  Timer, Zap, 
  Heart, Infinity 
} from 'lucide-react';

const features = [
  { title: "Quality Driven Approach", icon: Trophy, hoverIcon: Medal, color: "primary" },
  { title: "Transparent Work Culture", icon: Users, hoverIcon: Gem, color: "black" },
  { title: "High Standards For Customer Service", icon: PhoneCall, hoverIcon: Headset, color: "primary" },
  { title: "Passion For Perfection", icon: Sparkles, hoverIcon: Rocket, color: "black" },
  { title: "Innovative Thinking", icon: Lightbulb, hoverIcon: Flame, color: "primary" },
  { title: "Problem Solving Skills", icon: Puzzle, hoverIcon: Settings, color: "black" },
  { title: "Commitment to Timely Delivery", icon: Timer, hoverIcon: Zap, color: "primary" },
  { title: "Focus on Long Term Relationships", icon: Heart, hoverIcon: Infinity, color: "black" },
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
          {features.map((item, index) => {
            // Assign icons to variables for easier rendering
            const Icon = item.icon;
            const HoverIcon = item.hoverIcon;

            return (
              <div 
                key={index} 
                className="group relative bg-white p-10 rounded-2xl shadow-sm border border-gray-light 
                           hover:shadow-xl hover:-translate-y-1 transition-all duration-500 cursor-pointer 
                           flex flex-col items-center justify-center overflow-hidden"
              >
                {/* Animated Icon Container */}
                <div 
                  className={`w-20 h-20 mb-6 rounded-full bg-gray-light flex items-center justify-center 
                             transition-all duration-500 transform group-hover:rotate-12 ${
                               item.color === 'primary' 
                               ? 'group-hover:bg-primary text-primary group-hover:text-white' 
                               : 'group-hover:bg-black text-black group-hover:text-white'
                             }`}
                >
                  
                  {/* Initial Icon */}
                  <div className="transition-all duration-300 group-hover:hidden">
                    <Icon size={32} strokeWidth={2} />
                  </div>

                  {/* Hover Icon */}
                  <div className="hidden group-hover:block animate-bounce">
                    <HoverIcon size={32} strokeWidth={2} />
                  </div>
                </div>

                <h3 className={`text-gray-dark font-bold text-sm uppercase tracking-wide transition-colors ${
                  item.color === 'primary' ? 'group-hover:text-black' : 'group-hover:text-primary'
                }`}>
                  {item.title}
                </h3>
                
                {/* Bottom decorative bar */}
                <div 
                  className={`absolute bottom-0 left-0 w-full h-1 bg-transparent transition-all duration-500 ${
                    item.color === 'primary' ? 'group-hover:bg-primary' : 'group-hover:bg-black'
                  }`} 
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}