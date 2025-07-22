import React, { useState, useEffect } from 'react';
import OEMSearch from './OEMSearch';
import OEMFilter from './OEMFilter';
import OEMList from './OEMList';
import ProductReleases from './ProductReleases';
import api from '../../../services/api';

const OEMInsights = () => {
  const [oems, setOEMs] = useState([]);
  const [releases, setReleases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [releasesLoading, setReleasesLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    specialty: '',
    esgRating: '',
    location: ''
  });
  const [selectedOEM, setSelectedOEM] = useState(null);

  useEffect(() => {
    loadOEMs();
    loadReleases();
  }, []);

  const loadOEMs = async () => {
    setLoading(true);
    try {
      const results = await api.oem.getAll();
      setOEMs(results);
    } catch (error) {
      console.error('Error loading OEMs:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadReleases = async (oemId = null) => {
    setReleasesLoading(true);
    try {
      const params = oemId ? { oemId } : {};
      const results = await api.oem.getNewReleases(params);
      setReleases(results);
    } catch (error) {
      console.error('Error loading releases:', error);
    } finally {
      setReleasesLoading(false);
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
      const results = await api.oem.getAll(searchParams);
      setOEMs(results);
    } catch (error) {
      console.error('Error searching OEMs:', error);
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
      const results = await api.oem.getAll(searchParams);
      setOEMs(results);
    } catch (error) {
      console.error('Error filtering OEMs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectOEM = async (oemId) => {
    setSelectedOEM(oemId);
    loadReleases(oemId);
  };

  const handleClearSelection = () => {
    setSelectedOEM(null);
    loadReleases();
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">OEM Insights</h2>
        <p className="text-lg text-gray-600 mt-2">
          Deep-dive into OEM offerings with comprehensive insights and ESG ratings
        </p>
      </div>
      
      <OEMSearch onSearch={handleSearch} />
      <OEMFilter onFilterChange={handleFilterChange} />
      
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-900">
            {loading ? 'Loading...' : `${oems.length} OEMs Found`}
          </h3>
          {selectedOEM && (
            <button 
              onClick={handleClearSelection}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              ← Back to All OEMs
            </button>
          )}
        </div>
        
        <OEMList 
          oems={oems} 
          loading={loading} 
          onSelectOEM={handleSelectOEM} 
        />
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-6">
        <ProductReleases 
          releases={releases} 
          loading={releasesLoading} 
        />
      </div>
    </div>
  );
};

export default OEMInsights;