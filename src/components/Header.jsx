//import '../styles/App.scss';
import '../styles/header.scss';
import PropTypes from 'prop-types';

import milogo from '../../src/assets/miLogoMorado.png'

function Header({ toggleMenu, menuShow }) {

    return (
        <header className="header">
            <a className="link" href="#mainIntro"><img className="header__logo" src={milogo} alt="Logo Iniciales MTCG" /></a>
            <div className="header__burguer" onClick={toggleMenu}><i className="header__burguer--i fa-solid fa-bars"></i></div>
            <nav className="header__nav">
                <ul className={menuShow ? 'show' : 'hidden'}>
                    <li>
                        <a className="link" href="#mainIntro" aria-label='Go to intro section'>Inicio</a>
                    </li>
                    <li>
                        <a className="link" href="#mainProjects" aria-label='Go to projects section'>Proyectos</a>
                    </li>
                    <li>
                        <a className="link" href="#mainSkills" aria-label='Go to skills section'>Habilidades</a>
                    </li>
                    <li>
                        <a className="link" href="#mainAboutMe" aria-label='Go to About me section'>Sobre mí</a>
                    </li>
                    <li>
                        <a className="link" href="#mainContact" aria-label='Go to Contact section'>Contacto</a>
                    </li>
                </ul>
            </nav>
        </header >
    );
}

Header.propTypes = {
    toggleMenu: PropTypes.func.isRequired,
    menuShow: PropTypes.bool.isRequired
};

export default Header;