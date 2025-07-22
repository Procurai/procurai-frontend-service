import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import { SearchProvider } from './context/SearchContext';
import { ComparisonProvider } from './context/ComparisonContext';

function App() {
  return (
    <SearchProvider>
      <ComparisonProvider>
        <Router>
          <MainLayout />
        </Router>
      </ComparisonProvider>
    </SearchProvider>
  );
}

export default App;