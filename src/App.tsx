import { useContext } from 'react';
import Header from './components/Header.tsx';
import './stylesheets/index.scss';
import { ThemeContext } from './context/ThemeContext.tsx';

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleOnClick = async () => {
    await localStorage.setItem('theme', theme);
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <div className={theme}>
      <Header />
      <button onClick={handleOnClick}>Theme Change</button>
    </div>
  );
}

export default App;
