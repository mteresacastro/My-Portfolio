import '../styles/App.scss';
import { useState } from 'react';
import Header from './Header';
import IntroSection from './IntroSection';
import Footer from './Footer';
import MainContact from './MainContact';
import MainAboutMe from './MainAboutMe';
import MainSkills from './MainSkills';
import MainProjects from './MainProjects';


function App() {
  const [menuShow, setMenuShow] = useState(false);

  function toggleMenu() {
    setMenuShow(!menuShow);
  }

  return (
    <div id="mainIntro">
      <Header toggleMenu={toggleMenu} menuShow={menuShow} />
      <main>
        <IntroSection />
        <MainProjects />
        <MainSkills />
        <MainAboutMe />
        <MainContact />
      </main>
      <Footer />
    </div >
  );
}

export default App;
