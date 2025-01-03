/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";

type Company = {
  id: number;
  name: string;
  details: string;
};

type Director = {
  id: number;
  name: string;
};

type SelectedCompany = {
  company: Company;
  directors: Director[];
};

export default function Home() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<SelectedCompany | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); 
  const hardcodedCompanies: Company[] = [
    { id: 1, name: 'TechCorp', details: 'TechCorp is a leading innovator in the tech industry, constantly pushing boundaries with groundbreaking software and hardware solutions. With a focus on artificial intelligence, cloud computing, and cybersecurity, TechCorp is redefining how businesses and consumers interact with technology' },
    { id: 2, name: 'HealthInc', details: 'HealthInc is revolutionizing the healthcare landscape by developing cutting-edge solutions that improve patient care and enhance healthcare provider efficiency. Through telemedicine, AI-driven diagnostics, and personalized health platforms, HealthInc is making healthcare more accessible and affordable for all.' },
    { id: 3, name: 'EcoSolutions', details: 'EcoSolutions is committed to sustainable innovation, offering eco-friendly products and services that promote environmental conservation. From renewable energy solutions to waste reduction technologies, EcoSolutions is at the forefront of the green revolution, helping businesses and individuals reduce their carbon footprint and contribute to a healthier planet..' }
  ];

  const hardcodedDirectors: Director[] = [
    { id: 1, name: 'Alice Johnson' },
    { id: 2, name: 'Bob Smith' },
    { id: 3, name: 'Clara Lee' },
    { id: 4, name: 'David Kim' }
  ]
  useEffect(() => {
    // Simulate fetching the companies
    setCompanies(hardcodedCompanies);
  }, []);
  const fetchCompanyDetails = (id: number) => {
    setLoading(true);
    setError(null);
    try {
      // Find the selected company and its directors from the hardcoded data
      const company = hardcodedCompanies.find((company) => company.id === id);
      const directors = hardcodedDirectors.filter((director) => director.id === id);

      if (!company) throw new Error('Company not found.');

      setSelectedCompany({ company, directors });
    } catch (err: any) {
      setError(err.message || 'An unknown error occurred.');
    } finally {
      setLoading(false);
    }
  };
  // Fetch all companies on component mount
  // useEffect(() => {
  //   const fetchCompanies = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await fetch("/api/companies");
  //       if (!res.ok) throw new Error("Failed to fetch companies.");
  //       const data = await res.json();
  //       setCompanies(data.companies);
  //     } catch (err: any) {
  //       setError(err.message || "An unknown error occurred.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchCompanies();
  // }, []);

  // const fetchCompanyDetails = async (id: number) => {
  //   setLoading(true);
  //   setError(null);
  //   try {
  //     const res = await fetch(`/api/companies?id=${id}`);
  //     if (!res.ok) throw new Error("Failed to fetch company details.");
  //     const data: SelectedCompany = await res.json();
  //     setSelectedCompany(data);
  //   } catch (err: any) {
  //     setError(err.message || "An unknown error occurred.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-gray-60 text-grey shadow-md">
  <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
    {/* Logo */}
    <div className="flex items-center space-x-2">
      <img
        className="w-10"
        src="https://www.registerkaro.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.77348f99.png&w=96&q=75"
        alt="Logo"
      />
      <h1 className="text-2xl font-bold">
        Register<span className="text-orange-500">Karo</span>
      </h1>
    </div>

    {/* Menu for larger screens */}
    <ul className="hidden md:flex space-x-4">
      <li>
        <a href="#home" className="hover:underline">
          Home
        </a>
      </li>
      <li>
        <a href="#about" className="hover:underline">
          About
        </a>
      </li>
      <li>
        <a href="#services" className="hover:underline">
          Services
        </a>
      </li>
      <li>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </li>
      <li>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-orange-600">
          Talk to an Expert
        </button>
      </li>
    </ul>

    {/* Hamburger Menu for smaller screens */}
    <button
      className="md:hidden text-grey focus:outline-none"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
        />
      </svg>
    </button>
  </div>

  {/* Dropdown Menu for smaller screens */}
  {isMenuOpen && (
    <ul className="md:hidden bg-gray-60 text-grey px-4 py-2 space-y-2">
      <li>
        <a href="#home" className="block hover:underline">
          Home
        </a>
      </li>
      <li>
        <a href="#about" className="block hover:underline">
          About
        </a>
      </li>
      <li>
        <a href="#services" className="block hover:underline">
          Services
        </a>
      </li>
      <li>
        <a href="#contact" className="block hover:underline">
          Contact
        </a>
      </li>
      <li>
        <button className="w-full bg-orange-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-orange-600">
          Talk to an Expert
        </button>
      </li>
    </ul>
  )}
