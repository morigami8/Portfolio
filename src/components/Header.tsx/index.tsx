import { Logo } from './Logo';
import { NavBar } from './NavBar';

import styles from './_header.module.scss';

const Header = () => {
  console.log(styles);
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
