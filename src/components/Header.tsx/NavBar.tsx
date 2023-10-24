import { FaGithub } from 'react-icons/fa';
import styles from './_header.module.scss';
type Props = {};

export const NavBar = (props: Props) => {
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
          <a className="width-12 height-12" href="https://github.com/morigami8">
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
