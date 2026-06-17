import { MapPin, Phone, Mail } from 'lucide-react';
import InnerHeader from '@/components/InnerHeader'

const contactData = [
  {
    title: "(310) 360-5060",
    // Tel protocol for mobile dialers
    link: "tel:+13103605060",
    icon: <Phone className="w-8 h-8 text-white" />,
    gradient: "bg-black",
    content: (
      <div className="text-gray-dark text-sm space-y-1">
        <p>For immediate response 24/7 including weekends and holidays call us.</p>
      </div>
    ),
  },

  {
    title: "info@pchelperteam.com",
    // Mailto protocol for email clients
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=info@pchelperteam.com",
    icon: <Mail className="w-8 h-8 text-white" />,
    gradient: "bg-primary",
    content: (
      <div className="text-sm">
        <p className="text-gray-dark mt-1">
           For less urgent matters and tech-support needs and general info email us.
        </p>
      </div>
    ),
  },

  {
    title: "2370 Westwood Blvd. Ste. F Los Angeles, CA 90064",
    // Link to Google Maps search for this specific address
    link: "https://maps.app.goo.gl/n4h8vwAPC2Eort6v6",
    icon: <MapPin className="w-8 h-8 text-white" />,
    gradient: "bg-primary",
    content: (
      <p className="text-gray-dark text-sm leading-relaxed">
        Visit us 11 Am to 6 PM with an appointment, If you require help or service just call us now.
      </p>
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
        <div className="bg-gray-200 pt-10 pb-0 px-4">
          <div className="max-w-6xl mx-auto">

            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight">
                How Can We <span className="text-primary">Help?</span>
              </h2>
              <p className="mt-2 text-lg text-gray-dark max-w-3xl mx-auto">
                Talk to one of our consultants today to learn how we can help you with your technology needs!
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {contactData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-10 shadow-sm border border-gray-light flex flex-col items-center text-center transition-transform hover:scale-105"
                >
                  {/* Icon Container with Shadow and Gradient */}
                  <div className={`mb-8 p-5 rounded-full ${item.gradient} shadow-xl`}>
                    {item.icon}
                  </div>

                  {/* Functional Linked Title */}
                  <h3 className="text-xl font-bold text-black mb-4">
                    <a
                      href={item.link}
                      // Open external map link in new tab, but phone/email in same window
                      target={item.link.startsWith('http') ? "_blank" : "_self"}
                      // rel="noopener noreferrer"
                      className="hover:text-primary transition-colors duration-200"
                    >
                      {item.title}
                    </a>
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