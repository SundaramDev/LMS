import React from "react";


export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>


      <p className="text-lg mb-4">
        We would love to hear from you! If you have any questions, suggestions,
        or feedback, feel free to reach out to us using the details below.
      </p>


      <div className="bg-gray-100 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-3">Support Email</h2>
        <p className="text-lg mb-2">📩 support@yourwebsite.com</p>


        <h2 className="text-2xl font-semibold mt-6 mb-3">Phone Number</h2>
        <p className="text-lg mb-2">📞 +91 98765 43210</p>


        <h2 className="text-2xl font-semibold mt-6 mb-3">Location</h2>
        <p className="text-lg">📍 IIIT Dharwad, Karnataka, India</p>
      </div>


      <p className="text-lg mt-6">
        Our team usually responds within 24 hours. Thank you for reaching out!
      </p>
    </div>
  );
}



