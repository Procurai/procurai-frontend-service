import React, { createContext, useState, useContext } from 'react';
import api from '../services/api';

const ComparisonContext = createContext();

export const ComparisonProvider = ({ children }) => {
  const [comparedItems, setComparedItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const addItem = async (itemId) => {
    setLoading(true);
    try {
      const item = await api.pumps.getById(itemId);
      if (item) {
        setComparedItems(prev => {
          // Check if item already exists
          if (prev.some(i => i.id === item.id)) {
            return prev;
          }
          return [...prev, item];
        });
      }
    } catch (error) {
      console.error('Error adding item to comparison:', error);
    } finally {
      setLoading(false);
    }
  };

  const removeItem = (itemId) => {
    setComparedItems(prev => prev.filter(item => item.id !== itemId));
  };

  const clearAll = () => {
    setComparedItems([]);
  };

  const value = {
    comparedItems,
    loading,
    addItem,
    removeItem,
    clearAll
  };

  return <ComparisonContext.Provider value={value}>{children}</ComparisonContext.Provider>;
};

export const useComparison = () => {
  const context = useContext(ComparisonContext);
  if (context === undefined) {
    throw new Error('useComparison must be used within a ComparisonProvider');
  }
  return context;
};

export default ComparisonContext;