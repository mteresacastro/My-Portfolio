import '../styles/footer.scss';

import milogo from '../../src/assets/miLogo.png'

function Footer() {

    return (
        <footer className="footer">
            <img className="footer__logo" src={milogo} alt="Logo Iniciales MTCG" />
            <p className="footer__phrase">Trabaja duro y en silencio y deja que tu éxito haga todo el ruido</p>
            <div className="footer__contact">
                <a href="https://github.com/mteresacastro" target='_blank' rel="noreferrer" aria-label='Visit MTCG github'><i className="fa-brands fa-square-github"></i></a>
                <a href="https://www.linkedin.com/in/mteresacastro" target='_blank' rel="noreferrer" aria-label='Visit MTCG Linkedin'><i className="fa-brands fa-linkedin"></i></a>
                <a href="mailto:m.teresacastrogonzalez@gmail.com" target='_blank' rel="noreferrer" aria-label='Send an email to MTCG'><i className="fa-solid fa-square-envelope"></i></a>
            </div>
            <p className='footer__by'>Developed by <span className='footer__by--span'>mteresacastro <button id="present">✨</button></span></p>
        </footer>
    );
}


export default Footer;