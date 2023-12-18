import Header from './components/Header/index.tsx';
import './stylesheets/index.scss';
import { useThemeContext } from './context/hooks/useThemeContext.tsx';
import Profile from './components/Profile/index.tsx';
import AboutMe from './components/AboutMe/index.tsx';
import Skills from './components/Skills/index.tsx';

function App() {
  const { theme } = useThemeContext();

  return (
    <div className={theme}>
      <Header />
      <Profile />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;
