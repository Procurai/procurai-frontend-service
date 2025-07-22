import React from 'react';
import useSearch from '../../../hooks/useSearch';

const IndustryFilters = () => {
  const { filters, updateFilter } = useSearch();
  
  const industries = [
    { id: 'water', name: 'Water Supply', icon: '💧', description: 'Municipal, Industrial', esg: 'A+' },
    { id: 'chemical', name: 'Chemical Process', icon: '⚗️', description: 'Pharma, Petrochemical', esg: 'A' },
    { id: 'textile', name: 'Textile Mills', icon: '🧵', description: 'Cotton, Synthetic', esg: 'B+' },
    { id: 'food', name: 'Food & Dairy', icon: '🥛', description: 'Sanitary, 3A Certified', esg: 'A+' },
    { id: 'mining', name: 'Mining & Quarrying', icon: '⛏️', description: 'Coal, Iron Ore, Limestone', esg: 'B' },
    { id: 'power', name: 'Power Generation', icon: '⚡', description: 'Thermal, Nuclear, Hydro', esg: 'A' },
    { id: 'oil-gas', name: 'Oil & Gas', icon: '🛢️', description: 'Upstream, Downstream', esg: 'B+' },
    { id: 'steel', name: 'Steel & Metal', icon: '🏗️', description: 'Integrated, Secondary', esg: 'B' }
  ];

  const handleFilterClick = (industryId) => {
    updateFilter('industry', industryId === filters.industry ? null : industryId);
  };

  const getEsgBadgeColor = (esg) => {
    switch(esg) {
      case 'A+': return 'green';
      case 'A': return 'blue';
      case 'B+': return 'yellow';
      case 'B': return 'orange';
      default: return 'gray';
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Quick Industry Filters</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {industries.map(industry => (
          <button
            key={industry.id}
            onClick={() => handleFilterClick(industry.id)}
            className={`p-4 border-2 ${
              filters.industry === industry.id 
                ? 'filter-active' 
                : 'border-gray-200 hover:border-blue-500 hover:bg-blue-50'
            } rounded-xl transition-colors`}
          >
            <div className="text-2xl mb-2">{industry.icon}</div>
            <div className="font-medium text-gray-700">{industry.name}</div>
            <div className="text-xs text-gray-500 mt-1">{industry.description}</div>
            <div className="flex items-center justify-center mt-2">
              <span className={`bg-${getEsgBadgeColor(industry.esg)}-100 text-${getEsgBadgeColor(industry.esg)}-700 text-xs px-2 py-1 rounded-full`}>
                ESG {industry.esg}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default IndustryFilters;