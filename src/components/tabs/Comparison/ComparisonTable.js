import React from 'react';
import { useComparison } from '../../../context/ComparisonContext';
import Badge from '../../common/ui/Badge';

const ComparisonTable = () => {
  const { comparedItems, removeItem } = useComparison();

  if (comparedItems.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">No Items to Compare</h2>
        <p className="text-gray-600 mb-6">
          Select items from the Results tab to compare their specifications and features.
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

  // Helper function to get color for energy rating
  const getEnergyColor = (rating) => {
    switch (rating) {
      case '5-star': return 'green';
      case '4-star': return 'blue';
      case '3-star': return 'yellow';
      default: return 'gray';
    }
  };

  // Define comparison categories and attributes
  const categories = [
    {
      name: 'Basic Information',
      attributes: [
        { key: 'name', label: 'Model Name' },
        { key: 'manufacturer', label: 'Manufacturer' },
        { key: 'type', label: 'Pump Type', format: value => value.replace('-', ' ') },
        { key: 'material', label: 'Material', format: value => value.replace('-', ' ') }
      ]
    },
    {
      name: 'Performance',
      attributes: [
        { key: 'flowRate', label: 'Flow Rate', format: value => `${value} GPM` },
        { key: 'head', label: 'Head', format: value => `${value} ft` },
        { key: 'efficiency', label: 'Efficiency', format: value => `${value}%` },
        { key: 'power', label: 'Power', format: value => `${value} kW` }
      ]
    },
    {
      name: 'Sustainability',
      attributes: [
        { 
          key: 'esgRating', 
          label: 'ESG Rating',
          format: value => (
            <Badge color={getEsgColor(value)} className="esg-badge">
              {value}
            </Badge>
          )
        },
        { 
          key: 'energyRating', 
          label: 'Energy Rating',
          format: value => (
            <Badge color={getEnergyColor(value)}>
              {value}
            </Badge>
          )
        },
        { 
          key: 'certification', 
          label: 'Certifications',
          format: value => (
            <div className="flex flex-wrap gap-1">
              {value.map(cert => (
                <Badge key={cert} color="blue" size="sm">
                  {cert.toUpperCase()}
                </Badge>
              ))}
            </div>
          )
        }
      ]
    },
    {
      name: 'Commercial',
      attributes: [
        { key: 'price', label: 'Price', format: value => `₹${value.toLocaleString()}` },
        { key: 'deliveryTime', label: 'Delivery Time', format: value => `${value} days` }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-40">
              Specification
            </th>
            {comparedItems.map((item, index) => (
              <th key={item.id} className="px-6 py-3 bg-gray-50 text-center">
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="absolute -top-2 -right-2 bg-red-100 text-red-600 rounded-full p-1 hover:bg-red-200"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </button>
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-gray-700">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="mt-2 font-medium text-gray-900">{item.name}</h3>
                  <p className="text-xs text-gray-500">{item.manufacturer}</p>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {categories.map(category => (
            <React.Fragment key={category.name}>
              <tr className="bg-gray-100">
                <td colSpan={comparedItems.length + 1} className="px-6 py-2">
                  <h3 className="font-medium text-gray-900">{category.name}</h3>
                </td>
              </tr>
              {category.attributes.map(attr => (
                <tr key={attr.key} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {attr.label}
                  </td>
                  {comparedItems.map(item => (
                    <td key={`${item.id}-${attr.key}`} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      {attr.format ? attr.format(item[attr.key]) : item[attr.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;