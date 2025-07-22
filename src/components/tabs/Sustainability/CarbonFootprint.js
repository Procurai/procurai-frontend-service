import React from 'react';
import Card from '../../common/ui/Card';

const CarbonFootprint = ({ data }) => {
  if (!data) return null;

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Carbon Footprint</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center mb-4">
            <div className="text-3xl font-bold text-gray-900">{data.current.toLocaleString()}</div>
            <div className="ml-2 text-sm text-gray-600">tons CO₂e</div>
          </div>
          
          <div className="flex items-center text-green-600">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path>
            </svg>
            <span className="font-medium">{data.reduction}% reduction from previous year</span>
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            <p>Previous year: {data.previous.toLocaleString()} tons CO₂e</p>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Breakdown</h4>
          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>Manufacturing</span>
                <span>{data.breakdown.manufacturing}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full" 
                  style={{ width: `${data.breakdown.manufacturing}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>Transportation</span>
                <span>{data.breakdown.transportation}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-600 h-2 rounded-full" 
                  style={{ width: `${data.breakdown.transportation}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>Operations</span>
                <span>{data.breakdown.operations}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-yellow-600 h-2 rounded-full" 
                  style={{ width: `${data.breakdown.operations}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>Other</span>
                <span>{data.breakdown.other}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-purple-600 h-2 rounded-full" 
                  style={{ width: `${data.breakdown.other}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CarbonFootprint;