import '../styles/mainProject.scss';
import Article from './Article';
import school from '../../src/images/backtoschool.png'
import team from '../../src/images/teamPresentation.png'
import spotify from '../../src/images/spotify.png'
import profileCards from '../../src/images/profileCards.png'
import rockPaperScissors from '../../src/images/rockPaperScissors.png'
import hangmanGame from '../../src/images/hangmanGame.png'
import owen from '../../src/images/owen.png'
import guitarSI from '../../src/images/guitarSI.png'

import html from '../../src/images/html-48.png'
import css from '../../src/images/css-48.png'
import sass from '../../src/images/sass-48.png'
import javascript from '../../src/images/javascript-48.png'
import react from '../../src/images/react-48.png'
import scrum from '../../src/images/scrum-48.png'
import vue from '../../src/images/vue-48.png'


function MainProjects() {
    const logos = [
        { src: { html }, alt: 'logo html', project: ['Back to school', 'Team Presentation', 'Spotify', 'Profile Cards', 'Piedra, Papel, Tijera', 'Juego del ahorcado', 'Owen Wilson`s WOW!', 'GuitarSI e-commerce'] },
        { src: { css }, alt: 'logo css', project: ['Back to school', 'Team Presentation', 'Spotify', 'Profile Cards', 'Piedra, Papel, Tijera', 'Juego del ahorcado', 'Owen Wilson`s WOW!', 'GuitarSI e-commerce'] },
        { src: { sass }, alt: 'logo sass', project: ['Back to school', 'Team Presentation', 'Spotify', 'Profile Cards', 'Piedra, Papel, Tijera', 'Juego del ahorcado', 'Owen Wilson`s WOW!'] },
        { src: { javascript }, alt: 'logo javascript', project: ['Profile Cards', 'Piedra, Papel, Tijera', 'Juego del ahorcado', 'Owen Wilson`s WOW!', 'GuitarSI e-commerce'] },
        { src: { react }, alt: 'logo react', project: ['Juego del ahorcado', 'Owen Wilson`s WOW!'] },
        { src: { scrum }, alt: 'logo scrum', project: ['Team Presentation', 'Profile Cards'] },
        { src: { vue }, alt: 'logo react', project: ['GuitarSI e-commerce']}
    ];

    return (
        <section className="mainProjects">
            <h2 className="mainProjects__h2">Proyectos</h2>
            <h3 className="mainProjects__h3">&lt;h3&gt; Cada línea de código te acerca un paso más a tu <span className="mainProjects__h3--span">meta</span> &lt;/h3&gt;</h3>

            <div className="mainProject__div box">

                <Article demoLink={"https://mteresacastro.github.io/guitarSI-vue/"} imageSrc={guitarSI} description={'E-commerce de guitarras desarrollado con Vue.js utilizando la Composition API.'} logos={logos} codeLink={"https://github.com/mteresacastro/guitarSI-vue"} title={'GuitarSI e-commerce'} />
            
                <Article demoLink={"https://mteresacastro.github.io/Static-Website-BackToSchool-HTML-CSS/"} imageSrc={school} description={'Web estática desarrollada según un diseño de Zeplin preestablecido. Diseño responsive.'} logos={logos} codeLink={"https://github.com/mteresacastro/Static-Website-BackToSchool-HTML-CSS"} title={'Back to school'} />

                <Article demoLink={"https://mteresacastro.github.io/Static-Website-Team-Presentation-HTML-CSS/"} imageSrc={team} description={'Web estática desarrollada en equipo según metodología Agile. Diseño responsive.'} logos={logos} codeLink={"https://github.com/mteresacastro/Static-Website-Team-Presentation-HTML-CSS"} title={'Team Presentation'} />

                <Article demoLink={"https://mteresacastro.github.io/Spotify-HTML-CSS/"} imageSrc={spotify} description={'Recreación del diseño de la web de Spotify. Desarrollo mediante pair programming. Diseño responsive.'} logos={logos} codeLink={"https://github.com/mteresacastro/Spotify-HTML-CSS"} title={'Spotify'} />

                <Article demoLink={"https://mteresacastro.github.io/Profile-Cards-JS/"} imageSrc={profileCards} description={'Web desarrollada con JS Vanilla. Crea tu tarjeta de perfil personalizada con tus datos de contacto. Diseño responsive.'} logos={logos} codeLink={"https://github.com/mteresacastro/Profile-Cards-JS"} title={'Profile Cards'} />

                <Article demoLink={"https://mteresacastro.github.io/Game-RockPaperScissors-JS/"} imageSrc={rockPaperScissors} description={'Versión online del clásico juego Piedra, Papel o Tijera. Desarrollado con Javascript Vanilla.'} logos={logos} codeLink={"https://github.com/mteresacastro/Game-RockPaperScissors-JS"} title={'Piedra, Papel, Tijera'} />

                <Article demoLink={"https://mteresacastro.github.io/HangmanGame-React/"} imageSrc={hangmanGame} description={'Versión online del clásico juego del ahorcado. SPA desarrollada con React mediante pair programming. Dos modalidades de juego.'} logos={logos} codeLink={"https://github.com/mteresacastro/HangmanGame-React"} title={'Juego del ahorcado'} />

                <Article demoLink={"https://mteresacastro.github.io/Owen-Wilson-s-WOW-React/"} imageSrc={owen} description={'Buscador de peliculas donde Owen Wilson dice WOW! Filtrado por tÍtulo y año. Uso del LocalStorage. SPA desarrollada con React.'} logos={logos} codeLink={"https://github.com/mteresacastro/Owen-Wilson-s-WOW-React"} title={'Owen Wilson`s WOW!'} />

            </div>
        </section>
    );
}

export default MainProjects;