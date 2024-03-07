const NavMenu = () => {
  return (
    <div className="nav-hidden hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>

      <ul className="menu__box">
        <li>
          <a className="menu__item" href="#about-me">
            About Me
          </a>
        </li>
        <li>
          <a className="menu__item" href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a className="menu__item" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="menu__item" href="#resume">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
