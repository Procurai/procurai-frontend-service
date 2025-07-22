import React from 'react';
import { useAppContext } from '../../context/AppContext';
import SmartFinder from '../tabs/SmartFinder/SmartFinder';

const TabContent = () => {
  const { activeTab } = useAppContext();

  const renderTabContent = () => {
    switch (activeTab) {
      case 'finder':
        return <SmartFinder />;
      case 'spares':
        return <div>Spares & Accessories Content</div>;
      case 'oem-insights':
        return <div>OEM Insights Content</div>;
      case 'enterprise':
        return <div>Enterprise AI Content</div>;
      case 'results':
        return <div>AI Results Content</div>;
      case 'comparison':
        return <div>Comparison Content</div>;
      case 'sustainability':
        return <div>ESG Dashboard Content</div>;
      case 'emergency':
        return <div>Emergency Content</div>;
      case 'chat':
        return <div>AI Assistant Content</div>;
      default:
        return <SmartFinder />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 md:py-8">
      {renderTabContent()}
    </div>
  );
};

export default TabContent;