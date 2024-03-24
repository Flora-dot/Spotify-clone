import CustomButton from "../../components/CustomButton";
import style from "./Login.module.css"

export function NotFound() {
    return(
        <section className={style['not-found']}>
            <div className={style['not-found-content']}>
                <h1>4<span>0</span>4</h1>
                <p>The page you are looking for might have been removed, had it's name changed or is temporarily unavailable. </p>
                <a href="/"><CustomButton children={'HOMEPAGE'}/></a>
            </div>
        </section>
    );
}