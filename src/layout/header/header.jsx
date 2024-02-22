import './header.css';
import logoImg from './../../../public/logo.svg';
import Menu from './../menu/menu.jsx';
import SearchUserActions from './search-user-actions/search-user-actions.jsx';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <a href="#" className="logo">
                        <img src={logoImg} alt="PulseRun" />
                    </a>

                    <nav className="menu">
                        <Menu />
                    </nav>

                    <SearchUserActions />
                </div>
            </div>
        </header>
    )
}

export default Header;
