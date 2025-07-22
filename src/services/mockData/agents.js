const agents = [
  {
    id: 'agent001',
    name: 'ProcurementGPT',
    type: 'procurement',
    status: 'active',
    description: 'Autonomous agent for end-to-end procurement processes with supplier negotiation capabilities.',
    capabilities: [
      'Supplier identification and evaluation',
      'RFQ generation and analysis',
      'Price negotiation with suppliers',
      'Contract drafting and review',
      'Purchase order management'
    ],
    integrations: ['SAP', 'Oracle', 'Coupa'],
    avgSavings: 18.5,
    processingTime: 'Minutes',
    lastRun: '2023-07-15T14:30:00Z',
    icon: '🤖'
  },
  {
    id: 'agent002',
    name: 'SupplierAnalyst',
    type: 'analysis',
    status: 'active',
    description: 'Deep analysis of supplier performance, risk, and ESG compliance with predictive insights.',
    capabilities: [
      'Supplier performance tracking',
      'Risk assessment and monitoring',
      'ESG compliance verification',
      'Market intelligence gathering',
      'Supplier relationship optimization'
    ],
    integrations: ['Dun & Bradstreet', 'EcoVadis', 'Bloomberg'],
    avgSavings: 12.3,
    processingTime: 'Hours',
    lastRun: '2023-07-14T09:15:00Z',
    icon: '📊'
  },
  {
    id: 'agent003',
    name: 'ContractAI',
    type: 'legal',
    status: 'active',
    description: 'Automated contract analysis, drafting, and management with legal compliance verification.',
    capabilities: [
      'Contract clause analysis',
      'Legal compliance checking',
      'Risk identification',
      'Contract drafting assistance',
      'Renewal management'
    ],
    integrations: ['DocuSign', 'Icertis', 'Salesforce'],
    avgSavings: 22.7,
    processingTime: 'Minutes',
    lastRun: '2023-07-16T11:45:00Z',
    icon: '📝'
  },
  {
    id: 'agent004',
    name: 'InventoryOptimizer',
    type: 'inventory',
    status: 'active',
    description: 'Intelligent inventory management with demand forecasting and automatic reordering.',
    capabilities: [
      'Demand forecasting',
      'Inventory level optimization',
      'Automatic reordering',
      'Stockout prevention',
      'Warehouse optimization'
    ],
    integrations: ['SAP', 'NetSuite', 'Microsoft Dynamics'],
    avgSavings: 15.8,
    processingTime: 'Hours',
    lastRun: '2023-07-13T16:20:00Z',
    icon: '📦'
  },
  {
    id: 'agent005',
    name: 'LogisticsPlanner',
    type: 'logistics',
    status: 'maintenance',
    description: 'Route optimization and logistics planning with real-time tracking and disruption management.',
    capabilities: [
      'Route optimization',
      'Carrier selection',
      'Shipment tracking',
      'Disruption management',
      'Carbon footprint calculation'
    ],
    integrations: ['FedEx', 'DHL', 'Maersk'],
    avgSavings: 19.2,
    processingTime: 'Minutes',
    lastRun: '2023-07-10T08:30:00Z',
    icon: '🚚'
  },
  {
    id: 'agent006',
    name: 'SpendAnalyzer',
    type: 'finance',
    status: 'active',
    description: 'Comprehensive spend analysis with anomaly detection and cost-saving recommendations.',
    capabilities: [
      'Spend categorization',
      'Anomaly detection',
      'Cost-saving opportunity identification',
      'Budget tracking',
      'Vendor consolidation analysis'
    ],
    integrations: ['SAP', 'Oracle', 'Tableau'],
    avgSavings: 21.5,
    processingTime: 'Hours',
    lastRun: '2023-07-15T19:10:00Z',
    icon: '💰'
  },
  {
    id: 'agent007',
    name: 'ESGComplianceBot',
    type: 'compliance',
    status: 'active',
    description: 'Automated ESG compliance monitoring and reporting with regulatory updates.',
    capabilities: [
      'ESG data collection',
      'Compliance verification',
      'Regulatory tracking',
      'Report generation',
      'Improvement recommendations'
    ],
    integrations: ['EcoVadis', 'CDP', 'GRI'],
    avgSavings: 14.3,
    processingTime: 'Days',
    lastRun: '2023-07-12T13:45:00Z',
    icon: '🌱'
  },
  {
    id: 'agent008',
    name: 'MarketIntelligence',
    type: 'market',
    status: 'active',
    description: 'Real-time market monitoring with price trend analysis and opportunity alerts.',
    capabilities: [
      'Price trend analysis',
      'Market news monitoring',
      'Commodity price tracking',
      'Supplier market position analysis',
      'Opportunity alerting'
    ],
    integrations: ['Bloomberg', 'Reuters', 'S&P Global'],
    avgSavings: 17.9,
    processingTime: 'Minutes',
    lastRun: '2023-07-16T07:30:00Z',
    icon: '📈'
  }
];

export default agents;