import React from "react";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="relative overflow-hidden w-full flex flex-col items-center justify-center 
      text-center pt-24 md:pt-40 pb-20 px-6 bg-gradient-to-b from-cyan-50 to-white">

      {/* Floating Blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-20 -left-16 w-60 h-60 bg-blue-200 rounded-full blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.4, scale: 1.2 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-10 -right-16 w-72 h-72 bg-cyan-200 rounded-full blur-3xl"
      />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-extrabold text-gray-800 leading-tight 
        text-3xl md:text-5xl max-w-3xl relative"
      >
        Shape Your Future With Courses  
        <span className="text-blue-600"> Tailored Just For You</span>

        <img
          src={assets.sketch}
          alt="sketch"
          className="hidden md:block absolute -bottom-7 right-0 w-32"
        />
      </motion.h1>

      {/* Sub text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-gray-600 max-w-xl mt-4 text-[15px] md:text-base"
      >
        Learn from world-class instructors, engage with hands-on content, and grow
        with a vibrant community that supports your journey every step of the way.
      </motion.p>

      {/* Search Bar with glass effect card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="mt-8 w-full max-w-xl backdrop-blur-xl bg-white/40 shadow-lg p-4 rounded-2xl"
      >
        <SearchBar />
      </motion.div>

      {/* Small badges / highlights */}
      <div className="flex gap-4 mt-8 flex-wrap justify-center">
        {["500+ Courses", "Top Instructors", "Career Focused", "Trusted by Students"].map(
          (item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="px-4 py-2 bg-blue-50 border border-blue-100 text-blue-700 
              rounded-full text-sm shadow-sm"
            >
              {item}
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};

export default Hero;
