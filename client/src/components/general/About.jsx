const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10 md:px-32">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">About Us</h1>

      <p className="text-lg text-gray-700 leading-relaxed">
        Welcome to <strong>GyanPath</strong> — a Learning Management System created by our team  
        to help students and educators connect, learn, and grow.  
        Our mission is to make online learning simple, accessible, and effective.
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
        Together, we have designed and developed this platform with passion, teamwork,  
        and a strong vision of transforming the learning experience.
      </p>
    </div>
  );
};

export default About;
