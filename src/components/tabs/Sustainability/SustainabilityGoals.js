import React from 'react';
import Card from '../../common/ui/Card';

const SustainabilityGoals = ({ goals }) => {
  if (!goals || goals.length === 0) return null;

  // Helper function to get status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'on-track': return 'text-green-600';
      case 'behind': return 'text-yellow-600';
      case 'at-risk': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Sustainability Goals</h3>
      
      <div className="space-y-6">
        {goals.map(goal => (
          <div key={goal.id} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-base font-medium text-gray-900">{goal.title}</h4>
              <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                {goal.progress}% Complete
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mb-3">{goal.target}</p>
            
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div 
                className="bg-blue-600 h-2 rounded-full" 
                style={{ width: `${goal.progress}%` }}
              ></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {goal.metrics.map((metric, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-500 mb-1">{metric.name}</div>
                  <div className="flex justify-between items-center">
                    <div className="font-medium">{metric.value}</div>
                    <div className={`text-xs font-medium ${getStatusColor(metric.status)}`}>
                      {metric.status === 'on-track' ? 'On Track' : 
                       metric.status === 'behind' ? 'Behind' : 'At Risk'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SustainabilityGoals;