import { useRouter } from "next/router";
import conectarDB from "../../../lib/dbConnect";
import Empresa from "../../../models/Empresa";
import Link from 'next/link';
import s from '../../../styles/container.module.scss';
import Image from 'next/image';
import comercio1 from '../../../public/static/agroveterinaria.jpg';

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

    const deleteData = async (id) => {
        try {
            await fetch(`/api/${id}`, {
                method: "DELETE",
            });
            router.push("/admin");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className={s.container}>
                <h2>Informações</h2>
                <div className={s.contentEmpresa}>
                    <div className="card-body">
                        <div>
                            <Image
                                src={comercio1}
                                alt="Picture do comercio"
                            />
                        </div>
                        
                        <p>
                            -Nome Fantasia: {empresa.namefantasia}
                        </p>
                        <p>
                            -Endereço: {empresa.endereco}
                        </p>
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
                        <Link href="/admin/">
                            <a className="btn btn-dark btn-sm me-2">Voltar</a>
                        </Link>
                        <Link href={`/admin/${empresa._id}/edit`}>
                            <   a className="btn btn-dark btn-sm me-2">Editar</a>
                        </Link>
                        <button className="btn btn-danger btn-sm" onClick={() => deleteData(empresa._id)}>Excluir</button>
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