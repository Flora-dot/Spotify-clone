import Styles from './style.module.css';
import CustomButton from '../CustomButton';
import { DebitCards } from './DebitCards';

export const PremiumPlans = () =>{
    const premiumPlans = [1,2,3,4];

    const funct = () => {
        return(
            <div>
                    <CustomButton children={'One-time plans available'}/>
                    <CustomButton />
                    <h5>Mini</h5>
                    <p>From ₹7/day</p>
                    <p>1 account on mobile only</p>
                    <hr />
                    <ul>
                        <li>Group session</li>
                        <li>Group session</li>
                        <li>Group session</li>
                    </ul>
                    <CustomButton />
                    <hr />
                    <a href="#/terms">Terms and conditions applya</a>
                </div>
        );
    }

    return(
        <section className={Styles['plans-section']}>
            <h1>Pick your Premium</h1>
            <p className={Styles['title']}>Listen without limits on your phone, speaker, and other devices.</p>
            <div className={Styles['card-icons']}>
                <DebitCards />
            </div>
            <div className={Styles['premium-plans']}>
                {premiumPlans.map(funct)}
                
            </div>
            <div className={Styles['discount-section']}>
                <h6 className={Styles['discount-title']}>Special discount for eligible students in university</h6>
                <CustomButton className={Styles['learn-more-btn']}  children={'Learn more'}/>
            </div>
        </section>
    );
}