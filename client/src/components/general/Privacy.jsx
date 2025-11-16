import React from "react";

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

      <p className="text-lg mb-4">
        We value your privacy and are committed to protecting your personal
        information. This privacy policy outlines how we collect, use, and
        safeguard your data when you use our website.
      </p>

      <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
      <p className="text-lg mb-4">
        We may collect personal details such as your name, email address, login
        information, and usage data to provide a better user experience.
      </p>

      <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Data</h2>
      <ul className="list-disc pl-6 text-lg mb-4 space-y-2">
        <li>To improve the performance of our website</li>
        <li>To ensure secure user authentication</li>
        <li>To enhance communication features</li>
        <li>To maintain service quality</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">3. Data Protection</h2>
      <p className="text-lg mb-4">
        We use industry-standard encryption and security measures to ensure that
        your information remains safe and protected from unauthorized access.
      </p>

      <h2 className="text-2xl font-semibold mb-3">4. Third-Party Sharing</h2>
      <p className="text-lg mb-4">
        We do NOT sell, trade, or share your personal information with any third
        parties unless required by law.
      </p>

      <h2 className="text-2xl font-semibold mb-3">
        5. Changes to Privacy Policy
      </h2>
      <p className="text-lg mb-4">
        We may update this privacy policy from time to time. Any changes will be
        reflected on this page with updated revision dates.
      </p>

      <p className="text-lg">
        If you have any questions regarding this policy, feel free to contact
        us through our Contact page.
      </p>
    </div>
  );
}
