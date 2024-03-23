import { Logo } from "../../components/Logo/Logo";
import CustomButton from "../../components/CustomButton";
import style from './Login.module.css';
import FacebookIcon from "../../assets/icons/facebook-logo2.svg"
import AppleIcon from "../../assets/icons/apple-icon.svg"
import GoogleIcon from "../../assets/icons/google-icon.svg"

export function Login() {
    return(
        <div>
            <header className={style['login-header']}>
                <Logo useWhite={false} />
            </header>
            <section className={style['login-details']}>
                <CustomButton className={style['facebook-btn']}> <img src={FacebookIcon} alt="" /> Continue with Facebook </CustomButton >
                <CustomButton className={style['apple-btn']}><img src={AppleIcon} alt="" /> Continue with Apple</CustomButton>
                <CustomButton className={style['google-btn']}><img src={GoogleIcon} alt="" /> Continue with google</CustomButton>
                <div className={style.divider}>
                    <hr />
                    <p>Or</p>
                    <hr />
                </div>
                <form action="">
                    <label htmlFor="email">Email address or username</label>
                    <input type="email" id="email" name="email" placeholder="Email address or username" />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password" />
                </form>
                <a href="/forgot" className={style['forgot-password']}>Forgot your password?</a>
                <div className={style.submit}>
                    <div className={style["remember-me"]}>
                        <input type="checkbox" id="remember-me" name="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <CustomButton type='submit' className={style['login-btn']} children={'log in'} />
                </div>
                <h6>Don't have an account?</h6>
                <CustomButton className={style['signup-btn']} children={'sign up for spotify'}/>
            </section>
        </div>
    );
}