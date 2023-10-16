import React, { createContext, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextProps {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const defaultContextData: ThemeContextProps = {
  theme: 'light',
  setTheme: () => {},
};
export const ThemeContext =
  createContext<ThemeContextProps>(defaultContextData);

interface ThemeProviderProps {
  children: ReactNode;
}
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const getTheme = localStorage.getItem('theme') as Theme | null;
  const [theme, setTheme] = useState(getTheme ?? 'light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

//TODOS
//1. **** 10:47 of youtube video - Continue with Theme Provider ****
//2. Learn about React Context Providers
