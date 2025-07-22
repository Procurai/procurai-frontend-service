const esgData = {
  // Overall ESG scores
  overallScores: {
    environmental: 78,
    social: 82,
    governance: 85,
    total: 81
  },
  
  // Monthly ESG trend data
  trends: {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    environmental: [65, 67, 68, 70, 72, 73, 74, 75, 76, 77, 78, 78],
    social: [70, 72, 74, 75, 76, 78, 79, 80, 81, 82, 82, 82],
    governance: [75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 85]
  },
  
  // Carbon footprint data
  carbonFootprint: {
    current: 12500, // tons CO2e
    previous: 15800, // tons CO2e
    reduction: 20.9, // percentage
    breakdown: {
      manufacturing: 45,
      transportation: 30,
      operations: 15,
      other: 10
    }
  },
  
  // Water usage data
  waterUsage: {
    current: 8500000, // liters
    previous: 9800000, // liters
    reduction: 13.3, // percentage
    recycled: 35 // percentage
  },
  
  // Energy consumption data
  energyConsumption: {
    current: 28500, // MWh
    previous: 32000, // MWh
    reduction: 10.9, // percentage
    renewable: 42 // percentage
  },
  
  // Supplier ESG compliance
  supplierCompliance: {
    total: 128,
    compliant: 105,
    inProgress: 18,
    nonCompliant: 5,
    topSuppliers: [
      { name: 'Grundfos India', score: 92, rating: 'A+' },
      { name: 'KSB Pumps', score: 90, rating: 'A+' },
      { name: 'Kirloskar Brothers', score: 87, rating: 'A' },
      { name: 'Flowserve India', score: 85, rating: 'A' },
      { name: 'Wilo Mather and Platt', score: 84, rating: 'A' }
    ]
  },
  
  // Sustainability goals
  goals: [
    {
      id: 'goal1',
      title: 'Carbon Neutrality',
      target: 'Achieve carbon neutrality by 2030',
      progress: 45,
      metrics: [
        { name: 'Carbon Reduction', value: '20.9%', status: 'on-track' },
        { name: 'Renewable Energy', value: '42%', status: 'on-track' },
        { name: 'Offset Programs', value: '15%', status: 'behind' }
      ]
    },
    {
      id: 'goal2',
      title: 'Water Conservation',
      target: 'Reduce water usage by 30% by 2025',
      progress: 65,
      metrics: [
        { name: 'Water Reduction', value: '13.3%', status: 'on-track' },
        { name: 'Water Recycling', value: '35%', status: 'on-track' },
        { name: 'Rainwater Harvesting', value: '25%', status: 'on-track' }
      ]
    },
    {
      id: 'goal3',
      title: 'Supplier ESG Compliance',
      target: '100% supplier ESG compliance by 2024',
      progress: 82,
      metrics: [
        { name: 'Compliant Suppliers', value: '82%', status: 'on-track' },
        { name: 'In Progress', value: '14%', status: 'on-track' },
        { name: 'Non-Compliant', value: '4%', status: 'on-track' }
      ]
    },
    {
      id: 'goal4',
      title: 'Circular Economy',
      target: 'Implement circular economy principles across all product lines',
      progress: 35,
      metrics: [
        { name: 'Recyclable Materials', value: '65%', status: 'on-track' },
        { name: 'Product Takeback', value: '30%', status: 'behind' },
        { name: 'Remanufacturing', value: '15%', status: 'behind' }
      ]
    }
  ],
  
  // Certifications and standards
  certifications: [
    { name: 'ISO 14001', status: 'certified', validUntil: '2025-06-30' },
    { name: 'ISO 50001', status: 'certified', validUntil: '2024-11-15' },
    { name: 'GRI Standards', status: 'compliant', validUntil: '2023-12-31' },
    { name: 'CDP Climate Change', status: 'A-', validUntil: '2023-12-31' },
    { name: 'EcoVadis', status: 'Gold', validUntil: '2024-03-15' }
  ]
};

export default esgData;