import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#141414] font-editorial-sans selection:bg-[#141414] selection:text-[#FAF7F2] flex flex-col justify-between">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
