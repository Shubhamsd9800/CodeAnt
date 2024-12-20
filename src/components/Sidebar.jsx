import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCode,
  faCloud,
  faGear,
  faPhone,
  faRightFromBracket,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../images/Logo1.png";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ userName, isOpen, onClose }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const menuItems = [
    { label: "Repositories", icon: <FontAwesomeIcon icon={faHouse} />, isBlue: true },
    { label: "AI Code Review", icon: <FontAwesomeIcon icon={faCode} /> },
    { label: "Cloud Security", icon: <FontAwesomeIcon icon={faCloud} /> },
    { label: "How to Use", icon: <FontAwesomeIcon icon={faBook} /> },
    { label: "Settings", icon: <FontAwesomeIcon icon={faGear} /> },
  ];

  const bottomMenuItems = [
    { label: "Support", icon: <FontAwesomeIcon icon={faPhone} /> },
    { label: "Logout", icon: <FontAwesomeIcon icon={faRightFromBracket} />, action: handleLogout },
  ];

  return (
    <div
      className={`fixed lg:relative top-0 left-0 z-50 w-full lg:w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      } lg:translate-y-0 h-1/2 lg:h-full`}
    >
      {/* Sidebar Content */}
      <div className="flex flex-col h-full">
        {/* Header Section */}
        <div className="p-4 border-b flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="CodeAnt AI" className="w-8 h-8" />
            <span className="font-medium">CodeAnt AI</span>
          </div>
          {/* Close Button (Visible only on mobile) */}
          {onClose && (
            <button onClick={onClose} className="text-gray-600 lg:hidden">
              ✕
            </button>
          )}
        </div>

        {/* Dropdown Button */}
        <div className="relative mt-2 px-4">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none"
          >
            <span className="truncate">{userName}</span>
            <svg
              className="w-5 h-5 ml-2 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 z-10 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg">
              <ul className="py-1 text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
                <li
                  onClick={handleLogout}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Navigation Menu */}
        <nav className="flex-grow p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 ${
                item.isBlue ? "bg-blue-500 text-white" : "text-gray-700"
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Bottom Section */}
        <div className="p-4 border-t space-y-1">
          {bottomMenuItems.map((item) => (
            item.label === "Logout" ? (
              // Logout button with navigation
              <button
                key={item.label}
                onClick={item.action}
                className="flex items-center space-x-2 w-full px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ) : (
              // Other bottom menu items
              <a
                key={item.label}
                href="#"
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </a>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
