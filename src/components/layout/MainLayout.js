import React from 'react';
import Header from '../common/Header';
import Navigation from '../common/Navigation';
import Footer from '../common/Footer';
import { AppProvider } from '../../context/AppContext';
import AppRoutes from '../../routes';

const MainLayout = () => {
  return (
    <AppProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col w-full max-w-none">
        <div className="w-full">
          <Header />
        </div>
        <div className="w-full bg-white shadow-sm">
          <Navigation />
        </div>
        <main className="flex-grow w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 md:py-8">
            <AppRoutes />
          </div>
        </main>
        <div className="w-full">
          {/* <Footer /> */}
        </div>
      </div>
    </AppProvider>
  );
};

export default MainLayout;