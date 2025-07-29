import React from 'react';
import Card from '../../common/ui/Card';

const QuickResponses = ({ responses, onSelectResponse }) => {
  if (!responses || responses.length === 0) {
    return null;
  }

  return (
    <Card className="p-4">
      <h3 className="text-sm font-medium text-gray-700 mb-3">Quick Responses</h3>
      <div className="space-y-2">
        {responses.map((response, index) => (
          <button
            key={index}
            onClick={() => onSelectResponse(response)}
            className="block w-full text-left bg-gray-50 hover:bg-gray-100 text-gray-800 text-sm px-3 py-2 rounded-md transition-colors"
          >
            {response}
          </button>
        ))}
      </div>
    </Card>
  );
};

export default QuickResponses;