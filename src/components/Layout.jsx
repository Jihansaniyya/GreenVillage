import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import LoadingSkeleton from './LoadingSkeleton';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<LoadingSkeleton type="card" count={3} />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
