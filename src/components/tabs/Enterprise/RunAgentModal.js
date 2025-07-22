import React, { useState } from 'react';

const RunAgentModal = ({ agent, onRun, onClose }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [parameters, setParameters] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await onRun(agent.id, {
        title: taskTitle,
        ...parameters
      });
      onClose();
    } catch (error) {
      console.error('Error running agent:', error);
      setLoading(false);
    }
  };

  // Generate parameter fields based on agent type
  const getParameterFields = () => {
    switch (agent.type) {
      case 'procurement':
        return (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                value={parameters.category || ''}
                onChange={(e) => setParameters({...parameters, category: e.target.value})}
              >
                <option value="">Select Category</option>
                <option value="pumps">Pumps</option>
                <option value="valves">Valves</option>
                <option value="motors">Motors</option>
                <option value="controls">Controls</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Budget (₹)</label>
              <input 
                type="number" 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                value={parameters.budget || ''}
                onChange={(e) => setParameters({...parameters, budget: e.target.value})}
                placeholder="Enter budget amount"
              />
            </div>
          </>
        );
      
      case 'analysis':
        return (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Supplier</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                value={parameters.supplier || ''}
                onChange={(e) => setParameters({...parameters, supplier: e.target.value})}
                placeholder="Enter supplier name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time Period</label>
              <select 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                value={parameters.period || ''}
                onChange={(e) => setParameters({...parameters, period: e.target.value})}
              >
                <option value="">Select Period</option>
                <option value="last-month">Last Month</option>
                <option value="last-quarter">Last Quarter</option>
                <option value="last-year">Last Year</option>
                <option value="custom">Custom</option>
              </select>
            </div>
          </>
        );
      
      default:
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Parameters</label>
            <textarea 
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              value={parameters.custom || ''}
              onChange={(e) => setParameters({...parameters, custom: e.target.value})}
              placeholder="Enter any specific parameters for this agent"
              rows={3}
            />
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Run {agent.name}</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Task Title</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="Enter a title for this task"
                required
              />
            </div>
            
            {getParameterFields()}
            
            <div className="flex justify-end space-x-3 mt-6">
              <button 
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                disabled={loading}
              >
                {loading ? 'Running...' : 'Run Agent'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RunAgentModal;