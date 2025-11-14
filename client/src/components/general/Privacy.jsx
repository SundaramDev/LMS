const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10 md:px-32">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Privacy Policy</h1>

      <p className="text-lg text-gray-700 leading-relaxed">
        We value your privacy. This page explains how GyanPath collects, uses, and protects 
        your personal information while using our platform.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">Information We Collect</h2>
      <p className="text-gray-700 text-lg">
        • User profile details  
        • Course activity and progress  
        • Basic login information  
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">How We Use Information</h2>
      <p className="text-gray-700 text-lg">
        • To provide and improve learning experience  
        • To secure user accounts  
        • To offer personalized content  
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">Our Team</h2>
      <ul className="list-disc ml-6 text-gray-700 text-lg space-y-1">
        <li>Likhith</li>
        <li>Sundaram</li>
        <li>Abhishek</li>
        <li>Doni</li>
        <li>Sam Mishra</li>
      </ul>

      <p className="mt-8 text-gray-700 text-lg">
        If you have any questions regarding your data or privacy, you may contact us anytime.
      </p>
    </div>
  );
};

export default Privacy;
