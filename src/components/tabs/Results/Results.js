import React from 'react';
import { SearchProvider } from '../../../context/SearchContext';
import SearchResults from './SearchResults';
import ResultsFilter from './ResultsFilter';
import ResultsSummary from './ResultsSummary';

const Results = () => {
  return (
    <SearchProvider>
      <div className="space-y-6">
        <ResultsSummary />
        <ResultsFilter />
        <SearchResults />
      </div>
    </SearchProvider>
  );
};

export default Results;