</nav>


      {/* Header Section */}
      <header className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white p-12 text-center" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj0uH-9tSXpP1zwlPL-VdMixqfTOnatvpogQ&s")' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Your Trusted Partner for Compliance</h2>
          <p className="text-lg mb-6">
            An online business compliance platform that helps entrepreneurs and other individuals
            with various registrations, tax filings, and other legal matters.
          </p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-md shadow-md hover:bg-gray-100">
            Learn More
          </button>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="bg-white py-12">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
    {/* About Text */}
    <div className="md:w-1/2">
      <p className="text-orange-600 uppercase font-bold text-sm mb-2">
        Welcome to RegisterKaro.in
      </p>
      <h2 className="text-3xl font-bold mb-4">
        About <span className="text-orange-500">Register Karo</span>
      </h2>
      <p className="text-gray-700 mb-4">
        We have been using Intelegencia as our DevOps vendor for our field service applications
        over the last couple of years, and I’m extremely pleased with their performance, ability
        to execute, and willingness to adapt in our ever-changing environment.
      </p>
      <p className="text-gray-700">
        I would strongly recommend their services to any organization that is looking for solid,
        reliable, and predictable outcomes.
      </p>
      <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700">
        Learn More
      </button>
    </div>
    {/* About Image */}
    <div className="md:w-1/2 flex justify-center">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8cf69SG9jteBQuNobhxqVYumy700NPE15PQ&s"
        alt="Team at Register Karo"
        className="rounded-lg shadow-lg w-[400px] h-[300px] object-cover md:w-[500px] md:h-[350px]"
      />
    </div>
  </div>
</section>



      {/* Happy Clients Section */}
      <section id="happy-clients" className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6">Our Happy Clients</h2>
          <img
            src="/images/client.png"
            alt="Happy Clients"
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        {/* Display loading or error messages */}
        {loading && <p className="text-blue-500 mb-4">Loading...</p>}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <h3 className="text-2xl font-semibold mb-6">Company Directory</h3>
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {companies.map((company) => (
            <button
              key={company.id}
              onClick={() => fetchCompanyDetails(company.id)}
              className="bg-white p-4 shadow-md rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
            >
              <h2 className="text-lg font-semibold text-gray-800">{company.name}</h2>
            </button>
          ))}
        </div>

        {/* Selected Company Details */}
        {selectedCompany && (
          <div className="w-full max-w-4xl p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">{selectedCompany.company.name}</h2>
            <p className="text-gray-700 mb-6">{selectedCompany.company.details}</p>
            <h3 className="text-lg font-semibold mb-2">Directors</h3>
            <ul className="list-disc pl-5">
              {selectedCompany.directors.length > 0 ? (
                selectedCompany.directors.map((director) => (
                  <li key={director.id} className="text-gray-800">
                    {director.name}
                  </li>
                ))
              ) : (
                <p className="text-gray-500">No directors available for this company.</p>
              )}
            </ul>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#0d1321] text-[rgb(248,249,255)] p-8">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
    {/* About Section */}
    <div>
      <h4 className="font-bold mb-2">Register Karo</h4>
      <p>Helping businesses with compliance needs across the globe. From company registration to tax filing, we simplify the process for entrepreneurs.</p>
    </div>

    {/* Quick Links Section */}
    <div>
      <h4 className="font-bold mb-2">Quick Links</h4>
      <ul>
        <li>
          <a href="#home" className="hover:underline">Home</a>
        </li>
        <li>
          <a href="#services" className="hover:underline">Services</a>
        </li>
        <li>
          <a href="#about" className="hover:underline">About Us</a>
        </li>
        <li>
          <a href="#blog" className="hover:underline">Blog</a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">Contact</a>
        </li>
      </ul>
    </div>

    {/* Contact Information Section */}
    <div>
      <h4 className="font-bold mb-2">Contact Us</h4>
      <ul>
        <li>📍 123 Business Avenue, Tech City</li>
        <li>📞 +1-800-123-4567</li>
        <li>✉️ support@registerkaro.com</li>
        <li>
          <a href="#faq" className="hover:underline">FAQs</a>
        </li>
      </ul>
    </div>

    {/* Newsletter Subscription Section */}
    <div>
      <h4 className="font-bold mb-2">Subscribe to Our Newsletter</h4>
      <p>Get the latest updates and tips delivered to your inbox.</p>
      <form className="mt-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded-md w-full text-black"
        />
        <button
          type="submit"
          className="mt-2 bg-[rgb(248,249,255)] text-[#0d1321] px-4 py-2 rounded-md shadow-md hover:bg-gray-200"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
    <p>&copy; {new Date().getFullYear()} Register Karo. All rights reserved.</p>
    <p>
      <a href="#terms" className="hover:underline">Terms & Conditions</a> | 
      <a href="#privacy" className="hover:underline"> Privacy Policy</a>
    </p>
  </div>
</footer>


    </div>
  );
}
