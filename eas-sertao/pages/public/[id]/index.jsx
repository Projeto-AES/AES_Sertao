import { useRouter } from "next/router";
import conectarDB from "../../../lib/dbConnect";
import Empresa from "../../../models/Empresa";
import Link from 'next/link';
import s from '../../../styles/container.module.scss'
import Image from 'next/image'
import comercio1 from '../../../public/static/agroveterinaria.jpg'

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
            {/* TEM Q TER HEADER E FOOTER AQUI TBM, MAS SER ADICIONADO PADRAO LA NO APP */}
            <div className={s.container}>
                <h2>Informações</h2>
                <div className={s.contentEmpresa}>
                    <div className="card-body">
                        <div className="card_title">
                            <h5 className="text-uppercase">{empresa.namefantasia}</h5>
                        </div>
                        <div>
                            <Image
                                src={comercio1}
                                alt="Picture do comercio"
                            />
                        </div>
                        <p className="fw-light">Endereco: {empresa.endereco}</p>
                        <p>
                            -Nome Fantasia: Exata Agrícola
                        </p>
                        <p>
                            -Endereço: Perto da rua x
                        </p>
                        <p>
                            -Telefone/Whatsapp: 549999922222
                        </p>
                        <p>
                            -CNPJ:399442040222
                        </p>
                        <p>
                            -Razão social: Exatos
                        </p>
                        <p>
                            -E-mail para contato: exata@gmail.com
                        </p>
                        <p>
                            -Responsável: xxxxx
                        </p>
                        <Link href="/">
                            <a className="btn btn-dark btn-sm me-2">Voltar</a>
                        </Link>
                    </div>
                </div>
            </div>
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