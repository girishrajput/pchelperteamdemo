import { MapPin, Phone, Mail } from 'lucide-react';

import InnerHeader from '@/components/InnerHeader'

const contactData = [
  {
    title: " 2370 Westwood Blvd Ste F Los Angeles, CA 90064",
    icon: <MapPin className="w-8 h-8 text-white" />,
    gradient: "from-red-600 to-indigo-600",
    content: (
      <p className="text-gray-500 text-sm leading-relaxed">
        Come visit us any time from 11 AM to 4 PM, from Monday to Friday, or by appointment outside of those hours.
      </p>
    ),
  },
  {
    title: "(310) 360-5060",
    icon: <Phone className="w-8 h-8 text-white" />,
    gradient: "from-green-400 to-emerald-500",
    content: (
      <div className="text-gray-500 text-sm space-y-1">
        <p>You can reach us by phone 24/7, including weekends and holidays.</p>
      </div>
    ),
  },
  {
    title: "info@pchelperteam.com",
    icon: <Mail className="w-8 h-8 text-white" />,
    gradient: "from-purple-400 to-pink-500",
    content: (
      <div className="text-sm">

        <p className="text-gray-500 mt-1">
          We will respond to your email within 30 minutes on business days.
        </p>
      </div>
    ),
  },
];

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <InnerHeader
        title="Contact Us"
        subtitle=""
      />

      <section>
        <div className="bg-gray-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">

            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                How Can We  <span className="text-red-500">Help?</span>
              </h2>
              <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
                Talk to one of our consultants today to learn how we can help you with your technology needs!
              </p>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-3 gap-8'>
              {contactData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 flex flex-col items-center text-center transition-transform hover:scale-105"
                >
                  {/* Icon Container with Shadow and Gradient */}
                  <div className={`mb-8 p-5 rounded-full bg-linear-to-br ${item.gradient} shadow-xl shadow-indigo-100`}>
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {item.title}
                  </h3>

                  {/* Content */}
                  <div className="grow">
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;