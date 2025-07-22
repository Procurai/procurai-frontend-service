import React, { useState } from 'react';
import useSearch from '../../../hooks/useSearch';

const AdvancedFilters = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const { filters, updateFilter } = useSearch();

  const toggleAdvancedFilters = () => {
    setShowAdvanced(!showAdvanced);
  };

  const handlePumpTypeChange = (e) => {
    updateFilter('pumpType', e.target.value || null);
  };

  const handleFlowRateChange = (type, value) => {
    updateFilter('flowRate', {
      ...filters.flowRate,
      [type]: value || null
    });
  };

  const handleHeadChange = (type, value) => {
    updateFilter('head', {
      ...filters.head,
      [type]: value || null
    });
  };

  const handleBudgetChange = (type, value) => {
    updateFilter('budget', {
      ...filters.budget,
      [type]: value || null
    });
  };

  const handleSelectChange = (filterType, value) => {
    updateFilter(filterType, value || null);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Advanced Filters</h3>
        <button 
          onClick={toggleAdvancedFilters} 
          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
        >
          {showAdvanced ? 'Hide Advanced Options' : 'Show Advanced Options'}
        </button>
      </div>
      
      {showAdvanced && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Pump Type</label>
              <select 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                value={filters.pumpType || ''}
                onChange={handlePumpTypeChange}
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Flow Rate Range</label>
              <div className="flex space-x-2">
                <input 
                  type="number" 
                  placeholder="Min GPM" 
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  value={filters.flowRate.min || ''}
                  onChange={(e) => handleFlowRateChange('min', e.target.value)}
                />
                <input 
                  type="number" 
                  placeholder="Max GPM" 
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  value={filters.flowRate.max || ''}
                  onChange={(e) => handleFlowRateChange('max', e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Head Range</label>
              <div className="flex space-x-2">
                <input 
                  type="number" 
                  placeholder="Min ft" 
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  value={filters.head.min || ''}
                  onChange={(e) => handleHeadChange('min', e.target.value)}
                />
                <input 
                  type="number" 
                  placeholder="Max ft" 
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  value={filters.head.max || ''}
                  onChange={(e) => handleHeadChange('max', e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
              <div className="flex space-x-2">
                <input 
                  type="number" 
                  placeholder="Min ₹" 
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  value={filters.budget.min || ''}
                  onChange={(e) => handleBudgetChange('min', e.target.value)}
                />
                <input 
                  type="number" 
                  placeholder="Max ₹" 
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  value={filters.budget.max || ''}
                  onChange={(e) => handleBudgetChange('max', e.target.value)}
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">ESG Rating</label>
              <select 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                value={filters.esgRating || ''}
                onChange={(e) => handleSelectChange('esgRating', e.target.value)}
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
                onChange={(e) => handleSelectChange('energyRating', e.target.value)}
              >
                <option value="">Any Rating</option>
                <option value="5-star">5-Star BEE</option>
                <option value="4-star">4-Star BEE</option>
                <option value="3-star">3-Star BEE</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Material</label>
              <select 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                value={filters.material || ''}
                onChange={(e) => handleSelectChange('material', e.target.value)}
              >
                <option value="">Any Material</option>
                <option value="cast-iron">Cast Iron</option>
                <option value="stainless-steel">Stainless Steel</option>
                <option value="bronze">Bronze</option>
                <option value="plastic">Plastic/Polymer</option>
                <option value="hastelloy">Hastelloy</option>
                <option value="duplex">Duplex Steel</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Certification</label>
              <select 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                value={filters.certification || ''}
                onChange={(e) => handleSelectChange('certification', e.target.value)}
              >
                <option value="">Any Certification</option>
                <option value="bis">BIS Certified</option>
                <option value="isi">ISI Mark</option>
                <option value="ce">CE Marked</option>
                <option value="atex">ATEX Certified</option>
                <option value="3a">3A Sanitary</option>
                <option value="api">API Standard</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedFilters;