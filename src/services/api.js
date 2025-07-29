import pumps from './mockData/pumps';
import spares from './mockData/spares';
import oems from './mockData/oems';
import releases from './mockData/releases';
import agents from './mockData/agents';
import tasks from './mockData/tasks';
import esgData from './mockData/esgData';
import emergency from './mockData/emergency';
import { chatMessages, quickResponses, getSuggestedQuestions } from './mockData/chatMessages';

// Helper function to simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Mock fetch function
const mockFetch = async (endpoint, params = {}, method = 'GET') => {
  // Simulate network delay
  await delay(800);
  
  // Handle different endpoints
  switch (endpoint) {
    case 'pumps':
      return filterPumps(params);
    case 'pumps/recommendations':
      return getRecommendations(params);
    case 'spares':
      return filterSpares(params);
    case 'spares/compatibility':
      return getCompatibleSpares(params);
    case 'oems':
      return filterOEMs(params);
    case 'oem/releases':
      return getOEMReleases(params);
    case 'agents':
      return filterAgents(params);
    case 'agent/tasks':
      return getAgentTasks(params);
    case 'esg/dashboard':
      return esgData;
    case 'esg/suppliers':
      return esgData.supplierCompliance;
    case 'esg/goals':
      return esgData.goals;
    case 'esg/certifications':
      return esgData.certifications;
    case 'emergency/suppliers':
      return filterEmergencySuppliers(params);
    case 'emergency/parts':
      return filterEmergencyParts(params);
    case 'emergency/cases':
      return emergency.cases;
    default:
      return [];
  }
};

// Filter pumps based on search parameters
const filterPumps = (params) => {
  let results = [...pumps];
  
  // Filter by search query (simple text match)
  if (params.query) {
    const query = params.query.toLowerCase();
    results = results.filter(pump => 
      pump.name.toLowerCase().includes(query) || 
      pump.description.toLowerCase().includes(query) ||
      pump.manufacturer.toLowerCase().includes(query) ||
      pump.type.toLowerCase().includes(query)
    );
  }
  
  // Filter by industry (would be more complex in real implementation)
  if (params.industry) {
    // For demo purposes, just filter by pump type
    results = results.filter(pump => {
      switch(params.industry) {
        case 'water': return ['centrifugal', 'submersible', 'multistage'].includes(pump.type);
        case 'chemical': return ['magnetic-drive', 'peristaltic'].includes(pump.type);
        case 'textile': return ['centrifugal', 'self-priming'].includes(pump.type);
        case 'food': return ['peristaltic', 'positive-displacement'].includes(pump.type);
        case 'mining': return ['submersible', 'vertical-turbine'].includes(pump.type);
        case 'power': return ['multistage', 'vertical-turbine'].includes(pump.type);
        case 'oil-gas': return ['positive-displacement', 'centrifugal'].includes(pump.type);
        case 'steel': return ['centrifugal', 'multistage'].includes(pump.type);
        default: return true;
      }
    });
  }
  
  // Filter by pump type
  if (params.pumpType) {
    results = results.filter(pump => pump.type === params.pumpType);
  }
  
  // Filter by flow rate
  if (params.flowRate) {
    if (params.flowRate.min) {
      results = results.filter(pump => pump.flowRate >= params.flowRate.min);
    }
    if (params.flowRate.max) {
      results = results.filter(pump => pump.flowRate <= params.flowRate.max);
    }
  }
  
  // Filter by head
  if (params.head) {
    if (params.head.min) {
      results = results.filter(pump => pump.head >= params.head.min);
    }
    if (params.head.max) {
      results = results.filter(pump => pump.head <= params.head.max);
    }
  }
  
  // Filter by budget
  if (params.budget) {
    if (params.budget.min) {
      results = results.filter(pump => pump.price >= params.budget.min);
    }
    if (params.budget.max) {
      results = results.filter(pump => pump.price <= params.budget.max);
    }
  }
  
  // Filter by ESG rating
  if (params.esgRating) {
    const ratings = ['B', 'B+', 'A', 'A+'];
    const minRatingIndex = ratings.indexOf(params.esgRating);
    if (minRatingIndex !== -1) {
      const validRatings = ratings.slice(minRatingIndex);
      results = results.filter(pump => validRatings.includes(pump.esgRating));
    }
  }
  
  // Filter by energy rating
  if (params.energyRating) {
    const ratings = ['3-star', '4-star', '5-star'];
    const minRatingIndex = ratings.indexOf(params.energyRating);
    if (minRatingIndex !== -1) {
      const validRatings = ratings.slice(minRatingIndex);
      results = results.filter(pump => validRatings.includes(pump.energyRating));
    }
  }
  
  // Filter by material
  if (params.material) {
    results = results.filter(pump => pump.material === params.material);
  }
  
  // Filter by certification
  if (params.certification) {
    results = results.filter(pump => pump.certification.includes(params.certification));
  }
  
  return results;
};

