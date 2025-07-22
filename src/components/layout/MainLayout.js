import React from 'react';
import Header from '../common/Header';
import Navigation from '../common/Navigation';
import Footer from '../common/Footer';
import { AppProvider } from '../../context/AppContext';
import AppRoutes from '../../routes';

const MainLayout = () => {
  return (
    <AppProvider>
      <div className="min-h-screen h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col overflow-hidden w-full max-w-none">
        <div className="flex-shrink-0 w-full">
          <Header />
        </div>
        <div className="flex-shrink-0 sticky top-0 z-10 bg-white shadow-sm w-full">
          <Navigation />
        </div>
        <main className="flex-grow overflow-y-auto w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 md:py-8">
            <AppRoutes />
          </div>
        </main>
        <div className="flex-shrink-0 w-full">
          <Footer />
        </div>
      </div>
    </AppProvider>
  );
};

export default MainLayout;