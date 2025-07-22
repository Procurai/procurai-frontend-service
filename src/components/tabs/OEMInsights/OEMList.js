import React from 'react';
import Card from '../../common/ui/Card';
import Badge from '../../common/ui/Badge';

const OEMList = ({ oems, loading, onSelectOEM }) => {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mb-4"></div>
        <p className="text-lg text-gray-600">Loading OEM data...</p>
      </div>
    );
  }

  if (oems.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">No OEMs Found</h2>
        <p className="text-gray-600 mb-6">
          We couldn't find any OEMs matching your criteria. Try adjusting your filters.
        </p>
      </div>
    );
  }

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {oems.map(oem => (
        <Card key={oem.id} className="oem-card hover:shadow-xl transition-shadow">
          <div className="p-4">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold text-gray-900">{oem.name}</h3>
              <Badge color={getEsgColor(oem.esgRating)} className="esg-badge">
                ESG {oem.esgRating}
              </Badge>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">{oem.description}</p>
            
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="text-sm">
                <span className="text-gray-500">Location:</span>
                <span className="font-medium ml-1">{oem.location}</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-500">Established:</span>
                <span className="font-medium ml-1">{oem.established}</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-500">Market Share:</span>
                <span className="font-medium ml-1">{oem.marketShare}%</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-500">Service Network:</span>
                <span className="font-medium ml-1">{oem.serviceNetwork} centers</span>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-1">Specialties:</p>
              <div className="flex flex-wrap gap-1">
                {oem.specialties.map(specialty => (
                  <Badge key={specialty} color="blue" size="sm">
                    {specialty.replace('-', ' ')}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-1">Certifications:</p>
              <div className="flex flex-wrap gap-1">
                {oem.certifications.map(cert => (
                  <Badge key={cert} color="gray" size="sm">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-4">
              <button 
                onClick={() => onSelectOEM(oem.id)}
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-all"
              >
                View Details
              </button>
              <a 
                href={oem.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-2 p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default OEMList;