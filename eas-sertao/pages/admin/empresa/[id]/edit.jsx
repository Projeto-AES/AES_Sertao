import Form from "../../../../src/components/Cadastro/Cadastra";
import useSWR from "swr";
import { useRouter } from "next/dist/client/router";

const fetcher = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        const error = new Error("An error occurred while fetching the data.");
        error.info = await res.json();
        error.status = res.status;
        throw error;
      }
    const {data} = await res.json();

    return data;
};


const EditEmpresa = () => {
    const router = useRouter();
    const { id } = router.query;
  
    const { data: empresa, error } = useSWR(
      id ? `/api/empresa/${id}` : null,
      fetcher
    );
  
    if (error) {
      return <div>Error</div>;
    }
  
    if (!empresa) {
      return (
        <div className="container mt-5 text-center">
          <h1>Loading...</h1>
        </div>
      );
    }
  
    const formData = {
        numerosocio: empresa.numerosocio,
        cnpj: empresa.cnpj,
        namejuridico: empresa.namejuridico,
        namefantasia: empresa.namefantasia,
        endereco:empresa.endereco,
        email: empresa.email,
        telefonefixo: empresa.telefonefixo,
        telefonecelular: empresa.telefonecelular,
        tipopessoa: empresa.tipopessoa,
        responsavel: empresa.responsavel,
        setor: empresa.setor,
        pagamento: empresa.pagamento,
        instagram: empresa.instagram,
        facebook: empresa.facebook,
        whatsapp: empresa.whatsapp,
        mapa: empresa.mapa,
        inscricaoestadual: empresa.inscricaoestadual,
        dataadmissao: empresa.dataadmissao,
    };
  
    return (
      <div>
      <div className="container">
        <h1>Editar Empresa</h1>
        <Form forNewEmpresa={false} formData={formData}></Form>
      </div>
      </div>
    );
  };
  
  export default EditEmpresa;
  