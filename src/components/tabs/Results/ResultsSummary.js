import React from 'react';
import useSearch from '../../../hooks/useSearch';

const ResultsSummary = () => {
  const { searchResults, searchQuery, filters } = useSearch();
  
  // Calculate average price
  const averagePrice = searchResults.length > 0
    ? searchResults.reduce((sum, pump) => sum + pump.price, 0) / searchResults.length
    : 0;
  
  // Calculate average efficiency
  const averageEfficiency = searchResults.length > 0
    ? searchResults.reduce((sum, pump) => sum + pump.efficiency, 0) / searchResults.length
    : 0;
  
  // Count ESG ratings
  const esgCounts = searchResults.reduce((counts, pump) => {
    counts[pump.esgRating] = (counts[pump.esgRating] || 0) + 1;
    return counts;
  }, {});
  
  // Calculate percentage of A+ and A ratings
  const topEsgPercentage = searchResults.length > 0
    ? ((esgCounts['A+'] || 0) + (esgCounts['A'] || 0)) / searchResults.length * 100
    : 0;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Results Summary</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-1">Search Query:</p>
            <p className="font-medium text-gray-900">{searchQuery || 'All Pumps'}</p>
          </div>
          
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-1">Applied Filters:</p>
            <div className="flex flex-wrap gap-2">
              {filters.pumpType && (
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  Type: {filters.pumpType.replace('-', ' ')}
                </span>
              )}
              {filters.esgRating && (
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  ESG: {filters.esgRating}+
                </span>
              )}
              {filters.energyRating && (
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                  Energy: {filters.energyRating}
                </span>
              )}
              {!filters.pumpType && !filters.esgRating && !filters.energyRating && (
                <span className="text-gray-500 text-xs">No filters applied</span>
              )}
            </div>
          </div>
        </div>
        
        <div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-xs text-gray-500">Results</p>
              <p className="text-xl font-bold text-gray-900">{searchResults.length}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-xs text-gray-500">Avg. Price</p>
              <p className="text-xl font-bold text-gray-900">₹{Math.round(averagePrice).toLocaleString()}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-xs text-gray-500">Avg. Efficiency</p>
              <p className="text-xl font-bold text-gray-900">{Math.round(averageEfficiency)}%</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-xs text-gray-500">Top ESG Rated</p>
              <p className="text-xl font-bold text-gray-900">{Math.round(topEsgPercentage)}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsSummary;