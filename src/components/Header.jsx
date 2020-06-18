import Logo from '../assets/icons/logo.svg';
import '../assets/styles/components/Header.scss';

function Header() {
  return (
    <header>
      <div className="header">
        <Logo className="header__logo" />
      </div>
    </header>
  );
}

export default Header;
