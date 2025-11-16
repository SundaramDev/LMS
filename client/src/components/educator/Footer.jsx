import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50 border-t mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between">

        {/* Left Section */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <img
            className="w-20 opacity-90 hover:opacity-100 transition"
            src={assets.logo}
            alt="logo"
          />

          <div className="hidden md:block h-7 w-px bg-gray-400/40"></div>

          <p className="text-xs md:text-sm text-gray-500 text-center md:text-left">
            © 2024 GyanPath. All Rights Reserved.  
            <br className="md:hidden" />
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 mt-6 md:mt-0">
          {/* One reusable circle button */}
          <a
            href="#"
            className="w-9 h-9 rounded-full bg-white/70 shadow-sm border border-gray-200 
            flex items-center justify-center backdrop-blur-md hover:scale-110 
            transition-all hover:shadow-md"
          >
            <img src={assets.facebook_icon} alt="facebook_icon" className="w-5 h-5" />
          </a>

          <a
            href="#"
            className="w-9 h-9 rounded-full bg-white/70 shadow-sm border border-gray-200 
            flex items-center justify-center backdrop-blur-md hover:scale-110 
            transition-all hover:shadow-md"
          >
            <img src={assets.twitter_icon} alt="twitter_icon" className="w-5 h-5" />
          </a>

          <a
            href="#"
            className="w-9 h-9 rounded-full bg-white/70 shadow-sm border border-gray-200 
            flex items-center justify-center backdrop-blur-md hover:scale-110 
            transition-all hover:shadow-md"
          >
            <img src={assets.instagram_icon} alt="instagram_icon" className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="w-full border-t border-gray-300/30"></div>

      {/* Bottom Disclaimer */}
      <div className="py-4 text-center text-xs text-gray-500">
        Crafted with ❤️ for learners worldwide.
      </div>
    </div>
  );
};

export default Footer;
