# ProcurAI Frontend Migration Plan: HTML to React

## Overview
This document outlines the plan to migrate the existing ProcurAI frontend from a static HTML/CSS/JavaScript implementation to a modern React application. The migration will follow component design principles and functional programming approaches while preserving the complete UI design and functionality.

Design reference : design.html (in the root folder)

## Project Structure

```
procurai-frontend-service/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── assets/
│       └── images/
├── src/
│   ├── index.js
│   ├── App.js
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.js
│   │   │   ├── Navigation.js
│   │   │   ├── Footer.js
│   │   │   └── ui/
│   │   │       ├── Button.js
│   │   │       ├── Card.js
│   │   │       ├── Badge.js
│   │   │       └── ProgressBar.js
│   │   ├── layout/
│   │   │   └── MainLayout.js
│   │   ├── tabs/
│   │   │   ├── SmartFinder/
│   │   │   │   ├── SmartFinder.js
│   │   │   │   ├── SearchInterface.js
│   │   │   │   ├── IndustryFilters.js
│   │   │   │   └── AdvancedFilters.js
│   │   │   ├── SparesAccessories/
│   │   │   ├── OEMInsights/
│   │   │   ├── Enterprise/
│   │   │   ├── Results/
│   │   │   ├── Comparison/
│   │   │   ├── Sustainability/
│   │   │   ├── Emergency/
│   │   │   └── Chat/
│   │   └── features/
│   │       ├── MarketAnalysis.js
│   │       ├── ProductReleases.js
│   │       └── ESGDashboard.js
│   ├── hooks/
│   │   ├── useTab.js
│   │   └── useSearch.js
│   ├── context/
│   │   ├── AppContext.js
│   │   └── SearchContext.js
│   ├── services/
│   │   ├── api.js
│   │   └── mockData/
│   │       ├── pumps.js
│   │       ├── suppliers.js
│   │       ├── marketData.js
│   │       └── esgData.js
│   ├── utils/
│   │   ├── formatters.js
│   │   └── helpers.js
│   └── styles/
│       ├── index.css
│       ├── tailwind.css
│       └── animations.css
├── package.json
├── tailwind.config.js
└── README.md
```

## Phase 1: Setup and Initial Structure

1. **Initialize React Application**
   - [x] Create a new React application using Create React App
   - [x] Configure Tailwind CSS
   - [x] Set up project structure as outlined above

2. **Create Base Components**
   - [x] Implement common UI components (Button, Card, Badge, etc.)
   - [x] Create layout components (Header, Navigation, Footer)
   - [x] Set up the main application layout

3. **Implement Routing**
   - [x] Install and configure React Router
   - [x] Set up routes for different tabs/pages
   - [x] Create a tab navigation system that mimics the current behavior

## Phase 2: Core Functionality Implementation

1. **Tab System**
   - [x] Create a custom hook for tab management
   - [x] Implement tab switching functionality
   - [x] Ensure tab state is preserved when navigating

2. **Smart Finder Tab**
   - [x] Implement search interface
   - [x] Create industry filters component
   - [x] Build advanced filters with toggle functionality
   - [x] Implement search results display

3. **Mock API Services**
   - [x] Create mock data for pumps, suppliers, market data, and ESG information
   - [x] Implement API service layer with simulated network requests
   - [x] Add loading states and error handling

## Phase 3: Feature Implementation

1. **Implement Each Tab**
   - [ ] Spares & Accessories
   - [ ] OEM Insights
   - [ ] Enterprise AI
   - [ ] Results
   - [ ] Comparison
   - [ ] Sustainability Dashboard
   - [ ] Emergency
   - [ ] Chat Assistant

2. **Interactive Features**
   - [ ] Implement filter functionality
   - [ ] Create search templates
   - [ ] Build OEM selection interface
   - [ ] Develop ESG reporting tools

3. **Data Visualization**
   - [ ] Implement charts and graphs for market analysis
   - [ ] Create ESG performance visualizations
   - [ ] Build interactive dashboards

## Phase 4: Polish and Optimization

1. **Animations and Transitions**
   - [ ] Implement smooth transitions between tabs
   - [ ] Add micro-interactions and feedback animations
   - [ ] Ensure consistent animation patterns

