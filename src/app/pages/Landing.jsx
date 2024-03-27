import '../App.css';
import { LandingPageHeader } from '../../components/Header/LandingPageHeader.jsx';
import {HeroSection} from '../../components/Hero-section/HeroSection.jsx';
import { Features } from '../../components/FeaturesSection/Features.jsx';
import { PremiumPlans } from '../../components/PremiumPlans/PremiumPlans.jsx';
import Footer from '../../components/Footer/Footer.jsx'

function Landing() {
  return (
    <>
    <LandingPageHeader/>
    <HeroSection amount={119} />
    <Features />
    <PremiumPlans />
    <Footer />
    </>
  );
}

export default Landing;