import './LandingPageHeader.css'
import {Logo} from './Logo';
export const LandingPageHeader = () => {
    return (<div className='header'>
        <div className='logo'>
            <Logo />
        </div>
        <ul>
        <li><a href="">Premium</a></li>
        <li><a href="">Support</a></li>
        <li><a href="">Download</a></li>
        <div className='line'></div>
        <li><a href="" className='active'>Sign up</a></li>
        <li><a href="" className='active'>Log in</a></li>
        </ul>
    </div>);
}