import { Header } from '../../../src/components/Header/Header';
import { Footer } from '../../../src/components/Footer/Footer';
import { useRouter } from "next/router";
import conectarDB from "../../../lib/dbConnect";
import Empresa from "../../../models/Empresa";
import Link from 'next/link';
import s from '../../../styles/container.module.scss';
import Image from 'next/image';
import comercio1 from '../../../public/static/agroveterinaria.jpg';
import Banner from '../../../src/components/Banner/Banner';

const EmpresaPage = ({ success, error, empresa }) => {
    const router = useRouter();

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

    return (
        <div>
            <header>
                <Header />
            </header>
            <div className={s.container}>

                <div className={s.contentEmpresa}>
                    <div className="card-body">
                        <p>
                            {empresa.namefantasia}
                        </p>
                        <Banner></Banner>
                        <p>
                            -Telefone/Whatsapp: {empresa.telefonecelular}
                        </p>
                        <p>
                            -CNPJ: {empresa.cnpj}
                        </p>
                        <p>
                            -Razão social: {empresa.namejuridico}
                        </p>
                        <p>
                            -E-mail para contato: {empresa.email}
                        </p>
                        <p>
                            -Responsável: {empresa.responsavel}
                        </p>
                        <p>
                            -Endereço: {empresa.endereco}
                        </p>
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14085.332636938774!2d-52.2656117!3d-28.0448504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e2e5e264da7f39%3A0xd7748730de499f58!2sIFRS%20-%20Campus%20Sert%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1668169807609!5m2!1spt-BR!2sbr"
                                width="80%" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        
                        <Link href="/">
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