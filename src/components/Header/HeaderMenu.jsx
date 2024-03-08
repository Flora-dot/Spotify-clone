
export const HeaderMenu = (props) => {
 return(
    <ul className={props.className}>
        <li><a href="#/Premium">Premium</a></li>
        <li><a href="#/Support">Support</a></li>
        <li><a href="#/Download">Download</a></li>
        <div className='line'></div>
        <li><a href="#/Signup" className='active'>Sign up</a></li>
        <li><a href="#/Login" className='active'>Log in</a></li>
    </ul>
 );
}