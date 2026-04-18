// components/RecommendModal.js
"use client";

export default function RecommendModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      {/* Modal Container */}
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-4 relative overflow-hidden">
        
        {/* Header with Close Button */}
        <div className="p-6 text-center relative">
          <h2 className="text-2xl font-bold text-gray-800">Recommend Us to a Friend</h2>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
          >
            ✕
          </button>
        </div>

        {/* Form Body */}
        <form className="px-8 pb-8 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name</label>
            <input type="text" placeholder="Your Name" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Your Friend's Email</label>
            <input type="email" placeholder="Your Friend's Email" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
            <textarea placeholder="Message" rows={4} className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>

          <button className="w-full bg-[#ff5733] text-white font-bold py-3 rounded hover:bg-[#e64a19] transition-colors">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}