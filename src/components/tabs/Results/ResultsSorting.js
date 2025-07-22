import React, { useState } from 'react';
import useSearch from '../../../hooks/useSearch';

const ResultsSorting = () => {
  const { searchResults, setSearchResults } = useSearch();
  const [sortOption, setSortOption] = useState('relevance');

  const handleSortChange = (e) => {
    const option = e.target.value;
    setSortOption(option);
    
    // Check if searchResults exists and is an array
    if (!searchResults || !Array.isArray(searchResults) || searchResults.length === 0) {
      return;
    }
    
    // Create a copy of the search results to sort
    const sortedResults = [...searchResults];
    
    // Sort based on the selected option
    switch (option) {
      case 'price-low':
        sortedResults.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sortedResults.sort((a, b) => b.price - a.price);
        break;
      case 'efficiency':
        sortedResults.sort((a, b) => b.efficiency - a.efficiency);
        break;
      case 'esg':
        // Sort by ESG rating (A+ > A > B+ > B)
        const esgOrder = { 'A+': 4, 'A': 3, 'B+': 2, 'B': 1 };
        sortedResults.sort((a, b) => esgOrder[b.esgRating] - esgOrder[a.esgRating]);
        break;
      case 'delivery':
        sortedResults.sort((a, b) => a.deliveryTime - b.deliveryTime);
        break;
      default:
        // 'relevance' - no sorting needed, this is the default order
        break;
    }
    
    // Update the search results with the sorted array
    setSearchResults(sortedResults);
  };

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center">
        <svg className="w-5 h-5 text-gray-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path>
        </svg>
        <span className="text-sm text-gray-700">Sort by:</span>
      </div>
      <select 
        className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
        value={sortOption}
        onChange={handleSortChange}
      >
        <option value="relevance">Relevance</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="efficiency">Efficiency</option>
        <option value="esg">ESG Rating</option>
        <option value="delivery">Delivery Time</option>
      </select>
    </div>
  );
};

export default ResultsSorting;