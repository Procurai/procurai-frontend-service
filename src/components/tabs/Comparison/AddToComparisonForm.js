import React, { useState } from 'react';
import { useComparison } from '../../../context/ComparisonContext';

const AddToComparisonForm = () => {
  const [pumpId, setPumpId] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const { addItem, comparedItems } = useComparison();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!pumpId.trim()) return;
    
    setIsAdding(true);
    await addItem(pumpId);
    setPumpId('');
    setIsAdding(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Add Item to Comparison</h3>
      
      <form onSubmit={handleSubmit} className="flex items-center space-x-4">
        <div className="flex-grow">
          <input
            type="text"
            value={pumpId}
            onChange={(e) => setPumpId(e.target.value)}
            placeholder="Enter pump ID (e.g., p001, p002)"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:border-blue-500 focus:outline-none"
            disabled={isAdding || comparedItems.length >= 4}
          />
          {comparedItems.length >= 4 && (
            <p className="text-xs text-red-600 mt-1">Maximum 4 items can be compared at once</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all"
          disabled={isAdding || !pumpId.trim() || comparedItems.length >= 4}
        >
          {isAdding ? 'Adding...' : 'Add to Compare'}
        </button>
      </form>
      
      <div className="mt-4">
        <p className="text-xs text-gray-500">
          Tip: You can also select items for comparison from the Results tab.
        </p>
      </div>
    </div>
  );
};

export default AddToComparisonForm;