import { Logo } from './Logo';
import { NavBar } from './NavBar';

import styles from './_header-nav.module.scss';

const Header = () => {
  return (
    <>
      <div
        className={`${styles['header-container']} header-container background`}
      >
        <Logo />
        <NavBar />
      </div>
    </>
  );
};

export default Header;
