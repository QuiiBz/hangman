import { FC } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Layout: FC = () => {
  return (
    <div className="bg-white dark:bg-black">
      <div className="max-w-5xl min-h-screen mx-auto">
        <Toaster />
        <Header />
        <div className="mt-16">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
