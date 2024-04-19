import '../styles/App.scss';
import { useState } from 'react';
import Header from './Header';
import IntroSection from './IntroSection';
import Footer from './Footer';
import MainContact from './MainContact';
import MainAboutMe from './MainAboutMe';
import MainSkills from './MainSkills';
import MainProjects from './MainProjects';
import ThanksMessage from './ThanksMessage';


function App() {
  const [menuShow, setMenuShow] = useState(false);

  function toggleMenu() {
    setMenuShow(!menuShow);
  }

  const [flowerShow, setFlowerShow] = useState(false);

  function toggleFlower() {
    setFlowerShow(!flowerShow);
  }

  return (
    <div id="mainIntro">
      <ThanksMessage flowerShow={flowerShow} />
      <Header toggleMenu={toggleMenu} menuShow={menuShow} toggleFlower={toggleFlower} />
      <main>
        <IntroSection />
        <MainProjects />
        <MainSkills />
        <MainAboutMe />
        <MainContact />
      </main>
      <Footer toggleFlower={toggleFlower} />
    </div >
  );
}

export default App;
