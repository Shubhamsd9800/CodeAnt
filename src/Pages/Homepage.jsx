import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowsRotate, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; // Import faBars for menu icon
import RepositoryItem from '../components/RepositoryItem';
import Sidebar from '../components/Sidebar';
import Logo from "../images/Logo1.png"
const Homepage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state
  const [searchQuery, setSearchQuery] = useState('');

  const repositories = [
    { name: 'design-system', visibility: 'Public', language: 'React', size: '7320 KB', updatedAt: '1 day ago' },
    { name: 'codeant-ci-app', visibility: 'Private', language: 'JavaScript', size: '5871 KB', updatedAt: '2 days ago' },
    { name: 'analytics-dashboard', visibility: 'Private', language: 'Python', size: '4521 KB', updatedAt: '5 days ago' },
    { name: 'mobile-app', visibility: 'Public', language: 'Swift', size: '3032 KB', updatedAt: '3 days ago' },
    { name: 'e-commerce-platform', visibility: 'Private', language: 'Java', size: '6321 KB', updatedAt: '6 days ago' },
    { name: 'blog-website', visibility: 'Public', language: 'HTML/CSS', size: '1876 KB', updatedAt: '4 days ago' },
    { name: 'social-network', visibility: 'Private', language: 'PHP', size: '5432 KB', updatedAt: '7 days ago' },
  ];

  const filteredRepositories = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar Component */}
      <Sidebar 
        userName="Shubhamdas9800@" 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      <div className="flex-1 overflow-auto">
            {/* Menu Icon for Mobile */}
            <div className=' flex items-center  justify-between w-full p-5 lg:hidden'>
                <div className='flex gap-2'>
                    <img src={Logo} alt="" />
                    <h3 className=' text-2xl '>CodeAnt AI</h3>
                </div>
                <button 
                className="lg:hidden text-gray-600 focus:outline-none"
                onClick={() => setIsSidebarOpen(true)}
              >
                <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
            </div>
            
        <div className="max-w-6xl bg-white border-2 rounded-2xl shadow-sm mt-6 mx-auto px-4 py-6">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row items-start gap-4 lg:items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
             
              <div>
                <h1 className="text-2xl font-semibold">Repositories</h1>
                <p className="text-sm text-gray-600">33 total repositories</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {/* Refresh All Button */}
              <button 
                className="text-sm text-gray-600 bg-white border-2 rounded-xl p-2 hover:text-gray-900 flex items-center space-x-1"
                onClick={() => {}}
              >
                <FontAwesomeIcon icon={faArrowsRotate} />
                <span>Refresh All</span>
              </button>
              {/* Add Repository Button */}
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
                + Add Repository
              </button>
            </div>
          </div>

          {/* Search Input */}
          <div className="mb-6 relative">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="search"
              placeholder="Search Repositories"
              className="w-full lg:w-1/4 px-10 py-2 border border-gray-300 rounded-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Repository List */}
          <div className="bg-white rounded-lg shadow">
            {filteredRepositories.map((repo, index) => (
              <RepositoryItem key={index} {...repo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
