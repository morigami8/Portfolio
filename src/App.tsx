import Header from './components/Header/index.tsx';
import './stylesheets/index.scss';
import { useThemeContext } from './context/hooks/useThemeContext.tsx';
import Profile from './components/Profile/index.tsx';
import AboutMe from './components/AboutMe/index.tsx';
import Skills from './components/Skills/index.tsx';
import Projects from './components/Projects/index.tsx';

function App() {
  const { theme } = useThemeContext();

  return (
    <div className={theme}>
      <Header />
      <Profile />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
