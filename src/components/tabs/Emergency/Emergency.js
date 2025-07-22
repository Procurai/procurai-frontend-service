import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import Card from '../../common/ui/Card';
import EmergencyForm from './EmergencyForm';
import EmergencySuppliers from './EmergencySuppliers';
import EmergencyParts from './EmergencyParts';
import EmergencyCases from './EmergencyCases';

const Emergency = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [parts, setParts] = useState([]);
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState({
    suppliers: true,
    parts: true,
    cases: true
  });
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch emergency suppliers
      setLoading(prev => ({ ...prev, suppliers: true }));
      const suppliersData = await api.emergency.getSuppliers({ sortBy: 'responseTime' });
      setSuppliers(suppliersData);
      setLoading(prev => ({ ...prev, suppliers: false }));

      // Fetch emergency parts
      setLoading(prev => ({ ...prev, parts: true }));
      const partsData = await api.emergency.getParts();
      setParts(partsData);
      setLoading(prev => ({ ...prev, parts: false }));

      // Fetch emergency cases
      setLoading(prev => ({ ...prev, cases: true }));
      const casesData = await api.emergency.getCases();
      setCases(casesData);
      setLoading(prev => ({ ...prev, cases: false }));
    } catch (error) {
      console.error('Error fetching emergency data:', error);
      setLoading({
        suppliers: false,
        parts: false,
        cases: false
      });
    }
  };

  const handleSubmitRequest = async (formData) => {
    try {
      const response = await api.emergency.requestService(formData);
      setRequestSubmitted(true);
      console.log('Emergency request submitted:', response);
    } catch (error) {
      console.error('Error submitting emergency request:', error);
    }
  };

  const handleContactSupplier = (supplier) => {
    setSelectedSupplier(supplier);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Emergency Services</h2>
        <p className="text-lg text-gray-600 mt-2">
          Get urgent pump service and parts within hours
        </p>
      </div>
      
      {requestSubmitted ? (
        <Card className="p-6 bg-green-50 border border-green-200">
          <div className="flex items-center mb-4">
            <svg className="w-8 h-8 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="text-xl font-bold text-green-800">Emergency Request Submitted</h3>
          </div>
          <p className="text-green-700 mb-4">
            Your emergency request has been submitted successfully. A service provider will contact you within 2 hours.
          </p>
          <button 
            onClick={() => setRequestSubmitted(false)}
            className="text-green-700 font-medium hover:text-green-800"
          >
            Submit another request
          </button>
        </Card>
      ) : (
        <EmergencyForm onSubmit={handleSubmitRequest} />
      )}
      
      {selectedSupplier ? (
        <Card className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Contact {selectedSupplier.name}</h3>
            <button 
              onClick={() => setSelectedSupplier(null)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-2">{selectedSupplier.description || 'Emergency pump service provider with 24/7 availability.'}</p>
              
              <div className="space-y-2">
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span>{selectedSupplier.contact.phone}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span>{selectedSupplier.contact.email}</span>
                </div>
              </div>
            </div>
            
            <div>
              <a 
                href={`tel:${selectedSupplier.contact.phone}`}
                className="block w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-all text-center mb-3"
              >
                Call Now
              </a>
              <a 
                href={`mailto:${selectedSupplier.contact.email}`}
                className="block w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-300 transition-all text-center"
              >
                Send Email
              </a>
            </div>
          </div>
        </Card>
      ) : (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Service Providers</h3>
            <EmergencySuppliers 
              suppliers={suppliers} 
              loading={loading.suppliers} 
              onContactSupplier={handleContactSupplier} 
            />
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Parts</h3>
            <EmergencyParts parts={parts} loading={loading.parts} />
          </div>
        </div>
      )}
      
      <Card className="p-6">
        <EmergencyCases cases={cases} />
      </Card>
    </div>
  );
};

export default Emergency;