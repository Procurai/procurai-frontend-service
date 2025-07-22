import React from 'react';
import Card from '../../common/ui/Card';
import Badge from '../../common/ui/Badge';

const TaskList = ({ tasks, loading, selectedAgent }) => {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mb-4"></div>
        <p className="text-lg text-gray-600">Loading tasks...</p>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">No Tasks Found</h2>
        <p className="text-gray-600 mb-6">
          {selectedAgent 
            ? "This agent hasn't run any tasks yet. Try running a new task." 
            : "No tasks have been run yet. Select an agent to run a task."}
        </p>
      </div>
    );
  }

  // Helper function to get status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'green';
      case 'in-progress': return 'blue';
      case 'scheduled': return 'yellow';
      case 'failed': return 'red';
      default: return 'gray';
    }
  };

  // Helper function to format date
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Helper function to calculate duration
  const calculateDuration = (startTime, endTime) => {
    if (!startTime || !endTime) return 'N/A';
    
    const start = new Date(startTime);
    const end = new Date(endTime);
    const durationMs = end - start;
    
    // Format as minutes and seconds
    const minutes = Math.floor(durationMs / 60000);
    const seconds = Math.floor((durationMs % 60000) / 1000);
    
    if (minutes > 0) {
      return `${minutes}m ${seconds}s`;
    } else {
      return `${seconds}s`;
    }
  };

  return (
    <div className="space-y-4">
      {tasks.map(task => (
        <Card key={task.id} className="task-card">
          <div className="p-4">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
              <Badge color={getStatusColor(task.status)} className="status-badge">
                {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
              </Badge>
            </div>
            
            {task.status === 'in-progress' && (
              <div className="mb-4">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Progress</span>
                  <span>{task.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${task.progress}%` }}
                  ></div>
                </div>
              </div>
            )}
            
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="text-sm">
                <span className="text-gray-500">Started:</span>
                <span className="font-medium ml-1">{formatDate(task.startTime)}</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-500">Completed:</span>
                <span className="font-medium ml-1">{formatDate(task.endTime)}</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-500">Duration:</span>
                <span className="font-medium ml-1">{calculateDuration(task.startTime, task.endTime)}</span>
              </div>
            </div>
            
            {task.error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-600">{task.error}</p>
              </div>
            )}
            
            {task.results && (
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">{task.results.summary}</p>
                
                {task.results.findings && (
                  <div className="mb-2">
                    <p className="text-xs font-medium text-gray-700">Key Findings:</p>
                    <ul className="list-disc pl-5 text-xs text-gray-600 space-y-1">
                      {task.results.findings.map((finding, index) => (
                        <li key={index}>{finding}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {task.results.savings && (
                  <div className="mt-2 p-2 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm font-medium text-green-700">Potential Savings: {task.results.savings}</p>
                  </div>
                )}
              </div>
            )}
            
            <div className="flex justify-end">
              {task.results && (
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all">
                  View Full Report
                </button>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;