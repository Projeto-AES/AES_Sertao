import Form from "../../src/components/Cadastro/Cadastra";
import { Header } from '../../src/components/Header/Header';
import { Footer } from "../../src/components/Footer/Footer";
import s from '../../styles/container.module.scss'

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
            <h2 className={s.h2}>Adiciconar Nova Empresa</h2>
                <Form formData={formData} />
            </div>
        <Footer/>
        </div>
    );
}

export default New