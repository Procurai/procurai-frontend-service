import React from 'react';

const Navigation = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      {/* Navigation content will be implemented later */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex space-x-8 overflow-x-auto">
          <button className="flex items-center space-x-2 py-4 px-2 tab-active transition-colors whitespace-nowrap">
            <span className="font-medium">Smart Finder</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;