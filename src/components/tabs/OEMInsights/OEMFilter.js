import React, { useState } from 'react';

const OEMFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    specialty: '',
    esgRating: '',
    location: ''
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
      specialty: '',
      esgRating: '',
      location: ''
    };
    
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Filter OEMs</h3>
        <button 
          onClick={clearFilters}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          Clear All
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Specialty</label>
          <select 
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            value={filters.specialty}
            onChange={(e) => handleFilterChange('specialty', e.target.value)}
          >
            <option value="">All Specialties</option>
            <option value="centrifugal">Centrifugal</option>
            <option value="submersible">Submersible</option>
            <option value="multistage">Multistage</option>
            <option value="self-priming">Self-Priming</option>
            <option value="vertical-turbine">Vertical Turbine</option>
            <option value="positive-displacement">Positive Displacement</option>
            <option value="magnetic-drive">Magnetic Drive</option>
            <option value="solar">Solar</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">ESG Rating</label>
          <select 
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            value={filters.esgRating}
            onChange={(e) => handleFilterChange('esgRating', e.target.value)}
          >
            <option value="">All Ratings</option>
            <option value="A+">A+ Only</option>
            <option value="A">A and Above</option>
            <option value="B+">B+ and Above</option>
            <option value="B">B and Above</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <select 
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
          >
            <option value="">All Locations</option>
            <option value="Chennai">Chennai</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Indore">Indore</option>
            <option value="Kolkata">Kolkata</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default OEMFilter;