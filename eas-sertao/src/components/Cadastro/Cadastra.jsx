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
        mapa: formData.mapa,
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
            const res = await fetch(`/api/empresa/${id}`, {
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
                const res = await fetch("/api/empresa", {
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

                    <label className="my-3" htmlFor="Setor">Setor/Categoria</label>
                    <select name="setor" value={form.setor} onChange={handleChange}>
                        <option value="" disabled selected>Selecione a categoria</option>
                        <option value="agropecuaria">Agropecuaria</option>
                        <option value="agricola">Agrícola</option>
                        <option value="automotivo">Automotivo</option>
                        <option value="autoeletrica">Auto Eletrica</option>
                        <option value="mecanica">Açougue</option>
                        <option value="bar">Bar</option>
                        <option value="barbearia">Barbearia</option>
                        <option value="departamento">Departamento</option>
                        <option value="farmacia">Farmácia</option>
                        <option value="financeiro">Financeiro</option>
                        <option value="floricultura">Floricultura</option>
                        <option value="hospital">Hospital</option>
                        <option value="joalheria">Joalheria</option>
                        <option value="mecanica">Mecânica</option>
                        <option value="mercado">Mercado</option>
                        <option value="mercearia">Mercearia</option>
                        <option value="vestimenta">Vestimenta</option>
                        <option value="restaurante">Restaurante</option>
                        <option value="postodegasolina">Posto de gasolina</option>
                        <option value="petshop">Pet Shop</option>
                        <option value="religiao">Religião</option>
                        <option value="taxi">Taxi</option>
                        <option value="teleentrega">Tele Entrega</option>
                        <option value="telecom">Telecomunicaçao</option>

                    </select>

                    <br/>
                    <label className="my-3" htmlFor="Setor">Situação Cadastral</label>
                    <select name="pagamento" value={form.pagamento} onChange={handleChange}>
                        <option value="" disabled selected>Selecione  o PAGAMENTO</option>
                        <option value="true">PAGO</option>
                        <option value="false">Não PAGO</option>
                    </select>
                    
                    <input className="form-control my-2" type="url" placeholder="Instagram" autoComplete="off" name="instagram" value={form.instagram} onChange={handleChange}/>
                    <input className="form-control my-2" type="url" placeholder="Facebook" autoComplete="off" name="facebook" value={form.facebook} onChange={handleChange}/>
                    <input className="form-control my-2" type="url" placeholder="Whatsapp" autoComplete="off" name="whatsapp" value={form.whatsapp} onChange={handleChange}/>
                    <input className="form-control my-2" type="text" placeholder="Localização" autoComplete="off" name="mapa" required value={form.mapa} onChange={handleChange}/>
                    <input className="form-control my-2" type="number" placeholder="Inscrição estadual" autoComplete="off" name="inscricaoestadual" required value={form.inscricaoestadual} onChange={handleChange}/>
                    <label className="my-3" htmlFor="Data Admissão">Data Admissão</label>
                    <input className="form-control my-2" type="date" placeholder="Data Admissão" autoComplete="off" name="dataadmissao" required value={form.dataadmissao} onChange={handleChange}/>
                
                    <button className="btn btn-success w-100" type="submit">{forNewEmpresa ? "Enviar" : "Editar"}</button>
                    <Link href="/admin">
                        <a className="btn btn-danger w-100 my-2">Cancelar</a>
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