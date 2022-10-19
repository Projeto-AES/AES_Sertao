import s from "./header.module.scss"

export const Header = () =>{
    return(
        <section className={s.header}>
            <span className={s.title}>AES</span>
        </section>
    )
}