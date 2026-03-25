import React from 'react';
import { Star, ShieldCheck, Zap, Globe, Award, Quote, ChevronRight } from 'lucide-react';

export default function RedCreativePCHelper() {
  return (
    <div className="min-h-screen bg-gray-light text-black font-sans selection:bg-primary selection:text-white">

      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* --- DYNAMIC HERO TITLE --- */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-light text-gray-dark text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Live Tech Support Ready
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-black leading-[0.85] uppercase">
            Fast. Reliable.<br /> 
            <span className="text-primary">Redefined.</span>
          </h1>
        </div>

        {/* --- RED BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-24">
          
          {/* Main Hero Stat */}
          <div className="md:col-span-3 bg-primary p-10 rounded-[2.5rem] text-white flex flex-col justify-between min-h-[300px] shadow-2xl relative overflow-hidden group">
            <Zap size={120} className="absolute -right-8 -top-8 text-black opacity-50 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
            <div className="relative z-10">
              <p className="text-gray-light font-black uppercase tracking-widest text-xs mb-2">Response Speed</p>
              <h2 className="text-8xl font-black italic leading-none">5 MIN</h2>
            </div>
            <p className="relative z-10 text-black bg-white inline-block self-start px-4 py-1 rounded-full text-xs font-bold uppercase tracking-tighter">
              Average Resolution Time
            </p>
          </div>
          
          {/* Secondary Stats */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-light shadow-sm flex flex-col justify-between group hover:border-primary transition-colors">
              <Globe className="text-primary group-hover:rotate-12 transition-transform" size={32} />
              <div>
                <h2 className="text-4xl font-black text-black">10k+</h2>
                <p className="text-gray-dark text-xs font-bold uppercase tracking-widest">Global Solves</p>
              </div>
            </div>

            <div className="bg-black p-8 rounded-[2.5rem] text-white flex flex-col justify-between relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
              <Award className="text-primary" size={32} />
              <div>
                <h2 className="text-4xl font-black italic">25+ YRS</h2>
                <p className="text-gray-light text-xs font-bold uppercase tracking-widest">Elite Mastery</p>
              </div>
            </div>

            <div className="sm:col-span-2 bg-white p-6 rounded-[2rem] border border-gray-light flex items-center justify-between group cursor-pointer hover:bg-black transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-light rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Star className="text-primary group-hover:text-white" fill="currentColor" size={20} />
                </div>
                <div>
                  <h4 className="font-black text-black group-hover:text-white leading-none">5-Star Excellence</h4>
                  <p className="text-gray-dark group-hover:text-gray-light text-xs mt-1">Across Google & Yelp platforms</p>
                </div>
              </div>
              <ChevronRight className="text-gray-light group-hover:text-primary transition-all group-hover:translate-x-1" />
            </div>
          </div>
        </div>

        {/* --- REVIEW CARDS SECTION --- */}
        <div className="grid lg:grid-cols-3 gap-6">
          <ReviewCard 
            name="Ava Lorenn"
            platform="Google"
            text="My PC stopped working, and they were able to fit me in the same day! The price was fair and the service was beyond what I expected."
          />
          <ReviewCard 
            name="Steven S."
            platform="Yelp"
            text="Knowledgeable and helpful. He ran a full test on my PC and it was great. I highly recommend them for your technical needs."
            isDark
          />
          <ReviewCard 
            name="C. Lynn M."
            platform="Yelp"
            text="He quickly resolved my Outlook connectivity issues after I spent hours on calls with others. Made the right call."
          />
        </div>
      </section>
    </div>
  );
}

function ReviewCard({ name, text, platform, isDark = false }: { name: string, text: string, platform: string, isDark?: boolean }) {
  return (
    <div className={`p-8 rounded-[2.5rem] transition-all hover:-translate-y-2 duration-300 border shadow-sm ${
      isDark ? 'bg-black border-gray-dark' : 'bg-white border-gray-light'
    }`}>
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-white">
            {name[0]}
          </div>
          <div>
            <h4 className={`font-black tracking-tight ${isDark ? 'text-white' : 'text-black'}`}>{name}</h4>
            <span className="text-[10px] text-gray-dark font-bold uppercase tracking-widest">{platform} Review</span>
          </div>
        </div>
        <Quote size={20} className={isDark ? 'text-gray-dark' : 'text-gray-light'} />
      </div>
      
      <div className="flex text-primary gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
      </div>

      <p className={`text-sm leading-relaxed font-medium mb-6 ${isDark ? 'text-gray-light italic' : 'text-gray-dark'}`}>
        &quot;{text}&quot;
      </p>

      <div className={`pt-6 border-t ${isDark ? 'border-gray-dark' : 'border-gray-light'} flex items-center gap-2`}>
        <ShieldCheck size={14} className="text-primary" />
        <span className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-gray-light' : 'text-gray-dark'}`}>
          Verified Case Solved
        </span>
      </div>
    </div>
  );
}