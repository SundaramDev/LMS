import React from "react";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>

      <p className="text-lg leading-relaxed mb-4">
        Welcome to our platform! We are a team of developers passionate about
        building modern, reliable, and user-friendly applications. Our mission
        is to provide seamless digital experiences that help people connect,
        collaborate, and communicate more efficiently.
      </p>

      <p className="text-lg leading-relaxed mb-4">
        This website demonstrates cutting-edge technology including:
      </p>

      <ul className="list-disc pl-6 text-lg mb-4 space-y-2">
        <li>Real-time communication</li>
        <li>Modern UI/UX design</li>
        <li>Secure authentication system</li>
        <li>Optimized frontend and backend architecture</li>
      </ul>

      <p className="text-lg leading-relaxed mb-4">
        Our team believes that innovation and creativity drive the future. We
        continuously upgrade our platform with new features and improvements.
      </p>

      <p className="text-lg leading-relaxed">
        Thank you for using our application! If you have any suggestions or
        feedback, feel free to reach out to us.
      </p>
    </div>
  );
}
