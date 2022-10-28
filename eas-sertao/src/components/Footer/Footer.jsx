import s from "./footer.module.scss"
import Link from 'next/link';
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

export const Footer = () => {
    return (
        <section className={s.footer}>
            <div>
                <div class={s.caixa_footer}>
                    <div class={s.sociais}>
                        <Link href="https://pt-br.facebook.com/aes.sertanense/">
                            <BsFacebook class={s.ico} size={40} />
                        </Link>

                        <Link href="https://www.instagram.com/aessertanense/?igshid=YmMyMTA2M2Y%3D">
                            <BsInstagram class={s.ico}size={40} />
                        </Link>

                        <Link href="https://api.whatsapp.com/send?phone=5554997153996&text=Ol%C3%A1%2C+achei+seu+contato+no+YouTube...">
                            <BsWhatsapp class={s.ico} size={40} />
                        </Link>

                        <Link href="https://www.youtube.com/channel/UCV_IbPz2Y2gHjVo1l-nykXA">
                            <BsYoutube class={s.ico} size={40} />
                        </Link>
                    </div>

                    <div class={s.aa}>@2022 Copyright: ADS 2022</div>
                </div>
            </div>
        </section>
    )
}