2. **Responsive Design**
   - [x] Test and optimize for all screen sizes
   - [x] Implement mobile-specific UI adjustments
   - [x] Ensure touch-friendly interfaces

3. **Performance Optimization**
   - [ ] Implement code splitting for each tab
   - [ ] Optimize component rendering
   - [ ] Add virtualization for long lists

## Phase 5: Testing and Deployment

1. **Testing**
   - [ ] Write unit tests for components
   - [ ] Implement integration tests for key user flows
   - [ ] Perform cross-browser testing

2. **Deployment Preparation**
   - [ ] Set up build process
   - [ ] Configure environment variables
   - [ ] Prepare deployment scripts

3. **Documentation**
   - [ ] Document component API
   - [ ] Create usage examples
   - [ ] Write developer guidelines

## Component Breakdown

### Common Components

1. **Header**
   - [ ] Logo
   - [ ] ESG Status Indicators
   - [ ] User Profile

2. **Navigation**
   - [ ] Tab buttons
   - [ ] Active tab indicator
   - [ ] Responsive behavior

3. **UI Components**
   - [ ] Button (primary, secondary, with icon)
   - [ ] Card (product, info, stat)
   - [ ] Badge (ESG ratings, status indicators)
   - [ ] ProgressBar (for ESG metrics)

### Feature Components

1. **SmartFinder**
   - [x] SearchBar
   - [x] IndustryFilters
   - [x] AdvancedFilters
   - [x] SearchResults

2. **MarketAnalysis**
   - [ ] MarketStats
   - [ ] RegionalDistribution
   - [ ] ApplicationSegments

3. **ESGDashboard**
   - [ ] ESGScorecard
   - [ ] PerformanceChart
   - [ ] SupplierRankings
   - [ ] SustainabilityGoals

## Mock API Structure

```javascript
// Example mock API structure
const api = {
  // Pump related endpoints
  pumps: {
    search: (params) => mockFetch('pumps', params),
    getById: (id) => mockFetch(`pumps/${id}`),
    getRecommendations: (params) => mockFetch('pumps/recommendations', params),
  },
  
  // Supplier related endpoints
  suppliers: {
    getAll: () => mockFetch('suppliers'),
    getById: (id) => mockFetch(`suppliers/${id}`),
    getByESGRating: (rating) => mockFetch(`suppliers/esg/${rating}`),
  },
  
  // Market data endpoints
  market: {
    getAnalysis: () => mockFetch('market/analysis'),
    getRegionalData: () => mockFetch('market/regional'),
    getTrends: () => mockFetch('market/trends'),
  },
  
  // ESG related endpoints
  esg: {
    getDashboard: () => mockFetch('esg/dashboard'),
    getSupplierRatings: () => mockFetch('esg/suppliers'),
    generateReport: (params) => mockFetch('esg/report', params, 'POST'),
  },
  
  // OEM related endpoints
  oem: {
    getAll: () => mockFetch('oem'),
    getById: (id) => mockFetch(`oem/${id}`),
    getNewReleases: () => mockFetch('oem/releases'),
  },
};
```

## State Management

We'll use a combination of React Context and local component state:

1. **AppContext**: Global application state
   - [x] Current active tab
   - [ ] User preferences
   - [ ] Global notifications

2. **SearchContext**: Search-related state
   - [x] Search parameters
   - [x] Filter selections
   - [x] Search results

3. **Local Component State**: UI-specific state
   - [ ] Form inputs
   - [ ] Toggle states
   - [ ] Animation states

## Timeline

1. **Phase 1**: 1 week
2. **Phase 2**: 2 weeks
3. **Phase 3**: 3 weeks
4. **Phase 4**: 1 week
5. **Phase 5**: 1 week

**Total Estimated Time**: 8 weeks

## Next Steps

1. [ ] Review this plan with stakeholders
2. [ ] Set up the initial project structure
3. [ ] Begin implementation of common components
4. [ ] Create mock API services
5. [ ] Implement the first tab (Smart Finder)

## Conclusion

This migration plan provides a structured approach to converting the ProcurAI frontend from HTML to React while maintaining the existing UI design and functionality. By following component design principles and functional programming approaches, we'll create a maintainable, scalable, and performant application.