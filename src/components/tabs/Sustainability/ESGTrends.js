import React from 'react';
import Card from '../../common/ui/Card';

const ESGTrends = ({ trends }) => {
  if (!trends) return null;

  // Calculate chart dimensions
  const chartHeight = 200;
  const chartWidth = '100%';
  const months = trends.months;
  const monthCount = months.length;

  // Helper function to get path for trend line
  const getTrendPath = (values) => {
    // Scale values to fit chart height
    const maxValue = Math.max(...values);
    const scaledValues = values.map(val => chartHeight - (val / maxValue) * chartHeight);
    
    // Calculate x-step based on number of months
    const xStep = 100 / (monthCount - 1);
    
    // Create SVG path
    let path = `M 0,${scaledValues[0]}`;
    for (let i = 1; i < monthCount; i++) {
      path += ` L ${i * xStep},${scaledValues[i]}`;
    }
    
    return path;
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">ESG Performance Trends</h3>
      
      <div className="relative" style={{ height: `${chartHeight}px` }}>
        {/* Chart grid lines */}
        <div className="absolute inset-0 grid grid-cols-1 grid-rows-4 h-full w-full">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="border-t border-gray-200 w-full"></div>
          ))}
        </div>
        
        {/* SVG for trend lines */}
        <svg 
          viewBox={`0 0 100 ${chartHeight}`} 
          preserveAspectRatio="none" 
          className="absolute inset-0 h-full w-full"
        >
          {/* Environmental trend line */}
          <path 
            d={getTrendPath(trends.environmental)} 
            fill="none" 
            stroke="#10B981" 
            strokeWidth="2" 
          />
          
          {/* Social trend line */}
          <path 
            d={getTrendPath(trends.social)} 
            fill="none" 
            stroke="#3B82F6" 
            strokeWidth="2" 
          />
          
          {/* Governance trend line */}
          <path 
            d={getTrendPath(trends.governance)} 
            fill="none" 
            stroke="#8B5CF6" 
            strokeWidth="2" 
          />
        </svg>
        
        {/* Month labels */}
        <div className="absolute bottom-0 w-full flex justify-between text-xs text-gray-500">
          {months.map((month, i) => (
            <div key={i} style={{ left: `${(i / (monthCount - 1)) * 100}%` }} className="absolute transform -translate-x-1/2">
              {month}
            </div>
          ))}
        </div>
      </div>
      
      {/* Legend */}
      <div className="flex justify-center mt-8 space-x-6">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <span className="text-sm text-gray-700">Environmental</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
          <span className="text-sm text-gray-700">Social</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
          <span className="text-sm text-gray-700">Governance</span>
        </div>
      </div>
    </Card>
  );
};

export default ESGTrends;