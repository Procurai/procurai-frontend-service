import React from 'react';
import Card from '../../common/ui/Card';
import Badge from '../../common/ui/Badge';

const SparesList = ({ spares, loading }) => {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mb-4"></div>
        <p className="text-lg text-gray-600">Loading spare parts...</p>
      </div>
    );
  }

  if (spares.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">No Spare Parts Found</h2>
        <p className="text-gray-600 mb-6">
          We couldn't find any spare parts matching your criteria. Try adjusting your filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {spares.map(spare => (
        <Card key={spare.id} className="spare-card">
          <div className="p-4">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold text-gray-900">{spare.name}</h3>
              {spare.inStock ? (
                <Badge color="green" className="stock-badge">In Stock</Badge>
              ) : (
                <Badge color="yellow" className="stock-badge">On Order</Badge>
              )}
            </div>
            
            <p className="text-sm text-gray-600 mb-4">{spare.description}</p>
            
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="text-sm">
                <span className="text-gray-500">Category:</span>
                <span className="font-medium ml-1">{spare.category.replace('-', ' ')}</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-500">Material:</span>
                <span className="font-medium ml-1">{spare.material.replace('-', ' ')}</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-500">Delivery:</span>
                <span className="font-medium ml-1">{spare.deliveryTime} days</span>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-1">Compatible with:</p>
              <div className="flex flex-wrap gap-1">
                {spare.compatibility.map(type => (
                  <Badge key={type} color="blue" size="sm">
                    {type === 'all' ? 'All Types' : type.replace('-', ' ')}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold text-gray-900">₹{spare.price.toLocaleString()}</div>
            </div>
            
            <div className="mt-4 flex space-x-2">
              <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-all">
                Add to Cart
              </button>
              <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition-all">
                Details
              </button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default SparesList;