//TODOS
//1. **** 10:47 of youtube video - Continue with Theme Provider ****
//2. Learn about React Context Providers
//Create, Provide, Consume
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';

export type Theme = 'light' | 'dark';

interface IThemeContext {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

const defaultThemeProps: IThemeContext = {
  theme: 'light',
  setTheme: () => {},
};

export const ThemeContext = createContext<IThemeContext>(defaultThemeProps);

interface IThemeProvider {
  children: ReactNode;
}

export const ThemeProvider: React.FC<IThemeProvider> = ({ children }) => {
  const currentTheme = localStorage.getItem('theme') as Theme | null;
  const [theme, setTheme] = useState<Theme>(currentTheme ?? 'light');

  localStorage.setItem('theme', theme);

  if (theme === 'dark') document.body.classList.add('dark');
  else document.body.classList.remove('dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
