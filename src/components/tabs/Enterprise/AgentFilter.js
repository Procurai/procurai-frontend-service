import React, { useState } from 'react';

const AgentFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    type: '',
    status: ''
  });

  const handleFilterChange = (filterType, value) => {
    const newFilters = {
      ...filters,
      [filterType]: value
    };
    
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const resetFilters = {
      type: '',
      status: ''
    };
    
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Filter Agents</h3>
        <button 
          onClick={clearFilters}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          Clear All
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Agent Type</label>
          <select 
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            value={filters.type}
            onChange={(e) => handleFilterChange('type', e.target.value)}
          >
            <option value="">All Types</option>
            <option value="procurement">Procurement</option>
            <option value="analysis">Analysis</option>
            <option value="legal">Legal</option>
            <option value="inventory">Inventory</option>
            <option value="logistics">Logistics</option>
            <option value="finance">Finance</option>
            <option value="compliance">Compliance</option>
            <option value="market">Market Intelligence</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
          <select 
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
          >
            <option value="">All Statuses</option>
            <option value="active">Active</option>
            <option value="maintenance">Maintenance</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AgentFilter;