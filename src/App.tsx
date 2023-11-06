import Header from './components/Header/index.tsx';
import './stylesheets/index.scss';
import { useThemeContext } from './context/hooks/useThemeContext.tsx';
import Profile from './components/Profile/index.tsx';

function App() {
  const { theme } = useThemeContext();

  return (
    <div className={theme}>
      <Header />
      <Profile />
    </div>
  );
}

export default App;
