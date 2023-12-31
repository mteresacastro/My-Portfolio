import '../styles/App.scss';

import milogo from '../../src/assets/milogo.png'

function Header() {
    return (
        <header>
            <img className="header__logo" src={milogo} alt="Logo Iniciales MTCG" />
            <nav className="header__nav">
                <ul className="header__nav--ul">
                    <li>
                        <a className="link" href="#mainInfo">Inicio</a>
                    </li>
                    <li>
                        <a className="link" href="#mainProjects">Proyectos</a>
                    </li>
                    <li>
                        <a className="link" href="#mainSkills">Habilidades</a>
                    </li>
                    <li>
                        <a className="link" href="#mainAboutMe">Sobre mí</a>
                    </li>
                    <li>
                        <a className="link" href="#mainContact">Contacto</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;