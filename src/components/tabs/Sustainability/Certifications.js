import React from 'react';
import Card from '../../common/ui/Card';

const Certifications = ({ certifications }) => {
  if (!certifications || certifications.length === 0) return null;

  // Helper function to format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Helper function to get status color
  const getStatusColor = (status) => {
    if (status === 'certified' || status === 'compliant' || status === 'A-' || status === 'Gold') {
      return 'bg-green-100 text-green-800';
    }
    if (status === 'in-progress' || status === 'Silver') {
      return 'bg-yellow-100 text-yellow-800';
    }
    return 'bg-gray-100 text-gray-800';
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Certifications & Standards</h3>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Certification
              </th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Valid Until
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {certifications.map((cert, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  {cert.name}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(cert.status)}`}>
                    {cert.status}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {formatDate(cert.validUntil)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default Certifications;