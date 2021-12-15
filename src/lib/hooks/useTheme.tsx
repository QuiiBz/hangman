import { useContext } from 'react';
import { DarkMode, DarkModeContext } from '../DarkModeContext';

const useTheme = (): DarkMode => {
  const hasDarkMode = useContext(DarkModeContext);

  if (!hasDarkMode) {
    throw new Error('useTheme must be used within a GameProvider');
  }

  return hasDarkMode;
};

export default useTheme;
