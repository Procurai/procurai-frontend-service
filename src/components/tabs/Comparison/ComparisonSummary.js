import React from 'react';
import { useComparison } from '../../../context/ComparisonContext';

const ComparisonSummary = () => {
  const { comparedItems, clearAll } = useComparison();
  
  if (comparedItems.length === 0) {
    return null;
  }

  // Find the most efficient pump
  const mostEfficient = [...comparedItems].sort((a, b) => b.efficiency - a.efficiency)[0];
  
  // Find the most cost-effective pump (lowest price)
  const mostCostEffective = [...comparedItems].sort((a, b) => a.price - b.price)[0];
  
  // Find the pump with the best ESG rating
  const esgOrder = { 'A+': 4, 'A': 3, 'B+': 2, 'B': 1 };
  const bestEsg = [...comparedItems].sort((a, b) => esgOrder[b.esgRating] - esgOrder[a.esgRating])[0];
  
  // Find the pump with the fastest delivery
  const fastestDelivery = [...comparedItems].sort((a, b) => a.deliveryTime - b.deliveryTime)[0];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Comparison Summary</h3>
        <button 
          onClick={clearAll}
          className="text-red-600 hover:text-red-800 text-sm font-medium"
        >
          Clear All
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-xs text-green-700 font-medium">Most Efficient</p>
          <p className="text-lg font-bold text-gray-900">{mostEfficient.name}</p>
          <p className="text-sm text-gray-600">{mostEfficient.efficiency}% Efficiency</p>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-xs text-blue-700 font-medium">Most Cost-Effective</p>
          <p className="text-lg font-bold text-gray-900">{mostCostEffective.name}</p>
          <p className="text-sm text-gray-600">₹{mostCostEffective.price.toLocaleString()}</p>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg">
          <p className="text-xs text-purple-700 font-medium">Best ESG Rating</p>
          <p className="text-lg font-bold text-gray-900">{bestEsg.name}</p>
          <p className="text-sm text-gray-600">ESG {bestEsg.esgRating}</p>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-lg">
          <p className="text-xs text-yellow-700 font-medium">Fastest Delivery</p>
          <p className="text-lg font-bold text-gray-900">{fastestDelivery.name}</p>
          <p className="text-sm text-gray-600">{fastestDelivery.deliveryTime} days</p>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSummary;