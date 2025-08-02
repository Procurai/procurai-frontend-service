// Backend API configuration
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';
const API_VERSION = 'v1';

// HTTP client with error handling
const apiClient = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}/api/${API_VERSION}${endpoint}`;
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data.data || data; // Return the data field or full response
  } catch (error) {
    console.error(`API Error [${endpoint}]:`, error);
    throw error;
  }
};

// Build query string from parameters
const buildQueryString = (params) => {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      searchParams.append(key, value);
    }
  });
  return searchParams.toString();
};

const api = {
  // Pump related endpoints (now using items API with category=pump)
  pumps: {
    search: async (params) => {
      const queryParams = { ...params, category: 'pump' };
      const queryString = buildQueryString(queryParams);
      return await apiClient(`/items?${queryString}`);
    },
    
    getById: async (id) => {
      return await apiClient(`/items/${id}`);
    },
    
    getRecommendations: async (params) => {
      const queryParams = { ...params, category: 'pump' };
      const queryString = buildQueryString(queryParams);
      return await apiClient(`/items/recommendations?${queryString}`);
    },
  },
  
  // Spares related endpoints (now using items API with category=spare)
  spares: {
    search: async (params) => {
      const queryParams = { ...params, category: 'spare' };
      const queryString = buildQueryString(queryParams);
      return await apiClient(`/items?${queryString}`);
    },
    
    getById: async (id) => {
      return await apiClient(`/items/${id}`);
    },
    
    getCompatible: async (pumpType) => {
      return await apiClient(`/items/compatibility/${pumpType}`);
    },
  },
  
  // OEM related endpoints
  oem: {
    getAll: async (params = {}) => {
      const queryString = buildQueryString(params);
      return await apiClient(`/oems?${queryString}`);
    },
    
    getById: async (id) => {
      return await apiClient(`/oems/${id}`);
    },
    
    getNewReleases: async (params = {}) => {
      const { oemId, ...otherParams } = params;
      if (oemId) {
        const queryString = buildQueryString(otherParams);
        return await apiClient(`/oems/${oemId}/releases?${queryString}`);
      }
      // If no oemId, get releases for all OEMs (this would need backend support)
      return await apiClient('/oems');
    },
  },
  
  // Enterprise AI related endpoints
  enterprise: {
    getAgents: async (params = {}) => {
      const queryString = buildQueryString(params);
      return await apiClient(`/enterprise/agents?${queryString}`);
    },
    
    getAgentById: async (id) => {
      return await apiClient(`/enterprise/agents/${id}`);
    },
    
    getTasks: async (params = {}) => {
      const queryString = buildQueryString(params);
      return await apiClient(`/enterprise/tasks?${queryString}`);
    },
    
    getTaskById: async (id) => {
      // This would need to be implemented in backend or filter from getTasks
      const tasks = await apiClient('/enterprise/tasks');
      return tasks.find(task => task.id === id) || null;
    },
    
    runAgent: async (agentId, params = {}) => {
      return await apiClient(`/enterprise/agents/${agentId}/run`, {
        method: 'POST',
        body: JSON.stringify(params),
      });
    }
  },
  
  // ESG related endpoints
  esg: {
    getDashboard: async () => {
      return await apiClient('/esg/dashboard');
    },
    
    getSupplierRatings: async () => {
      return await apiClient('/esg/suppliers');
    },
    
    getGoals: async () => {
      return await apiClient('/esg/goals');
    },
    
    getCertifications: async () => {
      // Extract certifications from dashboard data
      const dashboard = await apiClient('/esg/dashboard');
      return dashboard.certifications || [];
    },
    
    generateReport: async (params = {}) => {
      return await apiClient('/esg/reports', {
        method: 'POST',
        body: JSON.stringify(params),
      });
    }
  },
  
  // Emergency related endpoints
  emergency: {
    getSuppliers: async (params = {}) => {
      const queryString = buildQueryString(params);
      return await apiClient(`/emergency/suppliers?${queryString}`);
    },
    
    getParts: async (params = {}) => {
      const queryString = buildQueryString(params);
      return await apiClient(`/emergency/parts?${queryString}`);
    },
    
    getCases: async () => {
      return await apiClient('/emergency/cases');
    },
    
    requestService: async (params = {}) => {
      return await apiClient('/emergency/request', {
        method: 'POST',
        body: JSON.stringify(params),
      });
    }
  },
  
  // Chat related endpoints
  chat: {
    getMessages: async () => {
      return await apiClient('/chat/messages');
    },
    
    getQuickResponses: async () => {
      return await apiClient('/chat/quick-responses');
    },
    
    getSuggestedQuestions: async (lastMessage = '') => {
      const queryString = buildQueryString({ lastMessage });
      return await apiClient(`/chat/suggestions?${queryString}`);
    },
    
    sendMessage: async (message) => {
      return await apiClient('/chat/messages', {
        method: 'POST',
        body: JSON.stringify({ message }),
      });
    }
  }
};

export default api;