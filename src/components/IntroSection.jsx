//import '../styles/App.scss';
import '../styles/introSection.scss';
import PropTypes from 'prop-types';

import photo from '../../src/assets/mifoto2.png';

function IntroSection() {

    return (
        <section className="mainIntro" id="mainIntro">
            <img className="mainIntro__img" src={photo} alt="Maria Teresa Castro Photo" />
            <div className="mainIntro__data">
                <h1 className="mainIntro__data--h1">María Teresa Castro González</h1>
                <h2 className="mainIntro__data--h2">Front-End Developer</h2>
                <p className="mainIntro__data--desc">Enamorada del mundo Tech, apasionada por el desarrollo web y la creación de interfaces de usuario atractivas y fáciles de usar. Disfruto con el trabajo en equipo para crear <span className="mainIntro__data--desc-span">soluciones innovadoras</span> y <span className="mainIntro__data--desc-span">efectivas</span> . Actúo de manera consecuente, soy <span className="mainIntro__data--desc-span">incansable</span> y no de dan miedo los retos.</p>
                <a href="../src/assets/CV_Teresa_Castro_G.pdf" download="MTeresaCastro-CV.pdf">
                    <button className="btn">Descargar CV</button>
                </a>
                <div className='mainIntro__data--contactInfo'>
                    <a href="https://github.com/mteresacastro" target='_blank' rel="noreferrer"><i className="fa-brands fa-square-github"></i></a>
                    <a href="https://www.linkedin.com/in/mteresacastro" target='_blank' rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="mailto:m.teresacastrogonzalez@gmail.com" target='_blank' rel="noreferrer"><i className="fa-solid fa-square-envelope"></i></a>
                </div>
            </div>

        </section>

    );
}

export default IntroSection;