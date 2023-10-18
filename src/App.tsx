import { useContext } from 'react';
import Header from './components/Header.tsx';
import './stylesheets/index.scss';
import { Theme, ThemeContext } from './context/ThemeContext.tsx';

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleOnClick = async () => {
    const toggleTheme: Theme = theme === 'light' ? 'dark' : 'light';
    await localStorage.setItem('theme', toggleTheme);
    await setTheme(toggleTheme);
  };
  return (
    <div className={theme}>
      <Header />
      <button onClick={handleOnClick}>Theme Change</button>
    </div>
  );
}

export default App;
