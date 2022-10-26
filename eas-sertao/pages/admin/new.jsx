import Form from "../../src/components/Cadastro/Cadastra";
import { Header } from '../../src/components/Header/Header';

const New = () => {

    const formData = {
        numerosocio: "",
        cnpj: "",
        namejuridico: "",
        namefantasia: "",
        endereco: "",
        telefonefixo: "",
        telefonecelular: "",
        tipopessoa: "",
        responsavel: "",
        setor: "",
        pagamento: "",
        redessociais: "",
        foto: "",
        inscricaoestadual: "",
        dataadmissao: "",
    };

    return (
        <div >
            <Header />
            <div className="container">
                <h1 className="my-3">Adicionar Nova Empresa</h1>
                <Form formData={formData} />
            </div>

        </div>
    );
}

export default New