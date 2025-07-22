import React from 'react';
import Card from '../../common/ui/Card';
import Badge from '../../common/ui/Badge';

const EmergencySuppliers = ({ suppliers, loading, onContactSupplier }) => {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500 mb-4"></div>
        <p className="text-lg text-gray-600">Finding emergency suppliers...</p>
      </div>
    );
  }

  if (!suppliers || suppliers.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">No Emergency Suppliers Found</h3>
        <p className="text-gray-600">
          No emergency suppliers match your criteria. Try adjusting your filters or expanding your search area.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {suppliers.map(supplier => (
        <Card key={supplier.id} className="p-4 border-l-4 border-red-500">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <h3 className="text-lg font-semibold text-gray-900">{supplier.name}</h3>
                <Badge color="red" className="ml-2">24/7</Badge>
              </div>
              
              <p className="text-sm text-gray-600 mt-1">{supplier.location}</p>
              
              <div className="flex items-center mt-2">
                <div className="flex items-center text-yellow-500 mr-4">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span className="ml-1 text-sm font-medium">{supplier.rating}</span>
                  <span className="ml-1 text-xs text-gray-500">({supplier.reviews})</span>
                </div>
                
                <div className="flex items-center text-gray-500 mr-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span className="ml-1 text-sm">{supplier.distance} km</span>
                </div>
                
                <div className="flex items-center text-green-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="ml-1 text-sm">{supplier.responseTime} hr response</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1 mt-2">
                {supplier.specialties.map(specialty => (
                  <Badge key={specialty} color="blue" size="sm">
                    {specialty.replace('-', ' ')}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => onContactSupplier(supplier)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-all flex items-center justify-center"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                Contact Now
              </button>
              <a 
                href={`tel:${supplier.contact.phone}`}
                className="text-gray-600 text-sm text-center hover:text-gray-900"
              >
                {supplier.contact.phone}
              </a>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default EmergencySuppliers;