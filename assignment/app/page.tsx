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

  // Fetch all companies on mount
  useEffect(() => {
    const fetchCompanies = async () => {
      const res = await fetch("/api/companies");
      const data = await res.json();
      setCompanies(data.companies);
    };
    fetchCompanies();
  }, []);

  const fetchCompanyDetails = async (id: number) => {
    const res = await fetch(`/api/companies?id=${id}`);
    const data: SelectedCompany = await res.json();
    setSelectedCompany(data);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center p-6">
      <header className="w-full max-w-4xl p-4 bg-white shadow-md rounded-md mb-6">
        <h1 className="text-xl font-bold text-center">Company Directory</h1>
      </header>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {companies.map((company) => (
          <button
            key={company.id}
            onClick={() => fetchCompanyDetails(company.id)}
            className="bg-white p-4 shadow-md rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
          >
            <h2 className="text-lg font-semibold">{company.name}</h2>
          </button>
        ))}
      </div>

      {selectedCompany && (
        <div className="w-full max-w-4xl p-6 bg-white shadow-md rounded-md">
          <h2 className="text-2xl font-bold mb-4">{selectedCompany.company.name}</h2>
          <p className="text-gray-700 mb-6">{selectedCompany.company.details}</p>
          <h3 className="text-lg font-semibold mb-2">Directors</h3>
          <ul className="list-disc pl-5">
            {selectedCompany.directors.map((director) => (
              <li key={director.id} className="text-gray-800">
                {director.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
