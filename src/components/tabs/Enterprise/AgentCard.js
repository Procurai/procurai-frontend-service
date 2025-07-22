import React from 'react';
import Card from '../../common/ui/Card';
import Badge from '../../common/ui/Badge';

const AgentCard = ({ agent, onSelect, onRun }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'green';
      case 'maintenance': return 'yellow';
      case 'inactive': return 'gray';
      default: return 'blue';
    }
  };

  return (
    <Card className="agent-card hover:shadow-xl transition-shadow">
      <div className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center">
            <span className="text-3xl mr-3">{agent.icon}</span>
            <h3 className="text-lg font-semibold text-gray-900">{agent.name}</h3>
          </div>
          <Badge color={getStatusColor(agent.status)} className="status-badge">
            {agent.status.charAt(0).toUpperCase() + agent.status.slice(1)}
          </Badge>
        </div>
        
        <p className="text-sm text-gray-600 mb-4">{agent.description}</p>
        
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-1">Key Capabilities:</p>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            {agent.capabilities.slice(0, 3).map((capability, index) => (
              <li key={index}>{capability}</li>
            ))}
            {agent.capabilities.length > 3 && (
              <li className="text-blue-600">+{agent.capabilities.length - 3} more</li>
            )}
          </ul>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="text-sm">
            <span className="text-gray-500">Avg. Savings:</span>
            <span className="font-medium ml-1">{agent.avgSavings}%</span>
          </div>
          <div className="text-sm">
            <span className="text-gray-500">Processing:</span>
            <span className="font-medium ml-1">{agent.processingTime}</span>
          </div>
          <div className="text-sm">
            <span className="text-gray-500">Type:</span>
            <span className="font-medium ml-1">{agent.type.charAt(0).toUpperCase() + agent.type.slice(1)}</span>
          </div>
          <div className="text-sm">
            <span className="text-gray-500">Last Run:</span>
            <span className="font-medium ml-1">{new Date(agent.lastRun).toLocaleDateString()}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <button 
            onClick={() => onRun(agent.id)}
            className="flex-1 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white py-2 rounded-lg font-medium hover:from-green-700 hover:via-blue-700 hover:to-purple-700 transition-all"
            disabled={agent.status !== 'active'}
          >
            Run Agent
          </button>
          <button 
            onClick={() => onSelect(agent.id)}
            className="ml-2 flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition-all"
          >
            View Tasks
          </button>
        </div>
      </div>
    </Card>
  );
};

export default AgentCard;