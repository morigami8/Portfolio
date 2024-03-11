import { FaGithub, FaMoon, FaSun } from 'react-icons/fa';
import styles from './_header.module.scss';
import { useThemeContext } from '../../context/hooks/useThemeContext';
import { Theme } from '../../context/ThemeContext';

export const NavBar = () => {
  const { theme, setTheme } = useThemeContext();

  const handleOnClick = async () => {
    const toggleTheme: Theme = theme === 'light' ? 'dark' : 'light';
    await localStorage.setItem('theme', toggleTheme);
    await setTheme(toggleTheme);
  };
  return (
    <section className="header-nav">
      <ul className="nav-list">
        <li className={`${styles['nav-link']} text hidden`}>
          <a
            className="xs md:flex hover:bg-primary hover:bg-primary-dark rounded-full"
            href="#about-me"
          >
            About Me
          </a>
        </li>
        <li className={`${styles['nav-link']} hidden`}>
          <a
            className="xs md:flex hover:bg-primary hover:bg-primary-dark rounded-full"
            href="#skills"
          >
            Skills
          </a>
        </li>
        <li className={`${styles['nav-link']} hidden`}>
          <a
            className="xs md:flex hover:bg-primary hover:bg-primary-dark rounded-full"
            href="#projects"
          >
            Projects
          </a>
        </li>
        <li className={`${styles['nav-link']}`}>
          <button
            onClick={handleOnClick}
            className="width-12 height-12 rounded-full justify-center items-center hover:bg-primary hover:bg-primary-dark text-xl"
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        </li>
        <li className={`${styles['nav-link']}`}>
          <a
            className="width-12 height-12 flex rounded-full justify-center items-center hover:bg-primary hover:bg-primary-dark text-xl"
            href="https://github.com/morigami8"
          >
            {' '}
            <FaGithub />{' '}
          </a>
        </li>
      </ul>
    </section>
  );
};
