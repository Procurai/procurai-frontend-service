const emergency = {
  // Emergency suppliers with 24/7 availability
  suppliers: [
    {
      id: 'es001',
      name: 'Rapid Pump Solutions',
      location: 'Mumbai, Maharashtra',
      distance: 12.5, // km
      responseTime: 2, // hours
      rating: 4.8,
      reviews: 42,
      available24x7: true,
      specialties: ['centrifugal', 'submersible', 'multistage'],
      contact: {
        phone: '+91-9876543210',
        email: 'support@rapidpumpsolutions.com'
      }
    },
    {
      id: 'es002',
      name: 'Industrial Pump Emergency Services',
      location: 'Pune, Maharashtra',
      distance: 28.3, // km
      responseTime: 3, // hours
      rating: 4.7,
      reviews: 36,
      available24x7: true,
      specialties: ['centrifugal', 'positive-displacement', 'vertical-turbine'],
      contact: {
        phone: '+91-9876543211',
        email: 'emergency@ipservices.com'
      }
    },
    {
      id: 'es003',
      name: 'QuickFix Pump Repairs',
      location: 'Thane, Maharashtra',
      distance: 18.7, // km
      responseTime: 1.5, // hours
      rating: 4.9,
      reviews: 58,
      available24x7: true,
      specialties: ['centrifugal', 'submersible', 'self-priming'],
      contact: {
        phone: '+91-9876543212',
        email: 'service@quickfixpumps.com'
      }
    },
    {
      id: 'es004',
      name: 'Precision Pump Maintenance',
      location: 'Navi Mumbai, Maharashtra',
      distance: 22.1, // km
      responseTime: 2.5, // hours
      rating: 4.6,
      reviews: 29,
      available24x7: true,
      specialties: ['multistage', 'magnetic-drive', 'peristaltic'],
      contact: {
        phone: '+91-9876543213',
        email: 'help@precisionpumps.com'
      }
    },
    {
      id: 'es005',
      name: '24x7 Pump Rescue',
      location: 'Kalyan, Maharashtra',
      distance: 35.8, // km
      responseTime: 3.5, // hours
      rating: 4.5,
      reviews: 22,
      available24x7: true,
      specialties: ['centrifugal', 'submersible', 'positive-displacement'],
      contact: {
        phone: '+91-9876543214',
        email: 'rescue@24x7pumps.com'
      }
    }
  ],
  
  // Emergency parts in stock
  parts: [
    {
      id: 'ep001',
      name: 'Mechanical Seal Kit - Emergency',
      category: 'seals',
      compatibility: ['centrifugal', 'multistage'],
      price: 12500,
      inStock: true,
      deliveryTime: 'Same Day',
      location: 'Mumbai Warehouse'
    },
    {
      id: 'ep002',
      name: 'Impeller Assembly - Rapid Replacement',
      category: 'impellers',
      compatibility: ['centrifugal'],
      price: 18000,
      inStock: true,
      deliveryTime: 'Same Day',
      location: 'Mumbai Warehouse'
    },
    {
      id: 'ep003',
      name: 'Bearing Housing Kit - Emergency',
      category: 'bearings',
      compatibility: ['centrifugal', 'multistage', 'self-priming'],
      price: 14500,
      inStock: true,
      deliveryTime: 'Same Day',
      location: 'Pune Warehouse'
    },
    {
      id: 'ep004',
      name: 'Shaft Sleeve - Quick Replace',
      category: 'shafts',
      compatibility: ['centrifugal', 'multistage', 'vertical-turbine'],
      price: 5200,
      inStock: true,
      deliveryTime: 'Same Day',
      location: 'Mumbai Warehouse'
    },
    {
      id: 'ep005',
      name: 'O-Ring Kit - Emergency',
      category: 'seals',
      compatibility: ['all'],
      price: 2500,
      inStock: true,
      deliveryTime: 'Same Day',
      location: 'Thane Warehouse'
    },
    {
      id: 'ep006',
      name: 'Coupling Assembly - Rapid Replacement',
      category: 'couplings',
      compatibility: ['centrifugal', 'multistage', 'self-priming'],
      price: 9800,
      inStock: true,
      deliveryTime: 'Same Day',
      location: 'Mumbai Warehouse'
    }
  ],
  
  // Recent emergency cases
  cases: [
    {
      id: 'ec001',
      title: 'Cooling Water Pump Failure',
      industry: 'Power Generation',
      location: 'Nashik, Maharashtra',
      pumpType: 'centrifugal',
      responseTime: 1.8, // hours
      resolutionTime: 6, // hours
      description: 'Emergency replacement of mechanical seal and bearings for cooling water pump at power plant.',
      status: 'resolved'
    },
    {
      id: 'ec002',
      title: 'Process Pump Breakdown',
      industry: 'Chemical',
      location: 'Pune, Maharashtra',
      pumpType: 'magnetic-drive',
      responseTime: 2.2, // hours
      resolutionTime: 8, // hours
      description: 'Complete replacement of magnetic drive assembly for critical process pump.',
      status: 'resolved'
    },
    {
      id: 'ec003',
      title: 'Wastewater Pump Failure',
      industry: 'Municipal',
      location: 'Mumbai, Maharashtra',
      pumpType: 'submersible',
      responseTime: 1.5, // hours
      resolutionTime: 5, // hours
      description: 'Emergency repair of submersible wastewater pump at municipal treatment plant.',
      status: 'resolved'
    },
    {
      id: 'ec004',
      title: 'Boiler Feed Pump Issue',
      industry: 'Textile',
      location: 'Thane, Maharashtra',
      pumpType: 'multistage',
      responseTime: 2.0, // hours
      resolutionTime: 10, // hours
      description: 'Replacement of damaged impellers and wear rings on critical boiler feed pump.',
      status: 'in-progress'
    },
    {
      id: 'ec005',
      title: 'Cooling Tower Pump Breakdown',
      industry: 'Pharmaceutical',
      location: 'Navi Mumbai, Maharashtra',
      pumpType: 'centrifugal',
      responseTime: 1.7, // hours
      resolutionTime: null, // still in progress
      description: 'Emergency service call for cooling tower pump failure affecting production line.',
      status: 'in-progress'
    }
  ]
};

export default emergency;