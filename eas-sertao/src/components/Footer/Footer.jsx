import s from "./footer.module.scss"
import {Login} from '../Modal/Login'

export const Footer= () =>{
    return(
        <section className={s.footer}>
            <div>
                <h4>ADS2022</h4>
            </div>
            <div>
                <Login/>
            </div>
        </section>
    )
}