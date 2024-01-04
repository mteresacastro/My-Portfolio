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

function MainSkills() {

    return (
        <section className="mainSkills" id="mainSkills">
            <h2 className="mainSkills__h2">Habilidades</h2>
            <h3 className="mainSkills__h3">Más centrada en el Front, pero siempre con una mirada al Back</h3>
            <div className="mainSkills__box">
                <img className="mainSkills__box--img" src={html} alt="" />
                <img className="mainSkills__box--img" src={css} alt="" />
                <img className="mainSkills__box--img" src={sass} alt="" />
                <img className="mainSkills__box--img" src={javascript} alt="" />
                <img className="mainSkills__box--img" src={react} alt="" />
                <img className="mainSkills__box--img" src={vue} alt="" />
                <img className="mainSkills__box--img" src={vite} alt="" />
                <img className="mainSkills__box--img" src={nodejs} alt="" />
                <img className="mainSkills__box--img" src={expressjs} alt="" />
                <img className="mainSkills__box--img" src={mysql} alt="" />
                <img className="mainSkills__box--img" src={git} alt="" />
                <img className="mainSkills__box--img" src={github} alt="" />
                <img className="mainSkills__box--img" src={scrum} alt="" />
            </div>
        </section>
    );
}


export default MainSkills;