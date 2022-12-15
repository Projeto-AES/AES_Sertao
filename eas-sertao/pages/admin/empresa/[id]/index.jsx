import { useRouter } from "next/router";
import { Header } from '../../../../src/components/Header/Header';
import { Footer } from '../../../../src/components/Footer/Footer';
import Image from 'next/image';
import conectarDB from "../../../../lib/dbConnect";
import Empresa from "../../../../models/Empresa";
import Link from 'next/link';
import s from '../../../../styles/container.module.scss';
import Banner from '../../../../src/components/Banner/Banner';
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { useSession } from 'next-auth/react';
const EmpresaPage = ({ success, error, empresa }) => {
    const router = useRouter();

    //sessão
    const {data: session } = useSession({
        required: true
      });
    
      if(!session) {
        return <></>
      }

    if (!success) {
        return (
            <div className="container text-center my-5">
                <h1>{error}</h1>

                <Link href="/admin">
                    <a className="btn btn-success">Voltar</a>
                </Link>
            </div>
        );
    }

    const deleteData = async (id) => {
        try {
            await fetch(`/api/empresa/${id}`, {
                method: "DELETE",
            });
            router.push("/admin");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <header>
                <Header />
            </header>
            <div className={s.container}>

                <div className={s.contentEmpresa}>
                    <div className="card-body">
                        <p className={s.conteudo2}>
                            {empresa.namefantasia}
                        </p>

                        <Banner></Banner>
                        <div className={s.opcao}>
                            <Link href={`/admin/empresa/${empresa._id}/edit`}>
                                <   a className="btn btn-warning btn-sg me-2">Editar</a>
                            </Link>
                            <button className="btn btn-danger btn-sg" onClick={() => deleteData(empresa._id)}>Excluir</button>
                            <p></p>
                        </div>
                        <p className={s.conteudo}>
                            <b> Responsável:</b> {empresa.responsavel}
                        </p>

                        <img
                        src={empresa.url}
                        //layout='fill'
                        />

                        <p className={s.conteudo}>
                            <b> Setor:</b> {empresa.setor}
                        </p>

                        <p className={s.conteudo}>
                            <b> E-mail para contato:</b> {empresa.email}
                        </p>

                        <p className={s.conteudo}>
                            <b> Telefone/Whatsapp:</b> {empresa.telefonecelular}
                        </p>

                        <p className={s.conteudo}>
                            <b>  Endereço:</b> {empresa.endereco}
                        </p>
                        <div className={s.soc}>
                        {empresa.instagram.length !=0 ?
                         <Link href={empresa.instagram}>
                                <RiInstagramFill className={s.ico2} />
                            </Link> : ''}
                            
                        {empresa.facebook.length !=0 ?
                        <Link href={empresa.facebook}>
                                <FaFacebookSquare className={s.ico2} />
                            </Link> : ''}

                        {empresa.whatsapp.length !=0 ?
                            <Link href={empresa.whatsapp}>
                                <IoLogoWhatsapp className={s.ico2} />
                            </Link> : ''}
                        </div>
                        <div>
                            <iframe src={empresa.mapa}
                                width="80%" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                        <Link href="/admin">
                            <a className="btn btn-dark btn-sm me-2">Voltar</a>
                        </Link>
                    </div>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default EmpresaPage;

export async function getServerSideProps({ params }) {
    try {
        await conectarDB()

        const empresa = await Empresa.findById(params.id).lean();

        if (!empresa) {
            return { props: { success: false, error: "Dados nao encontrados" } };
        }

        console.log(empresa);
        empresa._id = `${empresa._id}`;

        return { props: { success: true, empresa } };
    } catch (error) {
        console.log(error);
        if (error.kind === 'ObjectId') {
            return { props: { success: false, error: "ID nao Valido" } };
        }
        return { props: { success: false, error: "Erro de Servidor" } };
    }
}