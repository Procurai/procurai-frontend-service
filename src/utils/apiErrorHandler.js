// API Error Handler Utility
export const handleApiError = (error, context = '') => {
  console.error(`API Error${context ? ` in ${context}` : ''}:`, error);
  
  // Check if it's a network error
  if (!navigator.onLine) {
    return {
      message: 'No internet connection. Please check your network and try again.',
      type: 'network'
    };
  }
  
  // Check if backend is not running
  if (error.message.includes('Failed to fetch') || error.message.includes('ERR_CONNECTION_REFUSED')) {
    return {
      message: 'Backend service is not available. Please ensure the backend server is running on http://localhost:3001',
      type: 'backend_down'
    };
  }
  
  // Handle specific HTTP errors
  if (error.message.includes('HTTP 404')) {
    return {
      message: 'The requested resource was not found.',
      type: 'not_found'
    };
  }
  
  if (error.message.includes('HTTP 400')) {
    return {
      message: 'Invalid request. Please check your input and try again.',
      type: 'bad_request'
    };
  }
  
  if (error.message.includes('HTTP 500')) {
    return {
      message: 'Server error. Please try again later.',
      type: 'server_error'
    };
  }
  
  // Default error message
  return {
    message: error.message || 'An unexpected error occurred. Please try again.',
    type: 'unknown'
  };
};

// Loading state manager
export const createLoadingState = () => {
  return {
    isLoading: false,
    error: null,
    data: null
  };
};

// Async operation wrapper with error handling
export const withErrorHandling = async (asyncOperation, context = '') => {
  try {
    const result = await asyncOperation();
    return { success: true, data: result, error: null };
  } catch (error) {
    const errorInfo = handleApiError(error, context);
    return { success: false, data: null, error: errorInfo };
  }
};