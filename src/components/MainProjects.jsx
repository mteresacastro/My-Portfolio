import '../styles/mainProject.scss';
import school from '../../src/images/backtoschool.png'

import milogo from '../../src/assets/miLogoMorado.png'

function MainProjects() {

    return (
        <section className="mainProjects" id="mainProjects">
            <h2 className="mainProjects__h2">Proyectos</h2>
            <h3 className="mainProjects__h3">&lt;h3&gt; Cada línea de código te acerca un paso más a tu <span className="mainProjects__h3--span">meta</span> &lt;/h3&gt;</h3>
            <div className="mainProject__div">
                <article className="mainProjects__art">
                    <div className="mainProjects__art--container">
                        <img className="mainProjects__art--container-img" src={school} alt="" />
                        <div className="mainProjects__art--container-div">
                            <h4 className="art__div--h4">Título proyecto</h4>
                            <ul className="art__div--ul">
                                <li><img className="art__div--ul-img" src="../src/images/html-48.png" alt="logo html" /></li>
                                <li><img className="art__div--ul-img" src="../src/images/css-48.png" alt="logo css" /></li>
                                <li><img className="art__div--ul-img" src="../src/images/sass-48.png" alt="logo sass" /></li>
                                <li><img className="art__div--ul-img" src="" alt="" /></li>
                            </ul>
                        </div>
                    </div>
                </article>
                <article className="mainProjects__art">
                    <img className="mainProjects__art--img" src="" alt="" />
                    <div className="mainProjects__art--div">
                        <h4 className="mainProjects__art--div-h4">Título proyecto</h4>
                        <ul className="mainProjects__art--div-ul">
                            <li><img className="div__ul--li" src="../src/images/css-48.png" alt="logo css"></img></li>
                            <li><img className="div__ul--li" src="" alt=""></img></li>
                            <li><img className="div__ul--li" src="" alt=""></img></li>
                            <li><img className="div__ul--li" src="" alt=""></img></li>
                        </ul>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default MainProjects;