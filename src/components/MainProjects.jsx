import '../styles/mainProject.scss';
import Article from './Article';
import school from '../../src/images/backtoschool.webp'
import team from '../../src/images/teamPresentation.webp'
import spotify from '../../src/images/spotify.webp'
import profileCards from '../../src/images/profileCards.webp'
import rockPaperScissors from '../../src/images/rockPaperScissors.webp'
import hangmanGame from '../../src/images/hangmanGame.webp'
import owen from '../../src/images/owen.webp'
import guitarSI from '../../src/images/guitarSI.webp'
import adminVet from '../../src/images/AdminPacientes.webp'
import cripto from '../../src/images/cripto.webp'
import gifsApp from '../../src/images/gifsApp.png'
import countryApp from '../../src/images/countryApp.webp'

import { useState } from 'react'
import 'animate.css';

import html from '../../src/images/html-48.png'
import css from '../../src/images/css-48.png'
import sass from '../../src/images/sass-48.png'
import javascript from '../../src/images/javascript-48.png'
import react from '../../src/images/react-48.png'
import scrum from '../../src/images/scrum-48.png'
import vue from '../../src/images/vue-48.png'
import typescript from '../../src/images/typescript-96.png'
import angular from '../../src/images/angular-96.png'
import bootstrap from '../../src/images/bootstrap-96.png'


