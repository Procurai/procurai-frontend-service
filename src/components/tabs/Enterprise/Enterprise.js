import React, { useState, useEffect } from 'react';
import AgentCard from './AgentCard';
import AgentFilter from './AgentFilter';
import TaskList from './TaskList';
import RunAgentModal from './RunAgentModal';
import api from '../../../services/api';

const Enterprise = () => {
  const [agents, setAgents] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tasksLoading, setTasksLoading] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [selectedAgentData, setSelectedAgentData] = useState(null);
  const [showRunModal, setShowRunModal] = useState(false);
  const [filters, setFilters] = useState({
    type: '',
    status: ''
  });

  useEffect(() => {
    loadAgents();
    loadTasks();
  }, []);

  const loadAgents = async () => {
    setLoading(true);
    try {
      const results = await api.enterprise.getAgents(filters);
      setAgents(results);
    } catch (error) {
      console.error('Error loading agents:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadTasks = async (agentId = null) => {
    setTasksLoading(true);
    try {
      const params = agentId ? { agentId } : {};
      const results = await api.enterprise.getTasks(params);
      setTasks(results);
    } catch (error) {
      console.error('Error loading tasks:', error);
    } finally {
      setTasksLoading(false);
    }
  };

  const handleFilterChange = async (newFilters) => {
    setFilters(newFilters);
    setLoading(true);
    try {
      const results = await api.enterprise.getAgents(newFilters);
      setAgents(results);
    } catch (error) {
      console.error('Error filtering agents:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectAgent = async (agentId) => {
    setSelectedAgent(agentId);
    setTasksLoading(true);
    try {
      const agent = await api.enterprise.getAgentById(agentId);
      setSelectedAgentData(agent);
      const tasks = await api.enterprise.getTasks({ agentId });
      setTasks(tasks);
    } catch (error) {
      console.error('Error loading agent tasks:', error);
    } finally {
      setTasksLoading(false);
    }
  };

  const handleRunAgent = (agentId) => {
    const agent = agents.find(a => a.id === agentId);
    setSelectedAgentData(agent);
    setShowRunModal(true);
  };

  const executeAgentRun = async (agentId, params) => {
    try {
      await api.enterprise.runAgent(agentId, params);
      // Refresh tasks after running
      loadTasks(selectedAgent);
    } catch (error) {
      console.error('Error running agent:', error);
      throw error;
    }
  };

  const handleClearSelection = () => {
    setSelectedAgent(null);
    setSelectedAgentData(null);
    loadTasks();
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Enterprise AI Agents</h2>
        <p className="text-lg text-gray-600 mt-2">
          Autonomous AI agents for enterprise procurement and supply chain management
        </p>
      </div>
      
      <AgentFilter onFilterChange={handleFilterChange} />
      
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-900">
            {loading ? 'Loading...' : `${agents.length} AI Agents Available`}
          </h3>
        </div>
        
        {loading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-lg text-gray-600">Loading AI agents...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map(agent => (
              <AgentCard 
                key={agent.id} 
                agent={agent} 
                onSelect={handleSelectAgent}
                onRun={handleRunAgent}
              />
            ))}
          </div>
        )}
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-900">
            {selectedAgent 
              ? `Tasks for ${selectedAgentData?.name || 'Selected Agent'}` 
              : 'Recent Tasks'}
          </h3>
          {selectedAgent && (
            <button 
              onClick={handleClearSelection}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              View All Tasks
            </button>
          )}
        </div>
        
        <TaskList 
          tasks={tasks} 
          loading={tasksLoading} 
          selectedAgent={selectedAgent}
        />
      </div>
      
      {showRunModal && selectedAgentData && (
        <RunAgentModal 
          agent={selectedAgentData}
          onRun={executeAgentRun}
          onClose={() => setShowRunModal(false)}
        />
      )}
    </div>
  );
};

export default Enterprise;