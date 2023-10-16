type Props = {};

export const NavBar = (props: Props) => {
  return (
    <section className="header-nav">
      <ul className="nav-list">
        <li className="nav-link text">
          <a href="#">About Me</a>
        </li>
        <li className="nav-link">
          <a href="#">Skills</a>
        </li>
        <li className="nav-link">
          <a href="#">Projects</a>
        </li>
      </ul>
    </section>
  );
};
