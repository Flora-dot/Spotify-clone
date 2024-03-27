import React from "react";
import { Logo } from "../../components/Logo/Logo";
import CustomButton from "../../components/CustomButton";
import style from "./Login.module.css";
import FacebookIcon from "../../assets/icons/facebook-logo2.svg";
import AppleIcon from "../../assets/icons/apple-icon.svg";
import GoogleIcon from "../../assets/icons/google-icon.svg";
// import { IsProtectedRoute } from "../hoc/isProtectedRoute";
import {  toast } from 'react-toastify';

export function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  //manage form state using a single state that keeps track of all changes
  // const [form, setForm] = React.useState({});

  console.log({
    password,
    email,
    rememberMe,
  });
  // manage email state
  const handleEmail = (event) => {
    setEmail(event.target.value);
    // setForm({...form, email: event.target.value});
    // console.log(event.target.value)
  };

  // manage password state
  const handlePassword = (event) => {
    setPassword(event.target.value);
    // setForm({...form, password: event.target.value});
    // console.log(event.target.value)
  };

  // manage remeber me state
  const handleRememberMe = (event) => {
    // setForm({...form, rememberme: event.target.value});
    setRememberMe(event.target.checked);
  };

  const loginUser = () => {
    setIsSubmitting(true)
    const payload = { username:email, password, rememberMe };
    console.log({ payload }, "I am inside the handleLogin");
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(async (response) => {
        if (response.status !== 200) {
          const data = await response.json();
          throw data;
        }
        return response.json();
      })
      .then((response) => {
        console.log("I got a login success", response);
        toast(`Signed in as ${email} `);
        localStorage.setItem('user', JSON.stringify(response));
        setTimeout(function() {
          window.location.href = '/';
      }, 1000);
      })
      .catch((error) => {
        console.log("I got a login error", error);
        toast(error.message)
      })
      .finally(()=>{
        setIsSubmitting(false)
      })
  };
  
  return (
    <div>
      <header className={style["login-header"]}>
        <Logo useWhite={false} />
      </header>
      <section className={style["login-details"]}>
        <CustomButton className={style["facebook-btn"]}>
          <img src={FacebookIcon} alt="" /> Continue with Facebook
        </CustomButton>
        <CustomButton className={style["apple-btn"]}>
          <img src={AppleIcon} alt="" /> Continue with Apple
        </CustomButton>
        <CustomButton className={style["google-btn"]}>
          <img src={GoogleIcon} alt="" /> Continue with google
        </CustomButton>
        <div className={style.divider}>
          <hr />
          <p>Or</p>
          <hr />
        </div>
        <form action="">
          <label htmlFor="email">Email address or username</label>
          <input
            onChange={handleEmail}
            type="email"
            id="email"
            name="email"
            placeholder="Email address or username"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            onChange={handlePassword}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />

          <a href="/forgot" className={style["forgot-password"]}>
            Forgot your password?
          </a>
          <div className={style.submit}>
            <div className={style["remember-me"]}>
              <input
                onChange={handleRememberMe}
                type="checkbox"
                id="remember-me"
                name="remember-me"
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <CustomButton
              onClick={loginUser}
              type="submit"
              className={style["login-btn"]}
              children={"log in"}
              disabled={isSubmitting}
            />
          </div>
        </form>
        <h6>Don't have an account?</h6>
        <CustomButton
          className={style["signup-btn"]}
          children={"sign up for spotify"}
        />
      </section>
    </div>
  );
}
