import '../styles/App.scss';

function App() {
  return (
    <div>
      <header>
        <img className="header__logo" src="../../src/assets/miLogo-removebg-preview.png" alt="Logo Iniciales MTCG" />
        <nav className="header__nav">
          <ul className="header__nav--ul">
            <li>
              <a className="link" href="#">Inicio</a>
            </li>
            <li>
              <a className="link" href="#">Proyectos</a>
            </li>
            <li>
              <a className="link" href="#">Habilidades</a>
            </li>
            <li>
              <a className="link" href="#">Sobre mí</a>
            </li>
            <li>
              <a className="link" href="#">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <img src="" alt="" />
          <div className='mainInfo'>
            <h1>María Teresa Castro González</h1>
            <h2>Front-End Developer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum natus cupiditate cum nihil enim quia provident, aspernatur asperiores sed. Itaque ipsa aliquid vel. Nisi rem adipisci, inventore necessitatibus rerum hic.</p>
          </div>
          <div className='contactInfo'>
            <a href="../src/assets/CV_Teresa_Castro_G.pdf" download="MTeresaCastro-CV.pdf">
              <button className="btn">Descargar CV</button>
            </a>
            <a href=""><i className="fa-brands fa-square-github"></i></a>
            <a href=""><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </section>
        <section className="mainProjects">
          <h2>Proyectos</h2>
          <h3>&lt;h3&gt; Cada línea de código te acerca un paso más a tu <span>meta</span> &lt;/h3&gt;</h3>
          <article>
            <img src="" alt="" />
            <h4>Título proyecto</h4>
            <ul>
              <li><img src="../src/images/css-100.png" alt="logo css"></img></li>
              <li><img src="" alt=""></img></li>
              <li><img src="" alt=""></img></li>
              <li><img src="" alt=""></img></li>
            </ul>
          </article>
          <article>
            <img src="" alt="" />
            <h4>Título proyecto 2</h4>
            <ul>
              <li><img src="../src/images/css-100.png" alt="logo css"></img></li>
              <li><img src="" alt=""></img></li>
              <li><img src="" alt=""></img></li>
              <li><img src="" alt=""></img></li>
            </ul>
          </article>
        </section>
        <section className="mainSkills">
          <h2>Habilidades</h2>
          <h3>Más centrada en el Front, pero siempre con una mirada al Back</h3>
          <div className="mainSkills__box">
            <img className="mainSkills__box--img" src="" alt="" />
            <img className="mainSkills__box--img" src="" alt="" />
            <img className="mainSkills__box--img" src="" alt="" />
            <img className="mainSkills__box--img" src="" alt="" />
            <img className="mainSkills__box--img" src="" alt="" />
            <img className="mainSkills__box--img" src="" alt="" />
            <img className="mainSkills__box--img" src="" alt="" />
            <img className="mainSkills__box--img" src="" alt="" />
            <img className="mainSkills__box--img" src="" alt="" />
          </div>
        </section>
        <section className="mainAboutMe">
          <h2>Algo más sobre mí...</h2>
          <hr />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus harum dignissimos vero non suscipit quisquam ipsum, sint recusandae explicabo, veritatis temporibus quae nihil perferendis hic, nam sed. Repellendus, doloribus totam!</p>
          <hr />
        </section>
      </main>

    </div>
  );
}

export default App;
