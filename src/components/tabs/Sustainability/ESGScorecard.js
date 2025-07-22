import React from 'react';
import Card from '../../common/ui/Card';

const ESGScorecard = ({ scores }) => {
  if (!scores) return null;

  // Helper function to get color based on score
  const getScoreColor = (score) => {
    if (score >= 80) return 'bg-green-600';
    if (score >= 70) return 'bg-blue-600';
    if (score >= 60) return 'bg-yellow-600';
    return 'bg-red-600';
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">ESG Scorecard</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="col-span-1 md:col-span-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Overall ESG Score</span>
            <span className="text-sm font-bold text-gray-900">{scores.total}/100</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div 
              className={`${getScoreColor(scores.total)} h-4 rounded-full`} 
              style={{ width: `${scores.total}%` }}
            ></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Environmental</span>
            <span className="text-sm font-bold text-gray-900">{scores.environmental}/100</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`${getScoreColor(scores.environmental)} h-2 rounded-full`} 
              style={{ width: `${scores.environmental}%` }}
            ></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Social</span>
            <span className="text-sm font-bold text-gray-900">{scores.social}/100</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`${getScoreColor(scores.social)} h-2 rounded-full`} 
              style={{ width: `${scores.social}%` }}
            ></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Governance</span>
            <span className="text-sm font-bold text-gray-900">{scores.governance}/100</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`${getScoreColor(scores.governance)} h-2 rounded-full`} 
              style={{ width: `${scores.governance}%` }}
            ></div>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="font-medium">Verified by EcoVadis</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ESGScorecard;