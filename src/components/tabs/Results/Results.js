import React, { useState } from 'react';
import { SearchProvider } from '../../../context/SearchContext';
import SearchResults from './SearchResults';
import ResultsFilter from './ResultsFilter';
import ResultsSummary from './ResultsSummary';
import CompareButton from './CompareButton';

const Results = () => {
  const [selectedCount, setSelectedCount] = useState(0);

  const handleSelectForCompare = (count) => {
    setSelectedCount(count);
  };

  return (
    <SearchProvider>
      <div className="space-y-6">
        <ResultsSummary />
        <ResultsFilter />
        <SearchResults onSelectForCompare={handleSelectForCompare} />
        <CompareButton selectedCount={selectedCount} />
      </div>
    </SearchProvider>
  );
};

export default Results;