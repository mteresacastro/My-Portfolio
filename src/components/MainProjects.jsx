import '../styles/mainProject.scss';
import Article from './Article';
import school from '../../src/images/backtoschool.png'
import team from '../../src/images/teamPresentation.png'
import spotify from '../../src/images/spotify.png'
import profileCards from '../../src/images/profileCards.png'
import rockPaperScissors from '../../src/images/rockPaperScissors.png'
import hangmanGame from '../../src/images/hangmanGame.png'
import owen from '../../src/images/owen.png'

import html from '../../src/images/html-48.png'
import css from '../../src/images/css-48.png'
import sass from '../../src/images/sass-48.png'
import javascript from '../../src/images/javascript-48.png'
import react from '../../src/images/react-48.png'
import scrum from '../../src/images/scrum-48.png'


function MainProjects() {
    const logos = [
        { src: '../../src/images/html-48.png', alt: 'logo html', project: ['Back to school', 'Team Presentation', 'Spotify', 'Profile Cards', 'Piedra, Papel, Tijera', 'Juego del ahorcado', 'Owen Wilson`s WOW!'] },
        { src: '../../src/images/css-48.png', alt: 'logo css', project: ['Back to school', 'Team Presentation', 'Spotify', 'Profile Cards', 'Piedra, Papel, Tijera', 'Juego del ahorcado', 'Owen Wilson`s WOW!'] },
        { src: '../../src/images/sass-48.png', alt: 'logo sass', project: ['Back to school', 'Team Presentation', 'Spotify', 'Profile Cards', 'Piedra, Papel, Tijera', 'Juego del ahorcado', 'Owen Wilson`s WOW!'] },
        { src: '../../src/images/javascript-48.png', alt: 'logo javascript', project: ['Profile Cards', 'Piedra, Papel, Tijera', 'Juego del ahorcado', 'Owen Wilson`s WOW!'] },
        { src: '../../src/images/react-48.png', alt: 'logo react', project: ['Juego del ahorcado', 'Owen Wilson`s WOW!'] },
        { src: '../../src/images/scrum-48.png', alt: 'logo scrum', project: ['Team Presentation', 'Profile Cards'] }
    ];

    return (
        <section className="mainProjects">
            <h2 className="mainProjects__h2">Proyectos</h2>
            <h3 className="mainProjects__h3">&lt;h3&gt; Cada línea de código te acerca un paso más a tu <span className="mainProjects__h3--span">meta</span> &lt;/h3&gt;</h3>

            <div className="mainProject__div box">
                <Article demoLink={"https://mteresacastro.github.io/Static-Website-BackToSchool-HTML-CSS/"} imageSrc={school} description={'Web estática desarrollada según un diseño de Zeplin preestablecido. Diseño responsive.'} logos={logos} codeLink={"https://github.com/mteresacastro/Static-Website-BackToSchool-HTML-CSS"} title={'Back to school'} />

                <Article demoLink={"https://mteresacastro.github.io/Static-Website-Team-Presentation-HTML-CSS/"} imageSrc={team} description={'Web estática desarrollada en equipo según metodología Agile. Diseño responsive.'} logos={logos} codeLink={"https://github.com/mteresacastro/Static-Website-Team-Presentation-HTML-CSS"} title={'Team Presentation'} />
                
                
                <a href="https://mteresacastro.github.io/Spotify-HTML-CSS/" target='_blank' rel='noreferrer'>
                    <article className="mainProjects__art">
                        <div className="mainProjects__art--container">
                            <img className="mainProjects__art--container-img" src={spotify} alt="" />
                            <div className="mainProjects__art--container-div">
                                <h4 className="art__div--h4">Visitar Demo</h4>
                                <p className="art__div--p">Recreación del diseño de la web de Spotify. Desarrollo mediante pair programming. Diseño responsive.</p>
                                <ul className="art__div--ul">
                                    <li><img className="art__div--ul-img" src={html} alt="logo html" /></li>
                                    <li><img className="art__div--ul-img" src={css} alt="logo css" /></li>
                                    <li><img className="art__div--ul-img" src={sass} alt="logo sass" /></li>
                                </ul>
                            </div>
                        </div>
                    </article>
                    <a className="a" href="https://github.com/mteresacastro/Spotify-HTML-CSS" target='_blank' rel='noreferrer'>
                        <div className="mainProjects__art--titleGit">
                            <i className="mainProjects__art--titleGit-git fa-brands fa-github"></i>
                            <h4 className="mainProjects__art--titleGit-title">Spotify - Ver código</h4>
                        </div>
                    </a>
                </a>
                <a href="https://mteresacastro.github.io/Profile-Cards-JS/" target='_blank' rel='noreferrer'>
                    <article className="mainProjects__art">
                        <div className="mainProjects__art--container">
                            <img className="mainProjects__art--container-img" src={profileCards} alt="" />
                            <div className="mainProjects__art--container-div">
                                <h4 className="art__div--h4">Visitar Demo</h4>
                                <p className="art__div--p">Web desarrollada con JS Vanilla. Crea tu tarjeta de perfil personalizada con tus datos de contacto. Diseño responsive.</p>
                                <ul className="art__div--ul">
                                    <li><img className="art__div--ul-img" src={html} alt="logo html" /></li>
                                    <li><img className="art__div--ul-img" src={css} alt="logo css" /></li>
                                    <li><img className="art__div--ul-img" src={sass} alt="logo sass" /></li>
                                    <li><img className="art__div--ul-img" src={javascript} alt="logo javascript" /></li>
                                </ul>
                            </div>
                        </div>
                    </article>
                    <a className="a" href="https://github.com/mteresacastro/Profile-Cards-JS" target='_blank' rel='noreferrer'>
                        <div className="mainProjects__art--titleGit">
                            <i className="mainProjects__art--titleGit-git fa-brands fa-github"></i>
                            <h4 className="mainProjects__art--titleGit-title">Profile Cards - Ver código</h4>
                        </div>
                    </a>
                </a>
                <a href="https://mteresacastro.github.io/Game-RockPaperScissors-JS/" target='_blank' rel='noreferrer'>
                    <article className="mainProjects__art">
                        <div className="mainProjects__art--container">
                            <img className="mainProjects__art--container-img" src={rockPaperScissors} alt="" />
                            <div className="mainProjects__art--container-div">
                                <h4 className="art__div--h4">Visitar Demo</h4>
                                <p className="art__div--p">Versión online del clásico juego Piedra, Papel o Tijera. Desarrollado con Javascript Vanilla. </p>
                                <ul className="art__div--ul">
                                    <li><img className="art__div--ul-img" src={html} alt="logo html" /></li>
                                    <li><img className="art__div--ul-img" src={css} alt="logo css" /></li>
                                    <li><img className="art__div--ul-img" src={sass} alt="logo sass" /></li>
                                    <li><img className="art__div--ul-img" src={javascript} alt="logo javascript" /></li>
                                </ul>
                            </div>
                        </div>
                    </article>
                    <a className="a" href="https://github.com/mteresacastro/Game-RockPaperScissors-JS" target='_blank' rel='noreferrer'>
                        <div className="mainProjects__art--titleGit">
                            <i className="mainProjects__art--titleGit-git fa-brands fa-github"></i>
                            <h4 className="mainProjects__art--titleGit-title">Piedra, Papel, Tijera - Ver código</h4>
                        </div>
                    </a>
                </a>
                <a href="https://mteresacastro.github.io/HangmanGame-React/" target='_blank' rel='noreferrer'>
                    <article className="mainProjects__art">
                        <div className="mainProjects__art--container">
                            <img className="mainProjects__art--container-img" src={hangmanGame} alt="" />
                            <div className="mainProjects__art--container-div">
                                <h4 className="art__div--h4">Visitar Demo</h4>
                                <p className="art__div--p">Versión online del clásico juego del ahorcado. SPA desarrollada con React mediante pair programming. Dos modalidades de juego. </p>
                                <ul className="art__div--ul">
                                    <li><img className="art__div--ul-img" src={html} alt="logo html" /></li>
                                    <li><img className="art__div--ul-img" src={css} alt="logo css" /></li>
                                    <li><img className="art__div--ul-img" src={sass} alt="logo sass" /></li>
                                    <li><img className="art__div--ul-img" src={javascript} alt="logo javascript" /></li>
                                    <li><img className="art__div--ul-img" src={react} alt="logo react" /></li>
                                </ul>
                            </div>
                        </div>
                    </article>
                    <a className="a" href="https://github.com/mteresacastro/HangmanGame-React" target='_blank' rel='noreferrer'>
                        <div className="mainProjects__art--titleGit">
                            <i className="mainProjects__art--titleGit-git fa-brands fa-github"></i>
                            <h4 className="mainProjects__art--titleGit-title">Juego del ahorcado - Ver código</h4>
                        </div>
                    </a>
                </a>
                <a href="https://mteresacastro.github.io/Owen-Wilson-s-WOW-React/" target='_blank' rel='noreferrer'>
                    <article className="mainProjects__art">
                        <div className="mainProjects__art--container">
                            <img className="mainProjects__art--container-img" src={owen} alt="" />
                            <div className="mainProjects__art--container-div">
                                <h4 className="art__div--h4">Visitar Demo</h4>
                                <p className="art__div--p">Buscador de peliculas donde Owen Wilson dice WOW! Filtrado por tÍtulo y año. Uso del LocalStorage. SPA desarrollada con React. </p>
                                <ul className="art__div--ul">
                                    <li><img className="art__div--ul-img" src={html} alt="logo html" /></li>
                                    <li><img className="art__div--ul-img" src={css} alt="logo css" /></li>
                                    <li><img className="art__div--ul-img" src={sass} alt="logo sass" /></li>
                                    <li><img className="art__div--ul-img" src={javascript} alt="logo javascript" /></li>
                                    <li><img className="art__div--ul-img" src={react} alt="logo react" /></li>
                                </ul>
                            </div>
                        </div>
                    </article>
                    <a className="a" href="https://github.com/mteresacastro/Owen-Wilson-s-WOW-React" target='_blank' rel='noreferrer'>
                        <div className="mainProjects__art--titleGit">
                            <i className="mainProjects__art--titleGit-git fa-brands fa-github"></i>
                            <h4 className="mainProjects__art--titleGit-title">Owen Wilson's WOW! - Ver código</h4>
                        </div>
                    </a>
                </a>
            </div>
        </section>
    );
}

export default MainProjects;