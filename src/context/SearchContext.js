import React, { createContext, useState, useContext } from 'react';

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

  const search = (query) => {
    setSearchQuery(query);
    setIsSearching(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock results would be set here
      setSearchResults([]);
      setIsSearching(false);
    }, 2000);
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