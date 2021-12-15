import { FC } from 'react';
import { Link } from 'react-router-dom';
import useTheme from '../lib/hooks/useTheme';

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
  const { darkMode, setDarkMode } = useTheme();

  return (
    <header className="flex justify-center gap-x-8 py-4">
      {PAGES.map(({ name, path }) => (
        <Link
          key={name}
          to={path}
          className="text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-50"
        >
          {name}
        </Link>
      ))}
      <button type="button" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '🌞' : '🌚'}
      </button>
    </header>
  );
};

export default Header;
