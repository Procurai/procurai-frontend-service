import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const useTab = () => {
  const { activeTab, setActiveTab } = useAppContext();
  const location = useLocation();
  const navigate = useNavigate();

  // Sync route with active tab
  useEffect(() => {
    const path = location.pathname.substring(1) || 'finder';
    if (path !== activeTab) {
      setActiveTab(path);
    }
  }, [location, activeTab, setActiveTab]);

  // Navigate to tab
  const navigateToTab = (tabId) => {
    setActiveTab(tabId);
    navigate(`/${tabId}`);
  };

  return {
    activeTab,
    navigateToTab
  };
};

export default useTab;