import React, { useState } from 'react';
import useSearch from '../../../hooks/useSearch';
import Card from '../../common/ui/Card';
import Badge from '../../common/ui/Badge';
import api from '../../../services/api';
import ResultsSorting from './ResultsSorting';

const SearchResults = ({ onSelectForCompare = () => {} }) => {
  const { searchResults, setSearchResults, isSearching, searchQuery, filters } = useSearch();
  const [selectedPumps, setSelectedPumps] = useState({});

  // If no search has been performed yet, load all pumps
  React.useEffect(() => {
    if (searchResults.length === 0 && !isSearching && !searchQuery) {
      api.pumps.search({}).then(results => {
        setSearchResults(results);
      });
    }
  }, [searchResults.length, isSearching, searchQuery, setSearchResults]);

  // Helper function to get color for ESG rating
  const getEsgColor = (rating) => {
    switch (rating) {
      case 'A+': return 'green';
      case 'A': return 'blue';
      case 'B+': return 'yellow';
      case 'B': return 'orange';
      default: return 'gray';
    }
  };

  // Helper function to get color for energy rating
  const getEnergyColor = (rating) => {
    switch (rating) {
      case '5-star': return 'green';
      case '4-star': return 'blue';
      case '3-star': return 'yellow';
      default: return 'gray';
    }
  };

  if (isSearching) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mb-4"></div>
        <p className="text-lg text-gray-600">Searching for the perfect pumps...</p>
      </div>
    );
  }
  if (searchResults.length === 0 && !isSearching) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">No Results Found</h2>
        <p className="text-gray-600 mb-6">
          We couldn't find any pumps matching your criteria. Try adjusting your filters or search query.
        </p>
        {searchQuery && (
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
            <p className="font-medium">Search Query: "{searchQuery}"</p>
          </div>
        )}
      </div>
    );
  }

  // Handle pump selection for comparison
  const handleSelectPump = (pumpId) => {
    const newSelectedPumps = { ...selectedPumps };
    
    if (newSelectedPumps[pumpId]) {
      delete newSelectedPumps[pumpId];
    } else {
      newSelectedPumps[pumpId] = true;
    }
    
    setSelectedPumps(newSelectedPumps);
    onSelectForCompare(Object.keys(newSelectedPumps).length);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          Found {searchResults.length} Pumps
        </h2>
        <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span className="font-medium">96% Confidence • ESG Verified</span>
        </div>
      </div>
      
      <ResultsSorting />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {searchResults.map(pump => (
          <Card key={pump.id} className={`pump-card ${selectedPumps[pump.id] ? 'ring-2 ring-blue-500' : ''}`}>
            <div className="p-4">
              <div className="absolute top-2 right-2">
                <input 
                  type="checkbox" 
                  checked={!!selectedPumps[pump.id]}
                  onChange={() => handleSelectPump(pump.id)}
                  className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{pump.name}</h3>
                <Badge color={getEsgColor(pump.esgRating)} className="esg-badge">
                  ESG {pump.esgRating}
                </Badge>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">{pump.description}</p>
              
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="text-sm">
                  <span className="text-gray-500">Manufacturer:</span>
                  <span className="font-medium ml-1">{pump.manufacturer}</span>
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">Type:</span>
                  <span className="font-medium ml-1">{pump.type.replace('-', ' ')}</span>
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">Flow Rate:</span>
                  <span className="font-medium ml-1">{pump.flowRate} GPM</span>
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">Head:</span>
                  <span className="font-medium ml-1">{pump.head} ft</span>
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">Efficiency:</span>
                  <span className="font-medium ml-1">{pump.efficiency}%</span>
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">Power:</span>
                  <span className="font-medium ml-1">{pump.power} kW</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge color={getEnergyColor(pump.energyRating)}>
                  {pump.energyRating}
                </Badge>
                <Badge color="gray">
                  {pump.material.replace('-', ' ')}
                </Badge>
                {pump.certification.map(cert => (
                  <Badge key={cert} color="blue">
                    {cert.toUpperCase()}
                  </Badge>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold text-gray-900">₹{pump.price.toLocaleString()}</div>
                <div className="text-sm text-green-600">
                  <span className="font-medium">{pump.deliveryTime} days delivery</span>
                </div>
              </div>
              
              <div className="mt-4 flex space-x-2">
                <button className="flex-1 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white py-2 rounded-lg font-medium hover:from-green-700 hover:via-blue-700 hover:to-purple-700 transition-all">
                  View Details
                </button>
                <button 
                  onClick={() => handleSelectPump(pump.id)}
                  className={`px-3 py-2 rounded-lg font-medium transition-all ${selectedPumps[pump.id] ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}
                >
                  {selectedPumps[pump.id] ? 'Selected' : 'Compare'}
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;