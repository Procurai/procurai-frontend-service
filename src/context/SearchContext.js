import React, { createContext, useState, useContext } from 'react';
import api from '../services/api';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [filters, setFilters] = useState({
    industry: null,
    pumpType: null,
    flowRate: { min: null, max: null },
    head: { min: null, max: null },
    budget: { min: null, max: null },
    esgRating: null,
    energyRating: null,
    material: null,
    certification: null
  });

  const search = async (query) => {
    setSearchQuery(query);
    setIsSearching(true);
    
    try {
      // Get search parameters from filters
      const searchParams = {
        query,
        ...filters
      };
      
      // Call API to search pumps
      const results = await api.pumps.search(searchParams);
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching pumps:', error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const updateFilter = (filterType, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      industry: null,
      pumpType: null,
      flowRate: { min: null, max: null },
      head: { min: null, max: null },
      budget: { min: null, max: null },
      esgRating: null,
      energyRating: null,
      material: null,
      certification: null
    });
  };

  const value = {
    searchQuery,
    setSearchQuery,
    searchResults,
    isSearching,
    filters,
    search,
    updateFilter,
    clearFilters
  };

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export default SearchContext;