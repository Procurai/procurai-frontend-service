const spares = [
  {
    id: 'sp001',
    name: 'Mechanical Seal Kit',
    category: 'seals',
    compatibility: ['centrifugal', 'multistage'],
    price: 8500,
    material: 'silicon-carbide',
    inStock: true,
    deliveryTime: 2,
    image: 'https://via.placeholder.com/150',
    description: 'High-performance mechanical seal kit for centrifugal and multistage pumps.'
  },
  {
    id: 'sp002',
    name: 'Impeller Assembly',
    category: 'impellers',
    compatibility: ['centrifugal'],
    price: 12000,
    material: 'stainless-steel',
    inStock: true,
    deliveryTime: 3,
    image: 'https://via.placeholder.com/150',
    description: 'Precision-balanced stainless steel impeller for optimal flow performance.'
  },
  {
    id: 'sp003',
    name: 'Bearing Housing Kit',
    category: 'bearings',
    compatibility: ['centrifugal', 'multistage', 'self-priming'],
    price: 9500,
    material: 'cast-iron',
    inStock: true,
    deliveryTime: 2,
    image: 'https://via.placeholder.com/150',
    description: 'Complete bearing housing assembly with high-quality bearings and seals.'
  },
  {
    id: 'sp004',
    name: 'Shaft Sleeve',
    category: 'shafts',
    compatibility: ['centrifugal', 'multistage', 'vertical-turbine'],
    price: 3200,
    material: 'stainless-steel',
    inStock: true,
    deliveryTime: 1,
    image: 'https://via.placeholder.com/150',
    description: 'Hardened stainless steel shaft sleeve for extended service life.'
  },
  {
    id: 'sp005',
    name: 'O-Ring Kit',
    category: 'seals',
    compatibility: ['all'],
    price: 1500,
    material: 'viton',
    inStock: true,
    deliveryTime: 1,
    image: 'https://via.placeholder.com/150',
    description: 'Complete set of Viton O-rings for chemical resistance and high temperature applications.'
  },
  {
    id: 'sp006',
    name: 'Wear Ring Set',
    category: 'wear-parts',
    compatibility: ['centrifugal', 'multistage'],
    price: 4800,
    material: 'bronze',
    inStock: false,
    deliveryTime: 5,
    image: 'https://via.placeholder.com/150',
    description: 'Bronze wear rings to maintain pump efficiency and reduce internal recirculation.'
  },
  {
    id: 'sp007',
    name: 'Coupling Assembly',
    category: 'couplings',
    compatibility: ['centrifugal', 'multistage', 'self-priming'],
    price: 7200,
    material: 'steel',
    inStock: true,
    deliveryTime: 2,
    image: 'https://via.placeholder.com/150',
    description: 'Flexible coupling assembly for smooth power transmission and vibration reduction.'
  },
  {
    id: 'sp008',
    name: 'Gasket Set',
    category: 'seals',
    compatibility: ['all'],
    price: 2200,
    material: 'compressed-fiber',
    inStock: true,
    deliveryTime: 1,
    image: 'https://via.placeholder.com/150',
    description: 'Complete set of compressed fiber gaskets for various pump models.'
  },
  {
    id: 'sp009',
    name: 'Diffuser Assembly',
    category: 'hydraulics',
    compatibility: ['multistage'],
    price: 8900,
    material: 'cast-iron',
    inStock: false,
    deliveryTime: 7,
    image: 'https://via.placeholder.com/150',
    description: 'Precision-engineered diffuser assembly for multistage pumps.'
  },
  {
    id: 'sp010',
    name: 'Base Plate',
    category: 'mountings',
    compatibility: ['centrifugal', 'multistage'],
    price: 15000,
    material: 'steel',
    inStock: false,
    deliveryTime: 10,
    image: 'https://via.placeholder.com/150',
    description: 'Heavy-duty steel base plate for stable pump mounting and alignment.'
  },
  {
    id: 'sp011',
    name: 'Pressure Gauge',
    category: 'instruments',
    compatibility: ['all'],
    price: 3500,
    material: 'stainless-steel',
    inStock: true,
    deliveryTime: 1,
    image: 'https://via.placeholder.com/150',
    description: 'Glycerin-filled pressure gauge with stainless steel case for accurate pressure monitoring.'
  },
  {
    id: 'sp012',
    name: 'Flow Meter',
    category: 'instruments',
    compatibility: ['all'],
    price: 18500,
    material: 'stainless-steel',
    inStock: true,
    deliveryTime: 3,
    image: 'https://via.placeholder.com/150',
    description: 'Digital flow meter for precise flow measurement and monitoring.'
  }
];

export default spares;