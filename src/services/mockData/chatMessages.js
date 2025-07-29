const chatMessages = [
  {
    id: 'msg001',
    sender: 'bot',
    content: 'Hello! I\'m ProcurAI Assistant. How can I help you with your pump procurement needs today?',
    timestamp: '2023-07-16T09:00:00Z'
  },
  {
    id: 'msg002',
    sender: 'user',
    content: 'I need a centrifugal pump for a water treatment plant',
    timestamp: '2023-07-16T09:01:15Z'
  },
  {
    id: 'msg003',
    sender: 'bot',
    content: 'I\'d be happy to help you find a centrifugal pump for your water treatment plant. To provide the best recommendations, could you please share some specific requirements such as:\n\n1. Flow rate needed (in GPM or m³/h)\n2. Total head required (in feet or meters)\n3. The fluid being pumped (clean water, wastewater, etc.)\n4. Any specific material requirements\n5. Any energy efficiency or ESG requirements',
    timestamp: '2023-07-16T09:01:45Z'
  },
  {
    id: 'msg004',
    sender: 'user',
    content: 'We need a flow rate of about 500 GPM and head of 100 feet. It\'s for clean water. We prefer stainless steel and high energy efficiency.',
    timestamp: '2023-07-16T09:03:30Z'
  },
  {
    id: 'msg005',
    sender: 'bot',
    content: 'Thank you for providing those details. Based on your requirements, I recommend considering these options:\n\n1. **Grundfos CR 95-2** - Stainless steel multistage centrifugal pump with 520 GPM capacity, 105 ft head, and 5-star energy rating\n\n2. **KSB Etanorm 100-080-250** - Stainless steel end-suction centrifugal pump with 510 GPM, 110 ft head, and 4-star energy rating\n\n3. **Xylem e-SV 92SV2G075T** - Vertical multistage stainless steel pump with 495 GPM, 98 ft head, and 5-star energy rating\n\nWould you like more detailed specifications for any of these models?',
    timestamp: '2023-07-16T09:04:15Z',
    recommendations: [
      {
        id: 'p015',
        name: 'Grundfos CR 95-2',
        manufacturer: 'Grundfos',
        type: 'centrifugal',
        flowRate: 520,
        head: 105,
        efficiency: 87,
        material: 'stainless-steel',
        energyRating: '5-star'
      },
      {
        id: 'p023',
        name: 'KSB Etanorm 100-080-250',
        manufacturer: 'KSB',
        type: 'centrifugal',
        flowRate: 510,
        head: 110,
        efficiency: 84,
        material: 'stainless-steel',
        energyRating: '4-star'
      },
      {
        id: 'p031',
        name: 'Xylem e-SV 92SV2G075T',
        manufacturer: 'Xylem',
        type: 'centrifugal',
        flowRate: 495,
        head: 98,
        efficiency: 86,
        material: 'stainless-steel',
        energyRating: '5-star'
      }
    ]
  }
];

// Predefined quick responses
const quickResponses = [
  "I need help finding a pump for my application",
  "What are the most energy-efficient pumps?",
  "Show me pumps with the best ESG ratings",
  "I need emergency pump service",
  "Compare centrifugal vs. positive displacement pumps",
  "What's the typical delivery time for Grundfos pumps?"
];

// Suggested questions based on context
const getSuggestedQuestions = (lastMessageContent) => {
  if (lastMessageContent.includes('centrifugal pump')) {
    return [
      "What's the efficiency range of centrifugal pumps?",
      "Which manufacturers offer the best centrifugal pumps?",
      "What are typical maintenance requirements for centrifugal pumps?",
      "Show me centrifugal pumps with stainless steel construction"
    ];
  }
  
  if (lastMessageContent.includes('energy efficiency') || lastMessageContent.includes('energy rating')) {
    return [
      "What's the payback period for 5-star rated pumps?",
      "How much can I save with a 5-star vs 3-star pump?",
      "Which manufacturers focus on energy efficiency?",
      "Are there any government incentives for energy-efficient pumps?"
    ];
  }
  
  if (lastMessageContent.includes('stainless steel')) {
    return [
      "What are the benefits of stainless steel pumps?",
      "How does stainless steel compare to cast iron for pumps?",
      "Which stainless steel grade is best for water applications?",
      "Are there alternatives to stainless steel with similar benefits?"
    ];
  }
  
  // Default suggestions
  return [
    "Tell me more about pump efficiency",
    "What factors should I consider when selecting a pump?",
    "How do I calculate the total cost of ownership for a pump?",
    "What are the latest innovations in pump technology?"
  ];
};

export { chatMessages, quickResponses, getSuggestedQuestions };