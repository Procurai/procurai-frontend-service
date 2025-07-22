import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useComparison } from '../../../context/ComparisonContext';

const CompareButton = ({ selectedItems = {} }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useComparison();
  
  const selectedCount = Object.keys(selectedItems).length;
  
  const handleCompare = async () => {
    if (selectedCount >= 2) {
      // Add selected items to comparison context
      const itemIds = Object.keys(selectedItems);
      for (const id of itemIds) {
        await addItem(id);
      }
      navigate('/comparison');
    }
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-10">
      <button
        className={`flex items-center space-x-2 px-4 py-3 rounded-full shadow-lg transition-all ${
          selectedCount >= 2 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
        } ${isHovered ? 'pl-4 pr-6' : 'px-4'}`}
        onClick={handleCompare}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        disabled={selectedCount < 2}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
        {isHovered && (
          <span className="font-medium">
            {selectedCount >= 2 
              ? `Compare (${selectedCount})` 
              : `Select at least 2`}
          </span>
        )}
      </button>
    </div>
  );
};

export default CompareButton;