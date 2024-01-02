import '../styles/App.scss';
import { useState } from 'react';
import Header from './Header';
import IntroSection from './IntroSection';

function App() {
  const [menuShow, setMenuShow] = useState(false);

  function toggleMenu() {
    setMenuShow(!menuShow);
  }

  return (
    <div>
      <Header toggleMenu={toggleMenu} menuShow={menuShow} />
      <main>
        <IntroSection />
        <section className="mainProjects" id="mainProjects">
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
        <section className="mainSkills" id="mainSkills">
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
        <section className="mainAboutMe" id="mainAboutMe">
          <h2>Algo más sobre mí...</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus harum dignissimos vero non suscipit quisquam ipsum, sint recusandae explicabo, veritatis temporibus quae nihil perferendis hic, nam sed. Repellendus, doloribus totam!</p>
        </section>
        <section className="mainContact" id="mainContact">
          <h2>Contacta conmigo</h2>
          <form action="https://formsubmit.co/your@email.com" method="POST">
            <label htmlFor="email">E-mail</label>
            <input name="email" id="email" type="text" placeholder="email@correo.com" />
            <label htmlFor="contact">Mensaje</label>
            <textarea name="contact" id="" cols="30" rows="10" placeholder="Estamos interesados en tu perfil..."></textarea>
            <div><button type="submit">Enviar</button></div>
          </form>
        </section>
      </main>
      <footer>
        <img className="footer__logo" src="../../src/assets/milogo.png" alt="Logo Iniciales MTCG" />
        <p>frase motivadora</p>
        <p>Developed by <span>mtcastro</span></p>
        <div>
          <a href="https://github.com/mteresacastro" target='_blank' rel="noreferrer"><i className="fa-brands fa-square-github"></i></a>
          <a href="https://www.linkedin.com/in/mteresacastro" target='_blank' rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
        </div>
      </footer>
    </div >
  );
}

export default App;
