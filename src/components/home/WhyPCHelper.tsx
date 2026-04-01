import React from 'react';
import { 
  Star, 
  Users 
} from 'lucide-react';

const PCHelperLanding = () => {
  return (
    /* Updated to light gray background and dark text for readability */
    <div className="bg-gray-200 text-gray-900 min-h-screen font-sans pt-16 pb-16">
      
      {/* --- Why PCHelper Section --- */}
      <section className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Why PCHelperTeam?</h1>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Over the years we have helped many organisations and this gives us the confidence to reach higher. 
          This motivates us to continue looking for new challenges in order to improve as professionals 
          and as a service company.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          <div className="flex flex-col items-center">
            <span className="text-orange-600 text-4xl font-bold">10k+</span>
            <p className="mt-2 font-semibold">Projects and Problems Solved</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-orange-600 text-4xl font-bold">5 Min</span>
            <p className="mt-2 font-semibold">Average Response Time</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-orange-600 text-4xl font-bold">5-Star</span>
            <p className="mt-2 font-semibold">Excellent Reviews Across Web</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-orange-600 text-4xl font-bold">25+ Years</span>
            <p className="mt-2 font-semibold">Supporting Home & Businesses</p>
          </div>
        </div>
      </section>

      {/* --- Reviews Section --- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Sidebar Badges */}
        <div className="lg:col-span-2 space-y-12">
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-bold mb-2">EXCELLENT</h3>
            <div className="flex justify-center lg:justify-start gap-1 text-gray-400 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} fill="#fbbf24" className="w-5 h-5 text-yellow-500" />)}
            </div>
            <p className="text-sm text-gray-500">Based on <span className="underline font-bold text-gray-900">27 reviews</span></p>
            <div className="mt-2 text-2xl font-bold text-gray-400">Google</div>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-xl font-bold mb-2">EXCELLENT</h3>
            <div className="flex justify-center lg:justify-start gap-1 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} fill="#fbbf24" className="w-5 h-5 text-yellow-500" />)}
            </div>
            <p className="text-sm text-gray-500">Based on <span className="underline font-bold text-gray-900">10 reviews</span></p>
            <div className="mt-2 text-red-600 font-black text-3xl italic">yelp*</div>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="lg:col-span-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {/* Google Review Card - Now White */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg relative shadow-sm border border-gray-300">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full" />
                    <div>
                      <p className="text-sm font-bold">User Name</p>
                      <p className="text-xs text-gray-500">1 year ago</p>
                    </div>
                  </div>
                  <div className="text-blue-600 text-lg font-bold">G</div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} fill="#3b82f6" className="w-3 h-3 text-blue-500" />)}
                </div>
                <p className="text-sm text-gray-700 line-clamp-4">
                  "I've had a problem with my Mac that I've literally been trying to fix for years. 
                  They were able to fit me in same day!"
                </p>
                <button className="text-xs text-gray-400 mt-4 hover:underline">Read more</button>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Yelp Review Card - Now White */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex flex-col">
                <div className="bg-white p-6 rounded-xl relative shadow-sm border border-gray-300 mb-4">
                   <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} fill="#fbbf24" className="w-3 h-3 text-yellow-500" />)}
                  </div>
                  <p className="text-sm text-gray-700 italic">
                    "Search no more! This team is the best in working on your computer needs. 
                    They were very helpful and attentive..."
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <button className="text-xs text-gray-400 hover:underline">read more</button>
                    <span className="text-red-600 font-bold italic text-sm">yelp*</span>
                  </div>
                  {/* Speech Bubble Tail - adjusted to white */}
                  <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white rotate-45 border-r border-b border-gray-300"></div>
                </div>
                <div className="flex items-center gap-3 ml-4">
                   <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-gray-500" />
                   </div>
                   <div>
                     <p className="text-xs font-bold uppercase">Steven S.</p>
                     <p className="text-[10px] text-gray-500">3/30/2026</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default PCHelperLanding;