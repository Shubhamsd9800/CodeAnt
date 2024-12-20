import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons'; // Import the database icon

const RepositoryItem = ({ name, visibility, language, size, updatedAt }) => {
  const getLanguageColor = (lang) => {
    const colors = {
      React: 'bg-blue-500',
      Python: 'bg-yellow-500',
      Swift: 'bg-orange-500',
      Java: 'bg-red-500',
      JavaScript: 'bg-yellow-400',
      'HTML/CSS': 'bg-purple-500',
      PHP: 'bg-indigo-500'
    };
    return colors[lang] || 'bg-gray-500';
  };

  return (
    <div className="border-b border-gray-200 py-4 hover:bg-gray-100 p-5">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-900">{name}</span>
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                visibility === 'Private' ? 'bg-gray-100 text-gray-600' : 'bg-blue-100 text-blue-600'
              }`}
            >
              {visibility}
            </span>
          </div>
          <div className="flex items-center gap-4 mt-1">
            <span className="text-sm text-gray-600">{language}</span>
            <span className={`w-2 h-2 rounded-full ${getLanguageColor(language)}`} />
            {/* Add the database icon before size */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FontAwesomeIcon icon={faDatabase} />
              <span>{size}</span>
            </div>
            <span className="text-sm text-gray-600">Updated {updatedAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepositoryItem;