// Get pump recommendations based on parameters
const getRecommendations = (params) => {
  // For demo purposes, just return filtered pumps
  return filterPumps(params);
};

// Filter spares based on search parameters
const filterSpares = (params) => {
  let results = [...spares];
  
  // Filter by search query
  if (params.query) {
    const query = params.query.toLowerCase();
    results = results.filter(spare => 
      spare.name.toLowerCase().includes(query) || 
      spare.description.toLowerCase().includes(query) ||
      spare.category.toLowerCase().includes(query)
    );
  }
  
  // Filter by category
  if (params.category) {
    results = results.filter(spare => spare.category === params.category);
  }
  
  // Filter by compatibility
  if (params.compatibility) {
    results = results.filter(spare => 
      spare.compatibility.includes(params.compatibility) || 
      spare.compatibility.includes('all')
    );
  }
  
  // Filter by price range
  if (params.price) {
    if (params.price.min) {
      results = results.filter(spare => spare.price >= params.price.min);
    }
    if (params.price.max) {
      results = results.filter(spare => spare.price <= params.price.max);
    }
  }
  
  // Filter by availability
  if (params.inStock !== undefined) {
    results = results.filter(spare => spare.inStock === params.inStock);
  }
  
  return results;
};

// Get compatible spares for a specific pump type
const getCompatibleSpares = (params) => {
  if (!params.pumpType) return [];
  
  return spares.filter(spare => 
    spare.compatibility.includes(params.pumpType) || 
    spare.compatibility.includes('all')
  );
};

// Filter OEMs based on search parameters
const filterOEMs = (params) => {
  let results = [...oems];
  
  // Filter by search query
  if (params.query) {
    const query = params.query.toLowerCase();
    results = results.filter(oem => 
      oem.name.toLowerCase().includes(query) || 
      oem.description.toLowerCase().includes(query) ||
      oem.location.toLowerCase().includes(query)
    );
  }
  
  // Filter by specialty
  if (params.specialty) {
    results = results.filter(oem => 
      oem.specialties.includes(params.specialty)
    );
  }
  
  // Filter by ESG rating
  if (params.esgRating) {
    const ratings = ['B', 'B+', 'A', 'A+'];
    const minRatingIndex = ratings.indexOf(params.esgRating);
    if (minRatingIndex !== -1) {
      const validRatings = ratings.slice(minRatingIndex);
      results = results.filter(oem => validRatings.includes(oem.esgRating));
    }
  }
  
  return results;
};

// Get product releases, optionally filtered by OEM
const getOEMReleases = (params) => {
  let results = [...releases];
  
  // Filter by OEM ID
  if (params.oemId) {
    results = results.filter(release => release.oemId === params.oemId);
  }
  
  // Filter by pump type
  if (params.type) {
    results = results.filter(release => release.type === params.type);
  }
  
  // Sort by release date (newest first)
  results.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
  
  return results;
};

