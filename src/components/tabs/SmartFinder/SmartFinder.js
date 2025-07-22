import React from 'react';

const SmartFinder = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-3 sm:space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Find the Perfect Pump with AI</h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Access comprehensive specifications from 15,000+ pumps across India. AI analyzes 
          real-time availability, pricing, compliance data, and ESG sustainability metrics from 500+ leading Indian suppliers.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
          <span className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-1 sm:mr-2"></span>15,000+ Products</span>
          <span className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-1 sm:mr-2"></span>500+ Suppliers</span>
          <span className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-1 sm:mr-2"></span>Real-time Pricing</span>
          <span className="flex items-center"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-1 sm:mr-2"></span>ESG Verified</span>
        </div>
      </div>

      {/* Search Interface */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
        <div className="relative">
          <svg className="absolute left-3 sm:left-4 top-3 sm:top-4 w-5 sm:w-6 h-5 sm:h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <input
            type="text"
            placeholder="Need energy-efficient centrifugal pump for textile mill..."
            className="w-full pl-10 sm:pl-14 pr-4 py-3 sm:py-4 text-base sm:text-lg border-2 border-gray-200 rounded-lg sm:rounded-xl focus:border-blue-500 focus:outline-none"
          />
          <div className="absolute right-3 sm:right-4 top-3 sm:top-4 flex items-center space-x-2">
            <span className="text-xs text-gray-500 hidden sm:inline">⌘ + K</span>
          </div>
        </div>

        {/* Search Button */}
        <button
          className="w-full bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg hover:from-green-700 hover:via-blue-700 hover:to-purple-700 transition-all"
        >
          <span className="hidden sm:inline">Find Perfect Sustainable Pumps with AI</span>
          <span className="sm:hidden">Search with AI</span>
        </button>
      </div>
    </div>
  );
};

export default SmartFinder;