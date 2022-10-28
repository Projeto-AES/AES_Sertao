import s from "./header.module.scss"
import Link from 'next/link';

export const Header = () => {
    return (
        <section className={s.header}>
            <div class={s.caixa}>
                <Link href="/">
                    <img class={s.logo} src="https://o.remove.bg/downloads/5c88bb23-72a5-4dd2-9a46-0e154ca247de/gfgfgggg-removebg-preview-removebg-preview.png" width="100" height="80" />
                </Link>
                <p class={s.cabeca}>AES</p>
            </div>
        </section>
    )
}