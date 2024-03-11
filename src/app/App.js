import './App.css';
import '../components/Header/LandingPageHeader.jsx'
import { LandingPageHeader } from '../components/Header/LandingPageHeader.jsx';
import {HeroSection} from '../components/Hero-section/HeroSection.jsx';
import { Features } from '../components/FeaturesSection/Features.jsx';
import { PremiumPlans } from '../components/PremiumPlans/PremiumPlans.jsx';

function App() {
  return (
    <>
    <LandingPageHeader/>
    <HeroSection amount={119} />
    <Features />
    <PremiumPlans />
    </>
  );
}

export default App;
