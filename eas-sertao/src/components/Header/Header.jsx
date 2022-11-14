import s from "./header.module.scss";
import Link from 'next/link';
import logo from '../../../public/static/logo.jpg';
import Image from 'next/image';

export const Header = () => {
    return (
        <section className={s.header}>
            <div className={s.caixa}>

                <Link href="/">
                    <div className={s.logo}>
                        <Image id={s.imagem} src={logo} alt="Picture do comercio" />
                    </div>
                </Link>

                <Link href="/">
                    <div className={s.titulo}>
                        <p>Associação Empresarial Sertanense</p>
                    </div>
                </Link>

            </div>
        </section>
    )
}