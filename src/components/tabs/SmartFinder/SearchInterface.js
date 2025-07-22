import React from 'react';
import useSearch from '../../../hooks/useSearch';
import IndustryFilters from './IndustryFilters';
import AdvancedFilters from './AdvancedFilters';

const SearchInterface = () => {
  const { searchQuery, setSearchQuery, isSearching, performSearch } = useSearch();

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    performSearch(searchQuery);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
      <div className="relative">
        <svg className="absolute left-3 sm:left-4 top-3 sm:top-4 w-5 sm:w-6 h-5 sm:h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Need energy-efficient centrifugal pump for textile mill, 200 GPM, 150 ft head, Mumbai delivery, ESG A+ rating..."
          className="w-full pl-10 sm:pl-14 pr-4 py-3 sm:py-4 text-base sm:text-lg border-2 border-gray-200 rounded-lg sm:rounded-xl focus:border-blue-500 focus:outline-none"
        />
        <div className="absolute right-3 sm:right-4 top-3 sm:top-4 flex items-center space-x-2">
          <span className="text-xs text-gray-500 hidden sm:inline">⌘ + K</span>
        </div>
      </div>

      {/* Industry Filters */}
      <IndustryFilters />
      
      {/* Advanced Filters */}
      <AdvancedFilters />
      
      {/* Search Button */}
      <button
        onClick={handleSearch}
        disabled={isSearching}
        className="w-full bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg hover:from-green-700 hover:via-blue-700 hover:to-purple-700 transition-all"
      >
        {isSearching ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="hidden sm:inline">AI Analyzing India Market & ESG Data...</span>
            <span className="sm:hidden">Analyzing...</span>
          </span>
        ) : (
          <>
            <span className="hidden sm:inline">Find Perfect Sustainable Pumps with AI</span>
            <span className="sm:hidden">Search with AI</span>
          </>
        )}
      </button>

      {/* Market Intelligence Section */}
      <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-lg text-white p-4 sm:p-6">
        <h3 className="text-lg font-semibold mb-3 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
          Live India Market & ESG Intelligence
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <div className="flex items-center space-x-2 bg-white/10 rounded-lg p-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            </svg>
            <span className="text-xs">Energy-efficient pumps save ₹65K annually</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 rounded-lg p-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
            </svg>
            <span className="text-xs">78% suppliers now ESG A+ certified</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 rounded-lg p-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-xs">Fastest green delivery from Gujarat</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 rounded-lg p-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-xs">Carbon-neutral options available</span>
          </div>
        </div>
      </div>

      {/* Recent Searches */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-2">Recent Searches</h3>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs cursor-pointer hover:bg-blue-100 hover:text-blue-700">Centrifugal pump 100 GPM</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs cursor-pointer hover:bg-blue-100 hover:text-blue-700">Chemical resistant pump</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs cursor-pointer hover:bg-blue-100 hover:text-blue-700">Energy efficient pumps Mumbai</span>
        </div>
      </div>
    </div>
  );
};

export default SearchInterface;