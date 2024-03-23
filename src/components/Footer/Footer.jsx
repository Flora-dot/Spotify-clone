import style from"./style.module.css"
import { Logo } from "../Logo/Logo";
import { FooterMenu } from "./FooterMenu";
// import { FooterIcons } from "./FooterIcons";
import InstagramLogo from "../../assets/icons/instagram-logo.svg";
import TwitterLogo from "../../assets/icons/twitter-logo.svg";
import FacebookLogo from "../../assets/icons/facebook-logo.svg";
import GlobeIcon from "../../assets/icons/globe-icon.svg"
import { FaFacebookF } from "react-icons/fa";

export default function Footer(){
    return(
        <footer>
            <div className={style['footer-content']}>
            <div className={style['footer-items']}>
                <Logo useWhite={true}/>
                <div className={style['footer-menu']}>
                    <FooterMenu />
                </div>
            </div>
                <div className={style['footer-icons']}>
                    <img src={InstagramLogo} alt="" />
                    <FaFacebookF />
                    <img src={FacebookLogo} alt="" />
                    <img src={TwitterLogo} alt="" />
                </div>
            </div>
            <div className={style['footer-bottom-content']}>
                <ul className={style['bottom-menu']}>
                    <li>Legal</li>
                    <li>Privacy Center</li>
                    <li>Privacy Policy</li>
                    <li>Cookies</li>
                    <li>About Ads</li>
                </ul>
                <div>
                    <p><img src={GlobeIcon} alt="" /> India (English)</p>
                    <p>&copy; 2023 Spotify AB</p>
                </div>
            </div>
        </footer>
    );
}