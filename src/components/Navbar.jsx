export default function Navbar() {
  return (
    <div className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="#about" className="nav-link active" aria-current="page">
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
      </header>
    </div>
  );
}
