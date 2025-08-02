import React, { useState } from 'react';
import api from '../services/api';
import { useApiCall } from '../hooks/useApi';

const ApiTest = () => {
  const [results, setResults] = useState({});
  const { loading, error, execute } = useApiCall();

  const testEndpoints = [
    { name: 'Items (Pumps)', call: () => api.pumps.search({ limit: 3 }) },
    { name: 'Items (Spares)', call: () => api.spares.search({ limit: 3 }) },
    { name: 'OEMs', call: () => api.oem.getAll({ limit: 3 }) },
    { name: 'AI Agents', call: () => api.enterprise.getAgents({ limit: 3 }) },
    { name: 'ESG Dashboard', call: () => api.esg.getDashboard() },
    { name: 'Emergency Suppliers', call: () => api.emergency.getSuppliers({ limit: 3 }) },
    { name: 'Chat Quick Responses', call: () => api.chat.getQuickResponses() },
  ];

  const testEndpoint = async (endpoint) => {
    const result = await execute(endpoint.call, endpoint.name);
    setResults(prev => ({
      ...prev,
      [endpoint.name]: result
    }));
  };

  const testAllEndpoints = async () => {
    setResults({});
    for (const endpoint of testEndpoints) {
      await testEndpoint(endpoint);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>🧪 API Integration Test</h2>
      <p>Test the connection between frontend and backend APIs</p>
      
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={testAllEndpoints}
          disabled={loading}
          style={{
            padding: '10px 20px',
            backgroundColor: loading ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
            marginRight: '10px'
          }}
        >
          {loading ? 'Testing...' : 'Test All APIs'}
        </button>
        
        {testEndpoints.map(endpoint => (
          <button
            key={endpoint.name}
            onClick={() => testEndpoint(endpoint)}
            disabled={loading}
            style={{
              padding: '5px 10px',
              margin: '2px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '3px',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontSize: '12px'
            }}
          >
            {endpoint.name}
          </button>
        ))}
      </div>

      {error && (
        <div style={{
          padding: '10px',
          backgroundColor: '#f8d7da',
          color: '#721c24',
          border: '1px solid #f5c6cb',
          borderRadius: '4px',
          marginBottom: '20px'
        }}>
          <strong>Error:</strong> {error.message}
          {error.type === 'backend_down' && (
            <div style={{ marginTop: '10px', fontSize: '14px' }}>
              <strong>Quick Fix:</strong>
              <ol>
                <li>Open terminal in backend folder</li>
                <li>Run: <code>npm install</code></li>
                <li>Run: <code>npm run dev</code></li>
                <li>Ensure server starts on http://localhost:3001</li>
              </ol>
            </div>
          )}
        </div>
      )}

      <div>
        <h3>Test Results:</h3>
        {Object.entries(results).map(([name, result]) => (
          <div key={name} style={{
            margin: '10px 0',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            backgroundColor: result.success ? '#d4edda' : '#f8d7da'
          }}>
            <h4 style={{ margin: '0 0 10px 0' }}>
              {result.success ? '✅' : '❌'} {name}
            </h4>
            {result.success ? (
              <div>
                <strong>Success!</strong> 
                {Array.isArray(result.data) && (
                  <span> Found {result.data.length} items</span>
                )}
                <details style={{ marginTop: '5px' }}>
                  <summary style={{ cursor: 'pointer' }}>View Data</summary>
                  <pre style={{ 
                    fontSize: '12px', 
                    backgroundColor: '#f8f9fa', 
                    padding: '10px', 
                    overflow: 'auto',
                    maxHeight: '200px'
                  }}>
                    {JSON.stringify(result.data, null, 2)}
                  </pre>
                </details>
              </div>
            ) : (
              <div>
                <strong>Error:</strong> {result.error?.message}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiTest;