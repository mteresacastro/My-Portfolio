//import '../styles/App.scss';
import '../styles/introSection.scss';

import photo from '../../src/images/mifoto2.webp';
import cv from '../../src/assets/CV_Teresa_Castro_G.pdf';

function IntroSection() {

    return (
        <section className="mainIntro" id="mainIntro">
            <img className="mainIntro__img" src={photo} alt="Maria Teresa Castro Photo" />
            <div className="mainIntro__data">
                <h1 className="mainIntro__data--h1">María Teresa Castro González</h1>
                <h2 className="mainIntro__data--h2">Full Stack Developer</h2>
                <p className="mainIntro__data--desc">Enamorada del mundo Tech, apasionada por el desarrollo web y la creación de interfaces de usuario atractivas y fáciles de usar.</p>
                <p className="mainIntro__data--desc">Disfruto con el trabajo en equipo para crear <span className="mainIntro__data--desc-span">soluciones innovadoras</span> y <span className="mainIntro__data--desc-span">efectivas</span> . Actúo de manera consecuente, soy <span className="mainIntro__data--desc-span">incansable</span> y no me dan miedo los retos.</p>
                <a href={cv} download="MTeresaCastro-CV.pdf" aria-label='Download Maria Teresa Castro CV'>
                    <button>Descargar CV</button>
                </a>
                <div className='mainIntro__data--contactInfo'>
                    <a href="https://github.com/mteresacastro" target='_blank' rel="noreferrer" aria-label='Visit MTCG github'><i className="fa-brands fa-square-github"></i></a>
                    <a href="https://www.linkedin.com/in/mteresacastro" target='_blank' rel="noreferrer" aria-label='Visit MTCG Linkedin'><i className="fa-brands fa-linkedin"></i></a>
                    <a href="mailto:m.teresacastrogonzalez@gmail.com" target='_blank' rel="noreferrer" id="mainProjects" aria-label='Send an email to MTCG'><i className="fa-solid fa-square-envelope"></i></a>
                </div>
            </div>

        </section>

    );
}

export default IntroSection;