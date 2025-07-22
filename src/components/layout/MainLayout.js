import React from 'react';
import Header from '../common/Header';
import Navigation from '../common/Navigation';
import Footer from '../common/Footer';
import TabContent from './TabContent';
import { AppProvider } from '../../context/AppContext';

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
          <TabContent />
        </main>
        <div className="flex-shrink-0 w-full">
          <Footer />
        </div>
      </div>
    </AppProvider>
  );
};

export default MainLayout;