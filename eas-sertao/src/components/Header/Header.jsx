import s from "./header.module.scss";
import Link from 'next/link';
import logo from '../../../public/static/aes.png';
import Image from 'next/image';

export const Header = () => {
    return (
        <section className={s.header}>
            <div className={s.caixa}>
            
                <Link className={s.cabeca} href="/">
                <Image 
                    src={logo}
                    alt="Picture do comercio"
                    width="170" height="140"
                    />
                </Link>
            </div>
        </section>
    )
}