import { useState, useEffect, useCallback } from 'react';
import { handleApiError } from '../utils/apiErrorHandler';

// Custom hook for API calls with loading states
export const useApi = (apiCall, dependencies = []) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null
  });

  const fetchData = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const data = await apiCall();
      setState({ data, loading: false, error: null });
    } catch (error) {
      const errorInfo = handleApiError(error);
      setState({ data: null, loading: false, error: errorInfo });
    }
  }, dependencies);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { ...state, refetch: fetchData };
};

// Hook for manual API calls (like form submissions)
export const useApiCall = () => {
  const [state, setState] = useState({
    loading: false,
    error: null
  });

  const execute = useCallback(async (apiCall, context = '') => {
    setState({ loading: true, error: null });
    
    try {
      const result = await apiCall();
      setState({ loading: false, error: null });
      return { success: true, data: result };
    } catch (error) {
      const errorInfo = handleApiError(error, context);
      setState({ loading: false, error: errorInfo });
      return { success: false, error: errorInfo };
    }
  }, []);

  return { ...state, execute };
};