import { createContext, FC, useEffect, useState } from 'react';

export type DarkMode = {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
};

export const DarkModeContext = createContext<DarkMode | null>(null);

const DarkModeProvider: FC = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true' || false);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());

    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
