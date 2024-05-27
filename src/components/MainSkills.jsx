import '../styles/mainSkills.scss';

import html from '../../src/images/html-48.png'
import css from '../../src/images/css-48.png'
import sass from '../../src/images/sass-48.png'
import javascript from '../../src/images/javascript-48.png'
import react from '../../src/images/react-48.png'
import vue from '../../src/images/vue-48.png'
import nodejs from '../../src/images/node-48.png'
import expressjs from '../../src/images/express-48.png'
import mysql from '../../src/images/mysql-48.png'
import vite from '../../src/images/vite-48.png'
import git from '../../src/images/git-48.png'
import github from '../../src/images/github-48.png'
import scrum from '../../src/images/scrum-48.png'
import figma from '../../src/images/figma-96.png'
import mongo from '../../src/images/mongodb-96.png'
import tailwind from '../../src/images/tailwind-96.png'
import angular from '../../src/images/angular-96.png'
import typescript from '../../src/images/typescript-96.png'

function MainSkills() {

    return (
        <section className="mainSkills" id="mainSkills">
            <h2 className="mainSkills__h2">Habilidades</h2>
            <h3 className="mainSkills__h3">Más centrada en el Front, pero siempre con una mirada al Back</h3>
            <div className="mainSkills__box">
                <img className="mainSkills__box--img" src={html} alt="html logo" title="HTML5" />
                <img className="mainSkills__box--img" src={css} alt="css logo" title="CSS3" />
                <img className="mainSkills__box--img" src={sass} alt="sass logo" title="SASS" />
                <img className="mainSkills__box--img" src={tailwind} alt="tailwind logo" title="Tailwind" />
                <img className="mainSkills__box--img" src={javascript} alt="javascript logo" title="JavaScript" />
                <img className="mainSkills__box--img" src={typescript} alt="typescript logo" title="Typescript" />
                <img className="mainSkills__box--img" src={react} alt="react logo" title="ReactJS" />
                <img className="mainSkills__box--img" src={vue} alt="vue js logo" title="VueJS" />
                <img className="mainSkills__box--img" src={angular} alt="angular logo" title="Angular" />
                <img className="mainSkills__box--img" src={vite} alt="vite logo " title="Vite" />
                <img className="mainSkills__box--img" src={nodejs} alt="node js logo" title="NodeJS" />
                <img className="mainSkills__box--img" src={expressjs} alt="express js logo" title="ExpressJS" />
                <img className="mainSkills__box--img" src={mysql} alt="mysql logo" title="MySQL" />
                <img className="mainSkills__box--img" src={mongo} alt="mongodb logo" title="MongoDB" />
                <img className="mainSkills__box--img" src={git} alt="git logo" title="Git" />
                <img className="mainSkills__box--img" src={github} alt="github logo" title="GitHub" />
                <img className="mainSkills__box--img" src={figma} alt="figma logo" title="Figma" />
                <img className="mainSkills__box--img" src={scrum} alt="scrum logo" id="mainAboutMe" title="Scrum" />
            </div>
        </section>
    );
}


export default MainSkills;