// Filter AI agents based on search parameters
const filterAgents = (params) => {
  let results = [...agents];
  
  // Filter by search query
  if (params.query) {
    const query = params.query.toLowerCase();
    results = results.filter(agent => 
      agent.name.toLowerCase().includes(query) || 
      agent.description.toLowerCase().includes(query) ||
      agent.type.toLowerCase().includes(query)
    );
  }
  
  // Filter by agent type
  if (params.type) {
    results = results.filter(agent => agent.type === params.type);
  }
  
  // Filter by status
  if (params.status) {
    results = results.filter(agent => agent.status === params.status);
  }
  
  return results;
};

// Get tasks for a specific agent or all tasks
const getAgentTasks = (params) => {
  let results = [...tasks];
  
  // Filter by agent ID
  if (params.agentId) {
    results = results.filter(task => task.agentId === params.agentId);
  }
  
  // Filter by status
  if (params.status) {
    results = results.filter(task => task.status === params.status);
  }
  
  // Sort by start time (newest first)
  results.sort((a, b) => new Date(b.startTime) - new Date(a.startTime));
  
  return results;
};

// Filter emergency suppliers based on search parameters
const filterEmergencySuppliers = (params) => {
  let results = [...emergency.suppliers];
  
  // Filter by specialty
  if (params.specialty) {
    results = results.filter(supplier => 
      supplier.specialties.includes(params.specialty)
    );
  }
  
  // Filter by max response time
  if (params.maxResponseTime) {
    results = results.filter(supplier => 
      supplier.responseTime <= params.maxResponseTime
    );
  }
  
  // Filter by max distance
  if (params.maxDistance) {
    results = results.filter(supplier => 
      supplier.distance <= params.maxDistance
    );
  }
  
  // Sort by response time (fastest first)
  if (params.sortBy === 'responseTime') {
    results.sort((a, b) => a.responseTime - b.responseTime);
  }
  // Sort by distance (closest first)
  else if (params.sortBy === 'distance') {
    results.sort((a, b) => a.distance - b.distance);
  }
  // Sort by rating (highest first)
  else if (params.sortBy === 'rating') {
    results.sort((a, b) => b.rating - a.rating);
  }
  
  return results;
};

// Filter emergency parts based on search parameters
const filterEmergencyParts = (params) => {
  let results = [...emergency.parts];
  
  // Filter by category
  if (params.category) {
    results = results.filter(part => part.category === params.category);
  }
  
  // Filter by compatibility
  if (params.compatibility) {
    results = results.filter(part => 
      part.compatibility.includes(params.compatibility) || 
      part.compatibility.includes('all')
    );
  }
  
  // Filter by location
  if (params.location) {
    results = results.filter(part => 
      part.location.toLowerCase().includes(params.location.toLowerCase())
    );
  }
  
  return results;
};

