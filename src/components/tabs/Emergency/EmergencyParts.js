import React from 'react';
import Card from '../../common/ui/Card';
import Badge from '../../common/ui/Badge';

const EmergencyParts = ({ parts, loading }) => {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500 mb-4"></div>
        <p className="text-lg text-gray-600">Finding emergency parts...</p>
      </div>
    );
  }

  if (!parts || parts.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">No Emergency Parts Found</h3>
        <p className="text-gray-600">
          No emergency parts match your criteria. Try adjusting your filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {parts.map(part => (
        <Card key={part.id} className="p-4">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-base font-semibold text-gray-900">{part.name}</h3>
            <Badge color="red">Emergency</Badge>
          </div>
          
          <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
            <div>
              <span className="text-gray-500">Category:</span>
              <span className="font-medium ml-1">{part.category.replace('-', ' ')}</span>
            </div>
            <div>
              <span className="text-gray-500">Location:</span>
              <span className="font-medium ml-1">{part.location}</span>
            </div>
          </div>
          
          <div className="mb-3">
            <p className="text-xs text-gray-500 mb-1">Compatible with:</p>
            <div className="flex flex-wrap gap-1">
              {part.compatibility.map(type => (
                <Badge key={type} color="blue" size="sm">
                  {type === 'all' ? 'All Types' : type.replace('-', ' ')}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold text-gray-900">₹{part.price.toLocaleString()}</div>
            <div className="flex items-center text-green-600">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-sm font-medium">{part.deliveryTime}</span>
            </div>
          </div>
          
          <button className="mt-3 w-full bg-red-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-all">
            Order Now
          </button>
        </Card>
      ))}
    </div>
  );
};

export default EmergencyParts;