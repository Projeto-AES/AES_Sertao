import { useRouter } from "next/router";
import conectarDB from "../../../lib/dbConnect";
import Empresa from "../../../models/Empresa";
import Link from 'next/link';

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
            <div className="container">
                <h1>Dados Empresa</h1>
                <div className="card">
                    <div className="card-body">
                        <div className="card_title">
                            <h5 className="text-uppercase">{empresa.namefantasia}</h5>
                        </div>
                        <p className="fw-light">Endereco: {empresa.endereco}</p>

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