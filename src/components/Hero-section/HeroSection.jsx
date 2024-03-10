import './HeroSection.css';
import CustomButton from '../CustomButton';

export const HeroSection = (props) => {
    return (
       <section className='hero-section'>
            <div className='hero-content'>
                <h1>Get Premium free for 1 month</h1>
                <h5>Just {props.amount || "₹119"}/month after. Debit and credit cards accepted. Cancel anytime.</h5>
                <div className='hero-cta'>
                    <CustomButton className='get-started-btn'>Get started</CustomButton>
                    <CustomButton className='see-plans-btn'>See other plans</CustomButton>
                </div>
                <p className='terms'><a href="#/Terms">Terms and conditions apply.</a> 1 month free not available for users who have already tried Premium.</p>
            </div>
       </section>
    );
}