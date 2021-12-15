import { FC } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Layout: FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <Toaster />
      <Header />
      <div className="mt-16">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
