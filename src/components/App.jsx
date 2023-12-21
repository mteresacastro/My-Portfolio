import '../styles/App.scss';

function App() {
  return (
    <div>
      <header>
        <img className="header__logo" src="../../src/assets/miLogo-removebg-preview.png" alt="Logo Iniciales MTCG" />
        <nav className="header__nav">
          <ul className="header__nav--ul">
            <li>Inicio</li>
            <li>Proyectos</li>
            <li>Habilidades</li>
            <li>Sobre mí</li>
            <li>contacto</li>
          </ul>
        </nav>
      </header>
      <main>
        <img src="" alt="" />
        <div className='mainInfo'>
          <h1>María Teresa Castro González</h1>
          <h2>Front-End Developer</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum natus cupiditate cum nihil enim quia provident, aspernatur asperiores sed. Itaque ipsa aliquid vel. Nisi rem adipisci, inventore necessitatibus rerum hic.</p>
        </div>
        <div className='contactInfo'>
          <a href="/mi-cv.pdf" download="mi-cv.pdf">
            <button className="btn">Descargar CV</button>
          </a>
          <a href=""><i className="fa-brands fa-square-github"></i></a>
          <a href=""><i className="fa-brands fa-linkedin"></i></a>
        </div>
      </main>

    </div>
  );
}

export default App;
