import React, { useState } from 'react';
import Card from '../../common/ui/Card';

const EmergencyForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    pumpType: '',
    issue: '',
    location: '',
    contactName: '',
    contactPhone: '',
    urgent: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card className="p-6 border-l-4 border-red-500">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Request Emergency Service</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Pump Type</label>
            <select
              name="pumpType"
              value={formData.pumpType}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              required
            >
              <option value="">Select Pump Type</option>
              <option value="centrifugal">Centrifugal</option>
              <option value="submersible">Submersible</option>
              <option value="multistage">Multistage</option>
              <option value="self-priming">Self-Priming</option>
              <option value="vertical-turbine">Vertical Turbine</option>
              <option value="positive-displacement">Positive Displacement</option>
              <option value="magnetic-drive">Magnetic Drive</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="City, State"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              required
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Issue Description</label>
          <textarea
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            placeholder="Describe the emergency issue..."
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            rows="3"
            required
          ></textarea>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contact Name</label>
            <input
              type="text"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contact Phone</label>
            <input
              type="tel"
              name="contactPhone"
              value={formData.contactPhone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              required
            />
          </div>
        </div>
        
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="urgent"
            name="urgent"
            checked={formData.urgent}
            onChange={handleChange}
            className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
          />
          <label htmlFor="urgent" className="ml-2 block text-sm text-gray-700">
            This is an urgent emergency (response within 2 hours)
          </label>
        </div>
        
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 transition-all flex items-center justify-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
          Submit Emergency Request
        </button>
      </form>
    </Card>
  );
};

export default EmergencyForm;