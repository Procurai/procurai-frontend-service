import React from 'react';
import Card from '../../common/ui/Card';
import Badge from '../../common/ui/Badge';

const ProductReleases = ({ releases, loading }) => {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mb-4"></div>
        <p className="text-lg text-gray-600">Loading product releases...</p>
      </div>
    );
  }

  if (releases.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">No Product Releases Found</h2>
        <p className="text-gray-600 mb-6">
          We couldn't find any recent product releases matching your criteria.
        </p>
      </div>
    );
  }

  // Helper function to format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Helper function to get color for ESG score
  const getEsgColor = (score) => {
    if (score >= 90) return 'green';
    if (score >= 80) return 'blue';
    if (score >= 70) return 'yellow';
    return 'orange';
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Latest Product Releases</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {releases.map(release => (
          <Card key={release.id} className="release-card">
            <div className="p-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{release.name}</h3>
                <Badge color={getEsgColor(release.esgScore)} className="esg-badge">
                  ESG {release.esgScore}
                </Badge>
              </div>
              
              <p className="text-sm text-gray-500 mb-2">Released: {formatDate(release.releaseDate)}</p>
              <p className="text-sm text-gray-600 mb-4">{release.description}</p>
              
              <div className="mb-4">
                <p className="text-xs font-medium text-gray-700 mb-2">Key Features:</p>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  {release.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge color="blue">
                  {release.type.replace('-', ' ')}
                </Badge>
                <Badge color="green">
                  {release.energyRating}
                </Badge>
                <Badge color={release.availability === 'In Stock' ? 'green' : 'yellow'}>
                  {release.availability}
                </Badge>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-sm font-medium text-gray-900">{release.price}</div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all">
                  View Details
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductReleases;