import { FC } from 'react';
import { Link } from 'react-router-dom';

type Page = {
  name: string;
  path: string;
};

const PAGES: Page[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Play',
    path: '/play',
  },
  {
    name: 'Statistics',
    path: '/statistics',
  },
];

const Header: FC = () => {
  return (
    <header className="flex justify-center gap-x-8 py-4">
      {PAGES.map(({ name, path }) => (
        <Link key={name} to={path} className="text-gray-600 hover:text-gray-900">
          {name}
        </Link>
      ))}
    </header>
  );
};

export default Header;
