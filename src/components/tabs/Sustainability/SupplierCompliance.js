import React from 'react';
import Card from '../../common/ui/Card';
import Badge from '../../common/ui/Badge';

const SupplierCompliance = ({ data }) => {
  if (!data) return null;

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

  // Calculate compliance percentage
  const compliancePercentage = Math.round((data.compliant / data.total) * 100);

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Supplier ESG Compliance</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center mb-4">
            <div className="text-3xl font-bold text-gray-900">{compliancePercentage}%</div>
            <div className="ml-2 text-sm text-gray-600">Compliant Suppliers</div>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between text-xs text-gray-600 mb-1">
              <span>Compliance Status</span>
              <span>{data.compliant} of {data.total} suppliers</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-600 h-2 rounded-full" 
                style={{ width: `${compliancePercentage}%` }}
              ></div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-green-50 p-3 rounded-lg">
              <div className="text-lg font-bold text-green-700">{data.compliant}</div>
              <div className="text-xs text-green-600">Compliant</div>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg">
              <div className="text-lg font-bold text-yellow-700">{data.inProgress}</div>
              <div className="text-xs text-yellow-600">In Progress</div>
            </div>
            <div className="bg-red-50 p-3 rounded-lg">
              <div className="text-lg font-bold text-red-700">{data.nonCompliant}</div>
              <div className="text-xs text-red-600">Non-Compliant</div>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Top ESG-Rated Suppliers</h4>
          <div className="space-y-3">
            {data.topSuppliers.map((supplier, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-gray-500 text-sm mr-2">{index + 1}.</span>
                  <span className="text-gray-900 font-medium">{supplier.name}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-700 text-sm mr-2">{supplier.score}</span>
                  <Badge color={getEsgColor(supplier.rating)}>
                    {supplier.rating}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SupplierCompliance;