const NavMenu = () => {
  return (
    <div className="nav-hidden hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>

      <ul className="menu__box">
        <li>
          <a className="menu__item" href="#">
            About Me
          </a>
        </li>
        <li>
          <a className="menu__item" href="#">
            Skills
          </a>
        </li>
        <li>
          <a className="menu__item" href="#">
            Projects
          </a>
        </li>
        <li>
          <a className="menu__item" href="#">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
