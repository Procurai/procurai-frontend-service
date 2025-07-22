import React from 'react';
import Card from '../../common/ui/Card';

const ResourceMetrics = ({ waterData, energyData }) => {
  if (!waterData || !energyData) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Water Usage</h3>
        
        <div className="flex items-center mb-4">
          <div className="text-3xl font-bold text-gray-900">{(waterData.current / 1000000).toFixed(1)}</div>
          <div className="ml-2 text-sm text-gray-600">million liters</div>
        </div>
        
        <div className="flex items-center text-green-600 mb-4">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path>
          </svg>
          <span className="font-medium">{waterData.reduction}% reduction from previous year</span>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-600 mb-1">
            <span>Water Recycled</span>
            <span>{waterData.recycled}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full" 
              style={{ width: `${waterData.recycled}%` }}
            ></div>
          </div>
        </div>
        
        <div className="text-sm text-gray-600">
          <p>Previous year: {(waterData.previous / 1000000).toFixed(1)} million liters</p>
        </div>
      </Card>
      
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Energy Consumption</h3>
        
        <div className="flex items-center mb-4">
          <div className="text-3xl font-bold text-gray-900">{energyData.current.toLocaleString()}</div>
          <div className="ml-2 text-sm text-gray-600">MWh</div>
        </div>
        
        <div className="flex items-center text-green-600 mb-4">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path>
          </svg>
          <span className="font-medium">{energyData.reduction}% reduction from previous year</span>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-600 mb-1">
            <span>Renewable Energy</span>
            <span>{energyData.renewable}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-600 h-2 rounded-full" 
              style={{ width: `${energyData.renewable}%` }}
            ></div>
          </div>
        </div>
        
        <div className="text-sm text-gray-600">
          <p>Previous year: {energyData.previous.toLocaleString()} MWh</p>
        </div>
      </Card>
    </div>
  );
};

export default ResourceMetrics;