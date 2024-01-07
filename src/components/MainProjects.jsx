import '../styles/mainProject.scss';
import school from '../../src/images/backtoschool.png'

import milogo from '../../src/assets/miLogoMorado.png'

function MainProjects() {

    return (
        <section className="mainProjects">
            <h2 className="mainProjects__h2">Proyectos</h2>
            <h3 className="mainProjects__h3">&lt;h3&gt; Cada línea de código te acerca un paso más a tu <span className="mainProjects__h3--span">meta</span> &lt;/h3&gt;</h3>
            <div className="mainProject__div">
                <article className="mainProjects__art">
                    <div className="mainProjects__art--container">
                        <img className="mainProjects__art--container-img" src={school} alt="" />
                        <div className="mainProjects__art--container-div">
                            <h4 className="art__div--h4">Ver Demo</h4>
                            <ul className="art__div--ul">
                                <li><img className="art__div--ul-img" src="../src/images/html-48.png" alt="logo html" /></li>
                                <li><img className="art__div--ul-img" src="../src/images/css-48.png" alt="logo css" /></li>
                                <li><img className="art__div--ul-img" src="../src/images/sass-48.png" alt="logo sass" /></li>
                            </ul>
                        </div>
                    </div>
                </article>

            </div>
        </section>
    );
}

export default MainProjects;