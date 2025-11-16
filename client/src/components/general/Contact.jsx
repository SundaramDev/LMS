import React, { useState } from "react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

// ------------------------------------
// 1. Main Contact Component
// ------------------------------------
export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto p-4 sm:p-8" aria-labelledby="contact-heading">
      <header className="text-center mb-12">
        <h1 id="contact-heading" className="text-4xl sm:text-5xl font-extrabold text-gray-900">
          Reach Out to Us
        </h1>
        <p className="text-xl text-gray-600 mt-3 max-w-3xl mx-auto">
          Whether you have a technical question or just want to say hello, we are here to help.
        </p>
      </header>

      {/* 2. Grid Layout: Contact Info & Form */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Contact Information (Left Column) */}
        <div className="space-y-8 p-6 lg:p-10 bg-indigo-50 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-indigo-800 border-b pb-4 border-indigo-200">
            Our Details
          </h2>
          
          <ContactDetail
            icon={<EnvelopeIcon className="w-8 h-8 text-indigo-600" />}
            title="Support Email"
            description="Our primary communication channel."
            content={<a href="mailto:support@yourwebsite.com" className="text-lg font-medium text-indigo-700 hover:text-indigo-900 transition">support@yourwebsite.com</a>}
          />
          
          <ContactDetail
            icon={<PhoneIcon className="w-8 h-8 text-indigo-600" />}
            title="Phone Number"
            description="Available during business hours."
            content={<a href="tel:+919876543210" className="text-lg font-medium text-gray-900 hover:text-indigo-600 transition">+91 98765 43210</a>}
          />
          
          <ContactDetail
            icon={<MapPinIcon className="w-8 h-8 text-indigo-600" />}
            title="Location"
            description="Come visit our main office."
            content={<p className="text-lg text-gray-700">IIIT Dharwad, Karnataka, India</p>}
          />
        </div>

        {/* Contact Form (Right Column) */}
        <ContactForm />
      </div>

      <p className="text-center text-gray-500 mt-12 text-md">
        We strive to respond to all inquiries within **24 hours** on business days.
      </p>
    </section>
  );
}

// ------------------------------------
// 3. Contact Detail Helper Component (Improved)
// ------------------------------------
function ContactDetail({ icon, title, description, content }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 mb-1">{description}</p>
        {content}
      </div>
    </div>
  );
}

// ------------------------------------
// 4. Contact Form Component (New)
// ------------------------------------
function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send formData to a backend API here.
    console.log("Form Submitted:", formData);
    
    // Simulate API response
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    // Clear status after 5 seconds
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <div className="p-6 lg:p-10 bg-white rounded-2xl shadow-2xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
      
      {status === 'success' && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
          <p className="font-bold">Success!</p>
          <p>Your message has been sent. We will get back to you shortly.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}