function MainProjects() {
    const logos = [
        { src: { html }, alt: 'logo html', project: ['Back to school', 'Team Presentation', 'Spotify', 'Profile Cards', 'Piedra, Papel, Tijera', 'Juego del ahorcado', 'Owen Wilson`s WOW!', 'GuitarSI e-commerce', 'Gestor de pacientes', 'Cotiza criptomonedas', 'Gifs App', 'Country App'] },
        { src: { css }, alt: 'logo css', project: ['Back to school', 'Team Presentation', 'Spotify', 'Profile Cards', 'Piedra, Papel, Tijera', 'Juego del ahorcado', 'Owen Wilson`s WOW!', 'GuitarSI e-commerce', 'Gestor de pacientes', 'Cotiza criptomonedas', 'Gifs App', 'Country App'] },
        { src: { sass }, alt: 'logo sass', project: ['Back to school', 'Team Presentation', 'Spotify', 'Profile Cards', 'Piedra, Papel, Tijera', 'Juego del ahorcado', 'Owen Wilson`s WOW!'] },
        { src: { bootstrap }, alt: 'logo bootstrap', project: ['Gifs App', 'Country App', 'GuitarSI e-commerce'] },
        { src: { javascript }, alt: 'logo javascript', project: ['Profile Cards', 'Piedra, Papel, Tijera', 'Juego del ahorcado', 'Owen Wilson`s WOW!', 'GuitarSI e-commerce', 'Gestor de pacientes', 'Cotiza criptomonedas'] },
        { src: { react }, alt: 'logo react', project: ['Juego del ahorcado', 'Owen Wilson`s WOW!'] },
        { src: { scrum }, alt: 'logo scrum', project: ['Team Presentation', 'Profile Cards'] },
        { src: { vue }, alt: 'logo react', project: ['GuitarSI e-commerce', 'Gestor de pacientes', 'Cotiza criptomonedas'] },
        { src: { typescript }, alt: 'logo typescript', project: ['Gifs App', 'Country App'] },
        { src: { angular }, alt: 'logo angular', project: ['Gifs App', 'Country App'] }
    ];



    const articulos = [{
        demoLink: "https://mteresacastro.github.io/04-countryApp/",
        imageSrc: countryApp,
        description: 'Buscador de información de países, uso de API externa. Persistencia de información entre pantallas.',
        logos: { logos },
        codeLink: "https://github.com/mteresacastro/04-countryApp",
        title: 'Country App',
        technology: 'Angular'
    }, {
        demoLink: "https://mteresacastro.github.io/03-gifs-app/",
        imageSrc: gifsApp,
        description: 'Buscador de gifs animados con almacenamiento de historial.',
        logos: { logos },
        codeLink: "https://github.com/mteresacastro/03-gifs-app",
        title: 'Gifs App',
        technology: 'Angular'
    }, {
        demoLink: "https://mteresacastro.github.io/cripto-vue/",
        imageSrc: cripto,
        description: 'Cotizador de criptomonedas en tiempo real. Uso de composable y API externa. Desarrollada con Vue.js.',
        logos: { logos },
        codeLink: "https://github.com/mteresacastro/cripto-vue",
        title: 'Cotiza criptomonedas',
        technology: 'Vue.js'
    }, {
        demoLink: "https://mteresacastro.github.io/AdminPacientes-Vue/",
        imageSrc: adminVet,
        description: 'Administración de pacientes de clínica veterinaria. Registro, edición y eliminación de pacientes. Desarrollado con Vue.js.',
        logos: { logos },
        codeLink: "https://github.com/mteresacastro/AdminPacientes-Vue",
        title: 'Gestor de pacientes',
        technology: 'Vue.js'
    }, {
        demoLink: "https://mteresacastro.github.io/guitarSI-vue/",
        imageSrc: guitarSI,
        description: 'E-commerce de guitarras desarrollado con Vue.js utilizando la Composition API.',
        logos: { logos },
        codeLink: "https://github.com/mteresacastro/guitarSI-vue",
        title: 'GuitarSI e-commerce',
        technology: 'Vue.js'
    }, {
        demoLink: "https://mteresacastro.github.io/Static-Website-BackToSchool-HTML-CSS/",
        imageSrc: school,
        description: 'Web estática desarrollada según un diseño de Zeplin preestablecido. Diseño responsive.',
        logos: { logos },
        codeLink: "https://github.com/mteresacastro/Static-Website-BackToSchool-HTML-CSS",
        title: 'Back to school',
        technology: 'Maquetación'
    }, {
        demoLink: "https://mteresacastro.github.io/Static-Website-Team-Presentation-HTML-CSS/",
        imageSrc: team,
        description: 'Web estática desarrollada en equipo según metodología Agile. Diseño responsive.',
        logos: { logos },
        codeLink: "https://github.com/mteresacastro/Static-Website-Team-Presentation-HTML-CSS",
        title: 'Team Presentation',
        technology: 'Maquetación'
    }, {
        demoLink: "https://mteresacastro.github.io/Spotify-HTML-CSS/",
        imageSrc: spotify,
        description: 'Recreación del diseño de la web de Spotify. Desarrollo mediante pair programming. Diseño responsive.',
        logos: { logos },
        codeLink: "https://github.com/mteresacastro/Spotify-HTML-CSS",
        title: 'Spotify',
        technology: 'Maquetación'
    }, {
        demoLink: "https://mteresacastro.github.io/Profile-Cards-JS/",
        imageSrc: profileCards,
        description: 'Web desarrollada con JS Vanilla. Crea tu tarjeta de perfil personalizada con tus datos de contacto. Diseño responsive.', logos: { logos },
        codeLink: "https://github.com/mteresacastro/Profile-Cards-JS",
        title: 'Profile Cards',
        technology: 'Javascript'
    }, {
        demoLink: "https://mteresacastro.github.io/Game-RockPaperScissors-JS/",
        imageSrc: rockPaperScissors,
        description: 'Versión online del clásico juego Piedra, Papel o Tijera. Desarrollado con Javascript Vanilla.',
        logos: { logos },
        codeLink: "https://github.com/mteresacastro/Game-RockPaperScissors-JS",
        title: 'Piedra, Papel, Tijera',
        technology: 'Javascript'
    }, {
        demoLink: "https://mteresacastro.github.io/HangmanGame-React/",
        imageSrc: hangmanGame,
        description: 'Versión online del clásico juego del ahorcado. SPA desarrollada con React mediante pair programming. Dos modalidades de juego.',
        logos: { logos },
        codeLink: "https://github.com/mteresacastro/HangmanGame-React",
        title: 'Juego del ahorcado',
        technology: 'React.js'
    }, {
        demoLink: "https://mteresacastro.github.io/Owen-Wilson-s-WOW-React/",
        imageSrc: owen,
        description: 'Buscador de peliculas donde Owen Wilson dice WOW! Filtrado por tÍtulo y año. Uso del LocalStorage. SPA desarrollada con React.',
        logos: { logos },
        codeLink: "https://github.com/mteresacastro/Owen-Wilson-s-WOW-React",
        title: 'Owen Wilson`s WOW!',
        technology: 'React.js'
    }];


    const [filtro, setFiltro] = useState("Todos");

    const [animar, setAnimar] = useState(false);

    setTimeout(() => {
        setAnimar(false); // Restablecer el estado después de 1 segundos
    }, 1000);

    const handleFiltroClick = (tecnologia) => {
        setFiltro(tecnologia);
        setAnimar(true);
    };

    const articulosFiltrados = articulos.filter((articulo) => {
        if (filtro === "Todos") {
            return true; // Mostrar todos los artículos
        } else {
            return articulo.technology === filtro// Filtrar por tecnología)
        }
    });


    return (
        <section className="mainProjects">
            <h2 className="mainProjects__h2">Proyectos</h2>
            <h3 className="mainProjects__h3">&lt;h3&gt; Cada línea de código te acerca un paso más a tu <span className="mainProjects__h3--span">meta</span> &lt;/h3&gt;</h3>

            <div className="mainProject__div filter">
                <button className={`btn ${filtro === "Todos" ? "active" : ""}`} onClick={() => handleFiltroClick("Todos")}>Todos</button>
                <button className={`btn ${filtro === "Vue.js" ? "active" : ""}`} onClick={() => handleFiltroClick("Vue.js")}>Vue.js</button>
                <button className={`btn ${filtro === "React.js" ? "active" : ""}`} onClick={() => handleFiltroClick("React.js")}>React.js</button>
                <button className={`btn ${filtro === "Angular" ? "active" : ""}`} onClick={() => handleFiltroClick("Angular")}>Angular</button>
                <button className={`btn ${filtro === "Javascript" ? "active" : ""}`} onClick={() => handleFiltroClick("Javascript")}>Javascript</button>
                <button className={`btn ${filtro === "Maquetación" ? "active" : ""}`} onClick={() => handleFiltroClick("Maquetación")}>Maquetación</button>
            </div>

            <div className="mainProject__div box">

                {articulosFiltrados.map((articulo) => (

                    <Article key={articulo.title} demoLink={articulo.demoLink} imageSrc={articulo.imageSrc} description={articulo.description} logos={logos} codeLink={articulo.codeLink} title={articulo.title} technology={articulo.technology} animar={animar}
                    />
                ))}

            </div>
        </section>
    );
}

export default MainProjects;