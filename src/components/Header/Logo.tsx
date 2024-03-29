import NavMenu from './NavMenu';

export const Logo = () => {
  return (
    <section className="header-icon flex justify-center items-center pl-2">
      <NavMenu />
      <h2 className="nav-logo flex justify-center items-center text-xl">
        <a href="#start">Morgan Atwood</a>
      </h2>
    </section>
  );
};
