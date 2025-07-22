const tasks = [
  {
    id: 'task001',
    agentId: 'agent001',
    title: 'Quarterly Pump Supplier Evaluation',
    status: 'completed',
    progress: 100,
    startTime: '2023-07-10T08:00:00Z',
    endTime: '2023-07-10T08:12:00Z',
    results: {
      summary: 'Evaluated 28 pump suppliers based on performance, pricing, and ESG metrics.',
      findings: [
        'Identified 3 suppliers with significant price increases',
        'Found 2 new suppliers with better ESG ratings',
        'Detected quality issues with Supplier XYZ'
      ],
      recommendations: [
        'Initiate negotiations with Supplier ABC for better pricing',
        'Consider shifting 20% volume to new Supplier DEF',
        'Request quality improvement plan from Supplier XYZ'
      ],
      savings: '₹4.2M annually'
    }
  },
  {
    id: 'task002',
    agentId: 'agent003',
    title: 'Contract Review - Grundfos Supply Agreement',
    status: 'completed',
    progress: 100,
    startTime: '2023-07-12T14:30:00Z',
    endTime: '2023-07-12T14:35:00Z',
    results: {
      summary: 'Analyzed 42-page supply agreement with Grundfos for legal compliance and risk assessment.',
      findings: [
        'Identified 3 clauses with potential legal risks',
        'Found missing ESG compliance requirements',
        'Detected unfavorable payment terms (60 days)'
      ],
      recommendations: [
        'Modify clause 12.3 to limit liability exposure',
        'Add ESG compliance requirements in section 8',
        'Negotiate payment terms to 30 days'
      ],
      savings: '₹850K in risk mitigation'
    }
  },
  {
    id: 'task003',
    agentId: 'agent006',
    title: 'Q2 Spend Analysis - Pump Division',
    status: 'completed',
    progress: 100,
    startTime: '2023-07-14T09:00:00Z',
    endTime: '2023-07-14T11:30:00Z',
    results: {
      summary: 'Analyzed ₹28M in pump division spend across 120+ suppliers and 1,200+ transactions.',
      findings: [
        'Identified 15% spend leakage to non-contracted suppliers',
        'Found duplicate payments totaling ₹320K',
        'Detected opportunity for 8% volume discount with top supplier'
      ],
      recommendations: [
        'Implement contract compliance measures',
        'Recover duplicate payments',
        'Negotiate volume discount with Supplier ABC'
      ],
      savings: '₹3.8M annually'
    }
  },
  {
    id: 'task004',
    agentId: 'agent002',
    title: 'Supplier Risk Assessment - Maharashtra Region',
    status: 'in-progress',
    progress: 68,
    startTime: '2023-07-16T13:00:00Z',
    endTime: null,
    results: null
  },
  {
    id: 'task005',
    agentId: 'agent004',
    title: 'Inventory Optimization - Centrifugal Pumps',
    status: 'completed',
    progress: 100,
    startTime: '2023-07-11T10:15:00Z',
    endTime: '2023-07-11T14:45:00Z',
    results: {
      summary: 'Optimized inventory levels for 120 centrifugal pump SKUs across 5 warehouses.',
      findings: [
        'Identified 18 overstocked SKUs with ₹4.2M excess inventory',
        'Found 12 understocked SKUs with stockout risk',
        'Detected seasonal demand patterns for 30% of SKUs'
      ],
      recommendations: [
        'Reduce safety stock for 18 SKUs',
        'Increase reorder points for 12 SKUs',
        'Implement seasonal forecasting model'
      ],
      savings: '₹5.1M in inventory reduction'
    }
  },
  {
    id: 'task006',
    agentId: 'agent007',
    title: 'ESG Compliance Audit - Top 20 Suppliers',
    status: 'scheduled',
    progress: 0,
    startTime: '2023-07-18T09:00:00Z',
    endTime: null,
    results: null
  },
  {
    id: 'task007',
    agentId: 'agent008',
    title: 'Market Intelligence Report - Pump Industry',
    status: 'completed',
    progress: 100,
    startTime: '2023-07-15T07:00:00Z',
    endTime: '2023-07-15T07:05:00Z',
    results: {
      summary: 'Analyzed market trends, pricing, and competitive landscape for industrial pumps in India.',
      findings: [
        'Detected 5% average price increase across the industry',
        'Identified emerging supplier in Gujarat with competitive pricing',
        'Found potential supply chain disruption due to component shortage'
      ],
      recommendations: [
        'Lock in prices with key suppliers for next 6 months',
        'Evaluate new supplier in Gujarat for potential partnership',
        'Secure critical components with advance orders'
      ],
      savings: '₹2.8M in cost avoidance'
    }
  },
  {
    id: 'task008',
    agentId: 'agent005',
    title: 'Logistics Route Optimization - Southern Region',
    status: 'failed',
    progress: 45,
    startTime: '2023-07-13T11:30:00Z',
    endTime: '2023-07-13T11:45:00Z',
    error: 'Insufficient data for delivery locations in Tier 3 cities',
    results: null
  }
];

export default tasks;