import Footer from './components/FooterComp';
import Hero from './components/HeroComp';
import NavbarComp from './components/NavbarComp';
import About from './components/AboutComp';
import Skills from './components/SkillsComp';
import ParticlesBg from './components/animation/ParticlesBg';
import ProjectComp from './components/ProjectComp';
import CertificateComp from './components/CertificateComp';
import ContactComp from './components/ContactComp';
// import PreloaderComp from './components/PreloaderComp';

import './css/main.css'

function App() {
  return (
    <>
      {/* <PreloaderComp/> */}
      <Hero />

      {/* content */}
      <NavbarComp />
      <ParticlesBg />
      <About />
      <Skills />
      <ProjectComp />
      <CertificateComp />
      <ContactComp />

      {/* footer */}
      <Footer />
    </>
  );
}

export default App;
