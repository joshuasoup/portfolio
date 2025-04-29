
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-5xl mx-auto w-full px-6 md:px-12">
        <Header />
      </div>
      <main className="flex-grow px-6 md:px-12 py-8 md:py-12 max-w-5xl mx-auto w-full">
        {children}
      </main>
      <div className="max-w-5xl mx-auto w-full px-6 md:px-12">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
