import React, { useState, useEffect, useRef } from 'react';

const NavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false); // Close the menu
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="nav-hidden hamburger-menu" ref={menuRef}>
      <input
        id="menu__toggle"
        type="checkbox"
        checked={isMenuOpen}
        onChange={toggleMenu}
      />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>

      <ul className={`menu__box ${isMenuOpen ? '' : 'hidden'}`}>
        {' '}
        {/* Add a class to hide/show the menu */}
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
