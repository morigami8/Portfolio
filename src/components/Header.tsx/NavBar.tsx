import { FaGithub, FaMoon } from 'react-icons/fa';
import styles from './_header.module.scss';
import { useThemeContext } from '../../context/hooks/useThemeContext';
type Props = {};

export const NavBar = (props: Props) => {
  const { theme } = useThemeContext();
  return (
    <section className="header-nav">
      <ul className="nav-list">
        <li className={`${styles['nav-link']} text`}>
          <a className="xs" href="#">
            About Me
          </a>
        </li>
        <li className={`${styles['nav-link']}`}>
          <a className="xs" href="#">
            Skills
          </a>
        </li>
        <li className={`${styles['nav-link']}`}>
          <a className="xs" href="#">
            Projects
          </a>
        </li>
        <li className={`${styles['nav-link']}`}>
          <button className="width-12 height-12 rounded-full justify-center items-center hover:bg-primary hover:bg-primary-dark">
            {theme === 'light' ? <FaGithub /> : <FaMoon />}
          </button>
        </li>
        <li className={`${styles['nav-link']}`}>
          <a
            className="width-12 height-12 rounded-full justify-center items-center hover:bg-primary hover:bg-primary-dark"
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

//TODO: Maybe button instead of a tag for theme toggle
//Use react web page as reference
