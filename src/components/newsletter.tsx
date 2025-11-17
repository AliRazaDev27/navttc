import React from "react";
import { Mail } from "lucide-react";

const NewsletterSection: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 mt-20 mb-20">
      <div className="bg-black text-white rounded-2xl py-12 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
        
        
        <div className="text-[28px] md:text-[32px] font-extrabold leading-tight tracking-wide">
          <h2>STAY UPTO DATE ABOUT</h2>
          <h2>OUR LATEST OFFERS</h2>
        </div>

        
        <div className="flex flex-col gap-4 w-full md:w-[45%]">
          
    
          <div className="flex items-center bg-white text-black rounded-full px-4 py-3 gap-3">
            <Mail className="w-5 h-5 text-gray-500" />
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full outline-none"
            />
          </div>

          
          <button className="bg-white text-black rounded-full hover:bg-black hover:text-white hover:border border-white py-3 w-full font-semibold  transition cursor-pointer">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
