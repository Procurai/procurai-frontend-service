import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import ESGScorecard from './ESGScorecard';
import ESGTrends from './ESGTrends';
import CarbonFootprint from './CarbonFootprint';
import ResourceMetrics from './ResourceMetrics';
import SupplierCompliance from './SupplierCompliance';
import SustainabilityGoals from './SustainabilityGoals';
import Certifications from './Certifications';

const Sustainability = () => {
  const [esgData, setEsgData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await api.esg.getDashboard();
        setEsgData(data);
      } catch (error) {
        console.error('Error fetching ESG data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mb-4"></div>
        <p className="text-lg text-gray-600">Loading sustainability data...</p>
      </div>
    );
  }

  if (!esgData) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Unavailable</h2>
        <p className="text-gray-600 mb-6">
          We couldn't load the sustainability dashboard data. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">ESG Dashboard</h2>
        <p className="text-lg text-gray-600 mt-2">
          Comprehensive Environmental, Social, and Governance metrics for sustainable procurement
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <ESGScorecard scores={esgData.overallScores} />
        
        <ESGTrends trends={esgData.trends} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CarbonFootprint data={esgData.carbonFootprint} />
          <SupplierCompliance data={esgData.supplierCompliance} />
        </div>
        
        <ResourceMetrics 
          waterData={esgData.waterUsage} 
          energyData={esgData.energyConsumption} 
        />
        
        <SustainabilityGoals goals={esgData.goals} />
        
        <Certifications certifications={esgData.certifications} />
        
        <div className="flex justify-end">
          <button 
            onClick={() => api.esg.generateReport()}
            className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-all flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            Generate ESG Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;