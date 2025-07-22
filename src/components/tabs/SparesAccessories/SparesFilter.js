import React, { useState } from 'react';

const SparesFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: '',
    compatibility: '',
    inStock: undefined,
    price: { min: '', max: '' }
  });

  const handleFilterChange = (filterType, value) => {
    const newFilters = {
      ...filters,
      [filterType]: value
    };
    
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceChange = (type, value) => {
    const newPrice = {
      ...filters.price,
      [type]: value
    };
    
    const newFilters = {
      ...filters,
      price: newPrice
    };
    
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const resetFilters = {
      category: '',
      compatibility: '',
      inStock: undefined,
      price: { min: '', max: '' }
    };
    
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Filter Spare Parts</h3>
        <button 
          onClick={clearFilters}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          Clear All
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
          <select 
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="seals">Seals & Gaskets</option>
            <option value="impellers">Impellers</option>
            <option value="bearings">Bearings</option>
            <option value="shafts">Shafts & Sleeves</option>
            <option value="wear-parts">Wear Parts</option>
            <option value="couplings">Couplings</option>
            <option value="hydraulics">Hydraulic Parts</option>
            <option value="mountings">Mounting Hardware</option>
            <option value="instruments">Instruments</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Compatible With</label>
          <select 
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            value={filters.compatibility}
            onChange={(e) => handleFilterChange('compatibility', e.target.value)}
          >
            <option value="">All Pump Types</option>
            <option value="centrifugal">Centrifugal</option>
            <option value="submersible">Submersible</option>
            <option value="multistage">Multistage</option>
            <option value="self-priming">Self-Priming</option>
            <option value="vertical-turbine">Vertical Turbine</option>
            <option value="positive-displacement">Positive Displacement</option>
            <option value="magnetic-drive">Magnetic Drive</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
          <select 
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            value={filters.inStock === undefined ? '' : filters.inStock.toString()}
            onChange={(e) => {
              const value = e.target.value;
              handleFilterChange('inStock', value === '' ? undefined : value === 'true');
            }}
          >
            <option value="">All Items</option>
            <option value="true">In Stock</option>
            <option value="false">On Order</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
          <div className="flex space-x-2">
            <input 
              type="number" 
              placeholder="Min ₹" 
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
              value={filters.price.min}
              onChange={(e) => handlePriceChange('min', e.target.value)}
            />
            <input 
              type="number" 
              placeholder="Max ₹" 
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
              value={filters.price.max}
              onChange={(e) => handlePriceChange('max', e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SparesFilter;