const api = {
  // Pump related endpoints
  pumps: {
    search: (params) => mockFetch('pumps', params),
    getById: (id) => {
      const pump = pumps.find(p => p.id === id);
      return Promise.resolve(pump || null);
    },
    getRecommendations: (params) => mockFetch('pumps/recommendations', params),
  },
  
  // Spares related endpoints
  spares: {
    search: (params) => mockFetch('spares', params),
    getById: (id) => {
      const spare = spares.find(s => s.id === id);
      return Promise.resolve(spare || null);
    },
    getCompatible: (pumpType) => mockFetch('spares/compatibility', { pumpType }),
  },
  
  // OEM related endpoints
  oem: {
    getAll: (params = {}) => mockFetch('oems', params),
    getById: (id) => {
      const oem = oems.find(o => o.id === id);
      return Promise.resolve(oem || null);
    },
    getNewReleases: (params = {}) => mockFetch('oem/releases', params),
  },
  
  // Enterprise AI related endpoints
  enterprise: {
    getAgents: (params = {}) => mockFetch('agents', params),
    getAgentById: (id) => {
      const agent = agents.find(a => a.id === id);
      return Promise.resolve(agent || null);
    },
    getTasks: (params = {}) => mockFetch('agent/tasks', params),
    getTaskById: (id) => {
      const task = tasks.find(t => t.id === id);
      return Promise.resolve(task || null);
    },
    runAgent: (agentId, params = {}) => {
      // Simulate running an agent
      const newTaskId = `task${Math.floor(Math.random() * 1000)}`.padStart(6, '0');
      const newTask = {
        id: newTaskId,
        agentId,
        title: params.title || 'New Task',
        status: 'in-progress',
        progress: 0,
        startTime: new Date().toISOString(),
        endTime: null,
        results: null
      };
      
      tasks.push(newTask);
      return Promise.resolve({ taskId: newTaskId, status: 'started' });
    }
  },
  
  // ESG related endpoints
  esg: {
    getDashboard: () => mockFetch('esg/dashboard'),
    getSupplierRatings: () => mockFetch('esg/suppliers'),
    getGoals: () => mockFetch('esg/goals'),
    getCertifications: () => mockFetch('esg/certifications'),
    generateReport: (params = {}) => {
      // Simulate generating a report
      return Promise.resolve({
        status: 'success',
        reportUrl: '/reports/esg-report-2023.pdf',
        generatedAt: new Date().toISOString()
      });
    }
  },
  
  // Emergency related endpoints
  emergency: {
    getSuppliers: (params = {}) => mockFetch('emergency/suppliers', params),
    getParts: (params = {}) => mockFetch('emergency/parts', params),
    getCases: () => mockFetch('emergency/cases'),
    requestService: (params = {}) => {
      // Simulate requesting emergency service
      return Promise.resolve({
        status: 'success',
        requestId: `req-${Math.floor(Math.random() * 10000)}`,
        estimatedResponseTime: '1-2 hours',
        timestamp: new Date().toISOString()
      });
    }
  },
  
  // Chat related endpoints
  chat: {
    getMessages: () => Promise.resolve([...chatMessages]),
    getQuickResponses: () => Promise.resolve([...quickResponses]),
    getSuggestedQuestions: (lastMessage) => {
      return Promise.resolve(getSuggestedQuestions(lastMessage || ''));
    },
    sendMessage: (message) => {
      // Simulate sending a message and getting a response
      return new Promise((resolve) => {
        setTimeout(() => {
          const newUserMessage = {
            id: `msg${Math.floor(Math.random() * 10000)}`,
            sender: 'user',
            content: message,
            timestamp: new Date().toISOString()
          };
          
          // Simple response logic based on keywords
          let botResponse = {
            id: `msg${Math.floor(Math.random() * 10000)}`,
            sender: 'bot',
            content: 'I understand you need assistance. Could you provide more details about your requirements?',
            timestamp: new Date(Date.now() + 1000).toISOString()
          };
          
          if (message.toLowerCase().includes('pump')) {
            if (message.toLowerCase().includes('centrifugal')) {
              botResponse.content = 'Centrifugal pumps are the most common type used in industrial applications. They work by converting rotational energy from a motor to energy in a moving fluid. What specific requirements do you have for your centrifugal pump?';
            } else if (message.toLowerCase().includes('positive displacement')) {
              botResponse.content = 'Positive displacement pumps work by trapping a fixed amount of fluid and forcing it from the inlet to the outlet. They are excellent for high-pressure applications and viscous fluids. What specific requirements do you have for your positive displacement pump?';
            } else {
              botResponse.content = 'I can help you find the right pump for your application. Could you tell me more about your requirements such as flow rate, pressure, and the fluid being pumped?';
            }
          } else if (message.toLowerCase().includes('spare') || message.toLowerCase().includes('part')) {
            botResponse.content = 'We have a wide range of spare parts available for various pump models. Could you specify the pump model or the specific part you are looking for?';
          } else if (message.toLowerCase().includes('emergency')) {
            botResponse.content = 'For emergency pump services, I recommend checking our Emergency tab where you can find 24/7 service providers and emergency parts. Would you like me to provide more information about our emergency services?';
          }
          
          chatMessages.push(newUserMessage, botResponse);
          resolve([newUserMessage, botResponse]);
        }, 1000);
      });
    }
  }
};

export default api;