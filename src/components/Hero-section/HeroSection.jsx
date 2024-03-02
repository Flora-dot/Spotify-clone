import './HeroSection.css';
import Button from '../Button';

export const HeroSection = () => {
    return (
       <section className='hero-section'>
            <div className='hero-content'>
                <h1>Get Premium free for 1 month</h1>
                <h5>Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</h5>
                <div className='hero-cta'>
                    <Button className='get-started-btn'>Get started</Button>
                    <Button className='see-plans-btn'>See other plans</Button>
                </div>
                <p className='terms'><a href="#/Terms">Terms and conditions apply.</a> 1 month free not available for users who have already tried Premium.</p>
            </div>
       </section>
    );
}