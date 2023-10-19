import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('This is outside the scope of the Theme provider context');
  }

  return context;
};
