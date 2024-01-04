import '../styles/mainProject.scss';


import milogo from '../../src/assets/miLogoMorado.png'

function MainProjects() {

    return (
        <section className="mainProjects" id="mainProjects">
            <h2>Proyectos</h2>
            <h3>&lt;h3&gt; Cada línea de código te acerca un paso más a tu <span>meta</span> &lt;/h3&gt;</h3>
            <article>
                <img src="" alt="" />
                <h4>Título proyecto</h4>
                <ul>
                    <li><img src="../src/images/css-48.png" alt="logo css"></img></li>
                    <li><img src="" alt=""></img></li>
                    <li><img src="" alt=""></img></li>
                    <li><img src="" alt=""></img></li>
                </ul>
            </article>
            <article>
                <img src="" alt="" />
                <h4>Título proyecto 2</h4>
                <ul>
                    <li><img src="../src/images/css-48.png" alt="logo css"></img></li>
                    <li><img src="" alt=""></img></li>
                    <li><img src="" alt=""></img></li>
                    <li><img src="" alt=""></img></li>
                </ul>
            </article>
        </section>
    );
}

export default MainProjects;