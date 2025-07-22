import React from 'react';
import { ComparisonProvider } from '../../../context/ComparisonContext';
import ComparisonSummary from './ComparisonSummary';
import ComparisonTable from './ComparisonTable';
import AddToComparisonForm from './AddToComparisonForm';

const Comparison = () => {
  return (
    <ComparisonProvider>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Compare Pumps</h2>
          <p className="text-lg text-gray-600 mt-2">
            Compare different pump options side by side to make informed procurement decisions
          </p>
        </div>
        
        <AddToComparisonForm />
        <ComparisonSummary />
        <ComparisonTable />
      </div>
    </ComparisonProvider>
  );
};

export default Comparison;