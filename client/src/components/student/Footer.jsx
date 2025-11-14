import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gray-900 md:px-36 text-left w-full mt-10 text-white'>
      <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-20 py-10 border-b border-white/30'>
        
        {/* LOGO + INFO */}
        <div className='flex flex-col md:items-start items-center w-full'>
          <img src={assets.logo} alt="logo" className='mb-4' />
          <p className='mt-6 text-center md:text-left text-sm text-white/80'>
            GyanPath is dedicated to helping learners explore new skills, achieve their goals,  
            and grow their knowledge anytime, anywhere.
          </p>
        </div>

        {/* COMPANY LINKS */}
        <div className='flex flex-col md:items-start items-center w-full'>
          <h2 className='font-semibold text-white mb-5'>Company</h2>
          <ul className='flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>

        {/* TEAM MEMBERS */}
        <div className='flex flex-col md:items-start items-center w-full'>
          <h2 className='font-semibold text-white mb-5'>Team Members</h2>
          <ul className='text-sm text-white/80 md:space-y-2 space-y-1'>
            <li>Likhith</li>
            <li>Sundaram</li>
            <li>Abhishek</li>
            <li>Doni</li>
            <li>Sam Mishra</li>
          </ul>
        </div>

        {/* CONTACT INFORMATION */}
        <div className='flex flex-col md:items-start items-center w-full'>
          <h2 className='font-semibold text-white mb-5'>Contact Details</h2>
          <ul className='text-sm text-white/80 md:space-y-2 space-y-1'>
            <li>Email: gyanpath.team@gmail.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: Hubballi, Karnataka, India</li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT */}
      <p className='py-4 text-center text-xs md:text-sm text-white/60'>
        © 2025 GyanPath. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
