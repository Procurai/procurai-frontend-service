import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SmartFinder from './components/tabs/SmartFinder/SmartFinder';
import SparesAccessories from './components/tabs/SparesAccessories/SparesAccessories';
import OEMInsights from './components/tabs/OEMInsights/OEMInsights';
import Enterprise from './components/tabs/Enterprise/Enterprise';
import Results from './components/tabs/Results/Results';
import Comparison from './components/tabs/Comparison/Comparison';
import Sustainability from './components/tabs/Sustainability/Sustainability';
import Emergency from './components/tabs/Emergency/Emergency';
import Chat from './components/tabs/Chat/Chat';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/finder" replace />} />
      <Route path="/finder" element={<SmartFinder />} />
      <Route path="/spares" element={<SparesAccessories />} />
      <Route path="/oem-insights" element={<OEMInsights />} />
      <Route path="/enterprise" element={<Enterprise />} />
      <Route path="/results" element={<Results />} />
      <Route path="/comparison" element={<Comparison />} />
      <Route path="/sustainability" element={<Sustainability />} />
      <Route path="/emergency" element={<Emergency />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="*" element={<Navigate to="/finder" replace />} />
    </Routes>
  );
};

export default AppRoutes;