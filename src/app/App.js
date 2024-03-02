import './App.css';
import '../components/Header/LandingPageHeader.jsx'
import { LandingPageHeader } from '../components/Header/LandingPageHeader.jsx';
import {HeroSection} from '../components/Hero-section/HeroSection.jsx';

function App() {
  return (
    <>
    <LandingPageHeader/>
    <HeroSection />
    </>
  );
}

export default App;
