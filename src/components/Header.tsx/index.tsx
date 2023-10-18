import { Logo } from './Logo';
import { NavBar } from './NavBar';

const Header = () => {
  return (
    <>
      <div className="header-container background">
        <Logo />
        <NavBar />
      </div>
    </>
  );
};

export default Header;
