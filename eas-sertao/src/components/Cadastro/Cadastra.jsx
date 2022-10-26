import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import { Footer } from '../Footer/Footer';

const Form = ({formData, forNewEmpresa = true}) => {

    const router = useRouter();

    const [form, setForm] = useState({
        numeroSocio: formData.numeroSocio,
        cnpj: formData.cnpj,
        namejuridico: formData.namejuridico,
        namefantasia: formData.namefantasia,
        endereco: formData.endereco,
        telefonefixo: formData.telefonefixo,
        telefonecelular: formData.telefonecelular,
        tipopessoa: formData.tipopessoa,
        responsavel: formData.responsavel,
        setor: formData.setor,
        pagamento: formData.pagamento,
        redessociais: formData.redessociais,
        foto: formData.foto,
        inscricaoestadual: formData.inscricaoestadual,
        dataadmissao: formData.dataadmissao,
        
    })

    const [message, setMenssage] = useState([]);

    const handleChange = (e) => {
        const { value, namejuridico } = e.target;
        setForm({
            ...form,
            [namejuridico]: value,
        });
    };
    

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(forNewEmpresa){
            postData(form);
        }else{
            putData(form);
        } 
    };

    const putData = async (form) => {
        setMenssage([]);
        const {id} = router.query;
        try {
            const res = await fetch(`../../../pages/api/${id}`, {
                 method: "PUT",
                 headers: {
                      "Content-type": "application/json",
                  },
                   body: JSON.stringify(form),
              });

             const data = await res.json();
             console.log(data);

             if(!data.success){
                 for (const key in data.error.errors) {
                       let error = data.error.errors[key]
                      setMenssage(oldmenssage => [
                          ...oldmenssage,
                         {message: error.message},
                      ]);
                   }
             }else{
                setMenssage([]);
                router.push("/admin");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const postData = async () => {
        try {
            console.log(form);
                const res = await fetch("../../../pages/api", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(form),
                });

                const data = await res.json();
                console.log(data);

                if(!data.success){
                    for (const key in data.error.errors) {
                        let error = data.error.errors[key]
                        setMenssage(oldmenssage => [
                            ...oldmenssage,
                            {message: error.message},
                        ]);
                    }
                }else{
                    router.push("/admin");
                }
        } catch (error) {
            console.log(error);
        }
    };


    return(
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input className="form-control my-2" type="text" placeholder="Numero Socio" autoComplete="off" name="numeroSocio" required value={form.numeroSocio} onChange={handleChange}/>
                    <input className="form-control my-2" type="text" placeholder="CNPJ" autoComplete="off" name="cnpj" required value={form.cnpj} onChange={handleChange}/>
                    <input className="form-control my-2" type="text" placeholder="Nome Juridico" autoComplete="off" name="namejuridico" required value={form.namejuridico} onChange={handleChange}/>
                    <input className="form-control my-2" type="text" placeholder="Nome Fantasia" autoComplete="off" name="namefantasia" required value={form.namefantasia} onChange={handleChange}/>
                    <input className="form-control my-2" type="text" placeholder="endereco" autoComplete="off" name="endereco" required value={form.endereco} onChange={handleChange}/>

                    <input className="form-control my-2" type="text" placeholder="Telefone Fixo" autoComplete="off" name="telefonefixo" required value={form.telefonefixo} onChange={handleChange}/>
                    <input className="form-control my-2" type="text" placeholder="Telefone Celular" autoComplete="off" name="telefonecelular" required value={form.telefonecelular} onChange={handleChange}/>
                    <input className="form-control my-2" type="text" placeholder="Tipo Pessoa" autoComplete="off" name="tipopessoa" required value={form.tipopessoa} onChange={handleChange}/>
                    <input className="form-control my-2" type="text" placeholder="Responsavel" autoComplete="off" name="responsavel" required value={form.responsavel} onChange={handleChange}/>
                    <input className="form-control my-2" type="text" placeholder="Setor/Ramo" autoComplete="off" name="setor" required value={form.setor} onChange={handleChange}/>
                    <p>Situação Cadastral</p>
                    <input type="radio" id="nao pago" name="pagamento" value={form.pagamento="false"}/>
                    <label  htmlFor="pagamento">NAO PAGO</label>
                    <input type="radio" id="pago" name="pagamento" value={form.pagamento="true"}/>
                    <label  htmlFor="pagamento">PAGO</label>
                    <input className="form-control my-2" type="text" placeholder="Redes Sociais" autoComplete="off" name="redessociais" required value={form.redessociais} onChange={handleChange}/>
                    <input className="form-control my-2" type="file" placeholder="Foto" autoComplete="off" name="foto" required value={form.foto} onChange={handleChange}/>
                    <input className="form-control my-2" type="text" placeholder="inscricaoestadual" autoComplete="off" name="inscricaoestadual" required value={form.inscricaoestadual} onChange={handleChange}/>
                    <input className="form-control my-2" type="text" placeholder="Data Admissao" autoComplete="off" name="dataadmissao" required value={form.dataadmissao} onChange={handleChange}/>
                    
                    <button className="btn btn-dark w-100" type="submit">{forNewEmpresa ? "Enviar" : "Editar"}</button>
                    <Link href="/admin/">
                        <a className="btn btn-dark w-100 my-2">Cancelar</a>
                    </Link>
                    {message.map(({ message }) => (
                        <p key={message}>{message}</p>
                    ))}
                </form>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Form;