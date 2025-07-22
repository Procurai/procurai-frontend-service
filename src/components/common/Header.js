import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-lg border-b border-blue-100 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* ProcurAI Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                {/* Diamond/Triangular Logo Shape */}
                <svg viewBox="0 0 100 100" className="w-12 h-12">
                  <defs>
                    <linearGradient id="logoGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#4ade80" }} />
                      <stop offset="50%" style={{ stopColor: "#22d3ee" }} />
                      <stop offset="100%" style={{ stopColor: "#3b82f6" }} />
                    </linearGradient>
                    <linearGradient id="logoGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: "#10b981" }} />
                      <stop offset="100%" style={{ stopColor: "#06b6d4" }} />
                    </linearGradient>
                  </defs>
                  {/* Main diamond shape */}
                  <path d="M50 10 L85 50 L50 90 L15 50 Z" fill="url(#logoGradient1)" opacity="0.9" />
                  {/* Inner triangular elements */}
                  <path d="M50 20 L70 45 L50 70 L30 45 Z" fill="url(#logoGradient2)" opacity="0.7" />
                  {/* Central highlight */}
                  <circle cx="50" cy="50" r="8" fill="white" opacity="0.9" />
                </svg>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 bg-clip-text text-transparent">ProcurAI</span>
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">ai</div>
                </div>
                <p className="text-sm text-gray-600 font-medium">FUTURE AGENTICS</p>
              </div>
            </div>
            <div className="flex items-center ml-6 pl-6 border-l border-gray-200">
              <div className="india-flag w-6 h-4 rounded-sm mr-2"></div>
              <span className="text-xs text-gray-500 font-medium">India Market</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {/* ESG Status Indicator */}
            <div className="flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full notification-badge"></div>
              <span className="text-xs text-green-700 font-medium">ESG Tracking Active</span>
            </div>
            {/* Live Status Indicator */}
            <div className="flex items-center space-x-2 bg-blue-50 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-blue-500 rounded-full notification-badge"></div>
              <span className="text-xs text-blue-700 font-medium">Live Data Active</span>
            </div>
            <div className="relative">
              <svg className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-5 5v-5zM5 19h10a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">P</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;