import UpiCardIcon from '../../assets/icons/upi-icon.svg';
import MasterCardIcon from '../../assets/icons/master-card-icon.svg';
import VisaCardIcon from '../../assets/icons/visa-card-icon.svg';
import AmexCardIcon from '../../assets/icons/amex-card-icon.svg';
import DinersCardIcon from '../../assets/icons/diners-card-icon.svg';
import PaytmCardIcon from '../../assets/icons/paytm-icon.svg';

export const DebitCards = () => {
    return(
        <>
            <img src={UpiCardIcon} alt="" />
            <img src={PaytmCardIcon} alt="" />
            <img src={VisaCardIcon} alt="" />
            <img src={MasterCardIcon} alt="" />
            <img src={AmexCardIcon} alt="" />
            <img src={DinersCardIcon} alt="" />
        </>
    );
}