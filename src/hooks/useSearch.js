import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchContext from '../context/SearchContext';

const useSearch = () => {
  const context = useContext(SearchContext);
  const navigate = useNavigate();

  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }

  const performSearch = (query) => {
    context.search(query);
    navigate('/results');
  };

  return {
    ...context,
    performSearch
  };
};

export default useSearch;