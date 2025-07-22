import pumps from './mockData/pumps';
import spares from './mockData/spares';
import oems from './mockData/oems';
import releases from './mockData/releases';

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
  }
};

export default api;