import SpotifyBlack from '../../assets/images/spotifyblack.svg';
import SpotifyWhite from '../../assets/images/spotifywhite.svg';
import style from './Logo.style.module.css';

export function Logo(props) {
    const logoImage = props.useWhite ? SpotifyWhite : SpotifyBlack ;
    
    return(
    <a href="/" className={style.logo}>
        <img src={logoImage} alt="spotifylogo" />
    </a>
    );
}