import React, { useState } from 'react';
import useSearch from '../../../hooks/useSearch';

const ResultsFilter = () => {
  const { filters, updateFilter, clearFilters } = useSearch();
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <svg className="w-5 h-5 text-gray-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
          </svg>
          <h3 className="text-lg font-semibold text-gray-900">Refine Results</h3>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={clearFilters}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Clear All
          </button>
          <button 
            onClick={toggleFilters}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
          >
            {showFilters ? (
              <>
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                </svg>
                Hide Filters
              </>
            ) : (
              <>
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
                Show Filters
              </>
            )}
          </button>
        </div>
      </div>
      
      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Pump Type</label>
            <select 
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              value={filters.pumpType || ''}
              onChange={(e) => updateFilter('pumpType', e.target.value || null)}
            >
              <option value="">All Types</option>
              <option value="centrifugal">Centrifugal</option>
              <option value="positive-displacement">Positive Displacement</option>
              <option value="submersible">Submersible</option>
              <option value="vertical-turbine">Vertical Turbine</option>
              <option value="self-priming">Self-Priming</option>
              <option value="multistage">Multistage</option>
              <option value="magnetic-drive">Magnetic Drive</option>
              <option value="peristaltic">Peristaltic</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">ESG Rating</label>
            <select 
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              value={filters.esgRating || ''}
              onChange={(e) => updateFilter('esgRating', e.target.value || null)}
            >
              <option value="">Any Rating</option>
              <option value="A+">A+ Only</option>
              <option value="A">A and Above</option>
              <option value="B+">B+ and Above</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Energy Rating</label>
            <select 
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              value={filters.energyRating || ''}
              onChange={(e) => updateFilter('energyRating', e.target.value || null)}
            >
              <option value="">Any Rating</option>
              <option value="5-star">5-Star BEE</option>
              <option value="4-star">4-Star BEE</option>
              <option value="3-star">3-Star BEE</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultsFilter;