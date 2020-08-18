import Logo from '../assets/icons/logo.svg';
import '../assets/styles/components/Header.scss';

function Header() {
  return (
    <header className="sticky-top">
      <nav className="container navbar navbar-expand-lg navbar-dark">
        <Logo />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                Acerca de mí
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Proyectos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#communities">
                Comunidades
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
