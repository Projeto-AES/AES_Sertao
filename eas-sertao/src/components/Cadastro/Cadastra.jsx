import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";

const Form = ({formData, forNewEmpresa = true}) => {

    const router = useRouter();

    const [form, setForm] = useState({
        numerosocio: formData.numerosocio,
        cnpj: formData.cnpj,
        namejuridico: formData.namejuridico,
        namefantasia: formData.namefantasia,
        endereco: formData.endereco,
        email: formData.email,
        telefonefixo: formData.telefonefixo,
        telefonecelular: formData.telefonecelular,
        tipopessoa: formData.tipopessoa,
        responsavel: formData.responsavel,
        setor: formData.setor,
        pagamento: formData.pagamento,
        instagram: formData.instagram,
        facebook: formData.facebook,
        whatsapp: formData.whatsapp,
        foto: formData.foto,
        inscricaoestadual: formData.inscricaoestadual,
        dataadmissao: formData.dataadmissao,
        
    })

    const [message, setMenssage] = useState([]);

    const handleChange = (e) => {
        const { value, name } = e.target;
        setForm({
            ...form,
            [name]: value,
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
            const res = await fetch(`/api/${id}`, {
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
                const res = await fetch("/api", {
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
                    <input className="form-control my-2" type="number" placeholder="Número Sócio" autoComplete="off" name="numerosocio" required value={form.numerosocio} onChange={handleChange}/>
                    <input className="form-control my-2" type="number" placeholder="CNPJ" autoComplete="off" name="cnpj" required value={form.cnpj} onChange={handleChange}/>
                    <input className="form-control my-2" type="text" placeholder="Nome Jurídico" autoComplete="off" name="namejuridico" required value={form.namejuridico} onChange={handleChange}/>
                    <input className="form-control my-2" type="text" placeholder="Nome Fantasia" autoComplete="off" name="namefantasia" required value={form.namefantasia} onChange={handleChange}/>
                    <input className="form-control my-2" type="text" placeholder="Endereço" autoComplete="off" name="endereco" required value={form.endereco} onChange={handleChange}/>
                    <input className="form-control my-2" type="text" placeholder="Email" autoComplete="off" name="email" required value={form.email} onChange={handleChange}/>
                    <input className="form-control my-2" type="tel" placeholder="Telefone Fixo" autoComplete="off" name="telefonefixo" required value={form.telefonefixo} onChange={handleChange}/>
                    <input className="form-control my-2" type="tel" placeholder="Telefone Celular" autoComplete="off" name="telefonecelular" required value={form.telefonecelular} onChange={handleChange}/>
                    <input className="form-control my-2" type="text" placeholder="Tipo Pessoa" autoComplete="off" name="tipopessoa" required value={form.tipopessoa} onChange={handleChange}/>
                    <input className="form-control my-2" type="text" placeholder="Responsável" autoComplete="off" name="responsavel" required value={form.responsavel} onChange={handleChange}/>
                    
                    <label  htmlFor="Setor">Setor/Categoria</label><br/>
                    <select name="setor" onChange={handleChange}>
                        <option value="" disabled selected>Selecione a categoria</option>
                        <option value="Mercado">Mercado</option>
                        <option value="Vestimenta">Vestimenta</option>
                        <option value="Alimentação">Alimentação</option>
                        <option value="Financeiro">Financeiro</option>
                        <option value="Agrícola">Agrícola</option>
                        <option value="Automotivo">Automotivo</option>
                        <option value="Floricultura">Floricultura</option>
                        <option value="Farmácia">Farmácia</option>
                        <option value="Mecânica">Mecânica</option>
                        <option value="Restaurante">Restaurante</option>
                        <option value="Posto de gasolina">Posto de gasolina</option>
                    </select>
                    <br/>
                    <br/>
                    <p>Situação Cadastral</p>
                    <input type="radio" id="nao pago" name="pagamento" value={form.pagamento="false"}/>
                    <label  htmlFor="pagamento">NÃO PAGO</label><br/>
                    <input type="radio" id="pago" name="pagamento" value={form.pagamento="true"}/>
                    <label  htmlFor="pagamento">PAGO</label>

                    <input className="form-control my-2" type="url" placeholder="Instagram" autoComplete="off" name="instagram" required value={form.instagram} onChange={handleChange}/>
                    <input className="form-control my-2" type="url" placeholder="Facebook" autoComplete="off" name="facebook" required value={form.facebook} onChange={handleChange}/>
                    <input className="form-control my-2" type="url" placeholder="Whatsapp" autoComplete="off" name="whatsapp" required value={form.whatsapp} onChange={handleChange}/>

                    <input className="form-control my-2" type="file" placeholder="Foto" autoComplete="off" name="foto" required value={form.foto} onChange={handleChange}/>
                    <input className="form-control my-2" type="number" placeholder="Inscrição estadual" autoComplete="off" name="inscricaoestadual" required value={form.inscricaoestadual} onChange={handleChange}/>
                    <input className="form-control my-2" type="date" placeholder="Data Admissão" autoComplete="off" name="dataadmissao" required value={form.dataadmissao} onChange={handleChange}/>
                    
                    <button className="btn btn-dark w-100" type="submit">{forNewEmpresa ? "Enviar" : "Editar"}</button>
                    <Link href="/admin/">
                        <a className="btn btn-dark w-100 my-2">Cancelar</a>
                    </Link>
                    {message.map(({ message }) => (
                        <p key={message}>{message}</p>
                    ))}
                </form>
            </div>
        </div>
    );
};

export default Form;