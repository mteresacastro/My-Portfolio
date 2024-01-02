//import '../styles/App.scss';
import '../styles/header.scss'

import milogo from '../../src/assets/milogo.png'

function Header({ toggleMenu, menuShow }) {

    return (
        <header className="header">
            <img className="header__logo" src={milogo} alt="Logo Iniciales MTCG" />
            <div className="header__burguer" onClick={toggleMenu}><i className="header__burguer--i fa-solid fa-bars"></i></div>
            <nav className={menuShow ? 'show' : 'hidden'}>
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
        </header >
    );
}

export default Header;