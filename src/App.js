import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import { SearchProvider } from './context/SearchContext';

function App() {
  return (
    <SearchProvider>
      <Router>
        <MainLayout />
      </Router>
    </SearchProvider>
  );
}

export default App;