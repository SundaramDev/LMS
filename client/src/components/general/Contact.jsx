const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10 md:px-32">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Contact Us</h1>

      <p className="text-lg text-gray-700 mb-6">
        Feel free to reach out to our team for any support, feedback, or collaboration.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-gray-800">Team Contact Details</h2>

      <ul className="list-disc ml-6 text-gray-700 text-lg space-y-2">
        <li>Email: <strong>gyanpath.team@gmail.com</strong></li>
        <li>Phone: <strong>+91 98765 43210</strong></li>
        <li>Location: Hubballi, Karnataka, India</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">Team Members</h2>

      <ul className="list-disc ml-6 text-gray-700 text-lg space-y-1">
        <li>Likhith</li>
        <li>Sundaram</li>
        <li>Abhishek</li>
        <li>Doni</li>
        <li>Sam Mishra</li>
      </ul>
    </div>
  );
};

export default Contact;
