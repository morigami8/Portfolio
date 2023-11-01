import { FaHamburger } from 'react-icons/fa';

export const Logo = () => {
  return (
    <section className="header-icon flex justify-center items-center">
      <button className="nav-hidden width-12 height-12 flex rounded-full justify-center items-center hover:bg-primary hover:bg-primary-dark">
        {' '}
        <FaHamburger />{' '}
      </button>
      <h2 className="flex justify-center items-center">Morgan Atwood</h2>
    </section>
  );
};
