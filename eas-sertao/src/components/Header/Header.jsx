import s from "./header.module.scss";
import logo from '../../../public/static/logo.jpg';
import Image from 'next/image';

export const Header = () => {
    return (
        <section className={s.header}>
            <div className={s.logo}>
                <Image className={s.logoImg} src={logo} alt="Picture do comercio" />
            </div>
            <p className={s.titulo}>Associação Empresarial Sertanense</p>
        </section>
    )
}