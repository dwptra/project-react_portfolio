import Footer from './components/FooterComp';
import Hero from './components/HeroComp';
import NavbarComp from './components/NavbarComp';
import About from './components/AboutComp';
import Skills from './components/SkillsComp';
import ParticlesBg from './components/animation/ParticlesBg';
// import PreloaderComp from './components/PreloaderComp';

import './css/main.css'

function App() {
  return (
    <>
      {/* <PreloaderComp/> */}
      <Hero/>

      {/* content */}
      <NavbarComp/>
      <ParticlesBg/>
      <About/>
      <Skills/>

      {/* footer */}
      <Footer/>
    </>
  );
}

export default App;
