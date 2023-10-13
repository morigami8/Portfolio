import './stylesheets/index.scss';

function App() {
  return (
    <>
      <div>
        <div className="header-container">
          <section className="header-icon">
            <h2>Morgan Atwood</h2>
          </section>
          <section className="header-nav">
            <ul className="nav-list">
              <li className="nav-link">
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
        </div>
      </div>
    </>
  );
}

export default App;
