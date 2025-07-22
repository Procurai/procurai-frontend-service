import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('finder');
  const [userPreferences, setUserPreferences] = useState({});
  const [notifications, setNotifications] = useState([]);

  const value = {
    activeTab,
    setActiveTab,
    userPreferences,
    setUserPreferences,
    notifications,
    setNotifications
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export default AppContext;