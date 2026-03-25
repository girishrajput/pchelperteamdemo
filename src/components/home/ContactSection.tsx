'use client';

import { Mail, Phone, MessageSquare, User } from 'lucide-react';
import { sendEmail } from '../../app/actions';

export default function ContactSection() {

  async function handleAction(formData: FormData) {
    const result = await sendEmail(formData);
    if (result.success) {
      alert("Email sent to Girish!");
    } else {
      alert("Error: " + result.error);
    }
  }

  // Common styles for inputs to keep the code clean
  const inputStyles = "w-full p-3 rounded-lg border border-gray-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-gray-light";

  return (
    <section className="bg-gray-light py-20 px-6 lg:px-12 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* Left Side: Content & Social Icons */}
        <div className="lg:w-1/2">
          <h2 className="text-5xl font-bold text-black mb-6 leading-tight">
            Join Hands with Us
          </h2>
          <p className="text-gray-dark text-lg leading-relaxed mb-12 max-w-xl">
            With a strong and diversified web presence, PCHelperTeam. invites businesses
            and individuals from every industry vertical to collaborate, innovate, and
            create meaningful impact in the digital world.
          </p>

          <div className="flex gap-4">
            {[Mail, Phone, MessageSquare, User].map((Icon, idx) => (
              <div
                key={idx}
                className="w-12 h-12 rounded-full border border-gray-light flex items-center justify-center text-gray-dark hover:text-primary hover:border-primary hover:bg-white transition-all cursor-pointer shadow-sm"
              >
                <Icon size={20} strokeWidth={1.5} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Contact Form Card */}
        <div className="lg:w-1/2 w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-light">
            <h3 className="text-2xl font-bold text-black mb-8 text-center lg:text-left">
              Let&apos;s Talk About Your Idea
            </h3>

            <form action={handleAction} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className={inputStyles}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className={inputStyles}
                />
              </div>

              {/* NEW FIELDS: Phone and Website */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className={inputStyles}
                />
                <input
                  name="website"
                  type="url"
                  placeholder="Website (https://...)"
                  className={inputStyles}
                />
              </div>

              <select name="service" className={inputStyles}>
                <option value="">Select a Service</option>
                <option value="Web Development">Web Development</option>
                <option value="App Development">App Development</option>
              </select>

              <textarea 
                name="message" 
                placeholder="How can we help you?"
                rows={4}
                className={inputStyles}
              ></textarea>

              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-black text-white font-bold py-4 rounded-lg transition-colors shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}