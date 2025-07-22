import React from 'react';
import Card from '../../common/ui/Card';
import Badge from '../../common/ui/Badge';

const EmergencyCases = ({ cases }) => {
  if (!cases || cases.length === 0) return null;

  const getStatusColor = (status) => {
    return status === 'resolved' ? 'green' : 'yellow';
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Recent Emergency Cases</h3>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Case</th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Industry</th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pump Type</th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Response</th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cases.map(emergencyCase => (
              <tr key={emergencyCase.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{emergencyCase.title}</div>
                  <div className="text-xs text-gray-500">{emergencyCase.location}</div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {emergencyCase.industry}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <Badge color="blue" size="sm">
                    {emergencyCase.pumpType.replace('-', ' ')}
                  </Badge>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {emergencyCase.responseTime} hrs
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <Badge color={getStatusColor(emergencyCase.status)}>
                    {emergencyCase.status === 'resolved' ? 'Resolved' : 'In Progress'}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmergencyCases;