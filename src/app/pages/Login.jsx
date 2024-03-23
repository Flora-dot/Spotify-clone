import { Logo } from "../../components/Logo/Logo";
import CustomButton from "../../components/CustomButton";
import style from './Login.module.css'

export function Login() {
    return(
        <div>
            <header className={style['login-header']}>
                <Logo useWhite={false} />
            </header>
            <section className={style['login-details']}>
                <CustomButton className={style['facebook-btn']} children={'Continue with facebook'}/>
                <CustomButton className={style['apple-btn']} children={'Continue with Apple'}/>
                <CustomButton className={style['google-btn']} children={'Continue with google'}/>
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