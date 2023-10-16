import { Logo } from './Logo';
import { NavBar } from './NavBar';

const Header = () => {
  return (
    <div>
      <div className="header-container background">
        <Logo />
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
