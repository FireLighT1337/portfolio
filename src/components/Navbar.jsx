export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="container">
        <header className="navbar-header">
          <nav aria-label="Main navigation">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a
                  href="#about"
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#skills" className="nav-link">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a href="#projects" className="nav-link">
                  Projekte
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  Kontakt
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}
