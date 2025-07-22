import React from 'react';
import SearchInterface from './SearchInterface';
import { SearchProvider } from '../../../context/SearchContext';

const SmartFinder = () => {
  return (
    <SearchProvider>
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

        {/* Search Interface Component */}
        <SearchInterface />
      </div>
    </SearchProvider>
  );
};

export default SmartFinder;