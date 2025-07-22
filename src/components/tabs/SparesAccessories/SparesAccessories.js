import React, { useState, useEffect } from 'react';
import SparesSearch from './SparesSearch';
import SparesFilter from './SparesFilter';
import SparesList from './SparesList';
import api from '../../../services/api';

const SparesAccessories = () => {
  const [spares, setSpares] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    compatibility: '',
    inStock: undefined,
    price: { min: '', max: '' }
  });

  useEffect(() => {
    loadSpares();
  }, []);

  const loadSpares = async () => {
    setLoading(true);
    try {
      const results = await api.spares.search({});
      setSpares(results);
    } catch (error) {
      console.error('Error loading spares:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query) => {
    setSearchQuery(query);
    setLoading(true);
    try {
      const searchParams = {
        query,
        ...filters
      };
      const results = await api.spares.search(searchParams);
      setSpares(results);
    } catch (error) {
      console.error('Error searching spares:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = async (newFilters) => {
    setFilters(newFilters);
    setLoading(true);
    try {
      const searchParams = {
        query: searchQuery,
        ...newFilters
      };
      const results = await api.spares.search(searchParams);
      setSpares(results);
    } catch (error) {
      console.error('Error filtering spares:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Spares & Accessories</h2>
        <p className="text-lg text-gray-600 mt-2">
          Comprehensive Pump Accessories, Spare Parts & Consumables with ESG Ratings
        </p>
      </div>
      
      <SparesSearch onSearch={handleSearch} />
      <SparesFilter onFilterChange={handleFilterChange} />
      
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-900">
            {loading ? 'Loading...' : `${spares.length} Items Found`}
          </h3>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Availability</option>
              <option>Popularity</option>
            </select>
          </div>
        </div>
        
        <SparesList spares={spares} loading={loading} />
      </div>
    </div>
  );
};

export default SparesAccessories;