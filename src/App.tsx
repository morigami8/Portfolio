import Header from './components/Header.tsx';
import './stylesheets/index.scss';
import { useThemeContext } from './context/hooks/useThemeContext.tsx';

function App() {
  const { theme } = useThemeContext();

  return (
    <div className={theme}>
      <Header />
    </div>
  );
}

export default App;
