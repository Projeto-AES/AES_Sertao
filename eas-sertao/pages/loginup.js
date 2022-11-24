import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Link from 'next/link'
import { FaUserCircle } from "react-icons/fa";
//import Base from "../components/base";
const New4 = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();
      const [registrar, setRegistrar] = useState({
        atual: "",
        nova: "",
        confirmar: ""
      });
    
      function envio(event) {
        registrar[event.target.name] = event.target.value;
        setRegistrar(registrar);
      }
    
      async function handleFormSubmit() {
        console.log(registrar);
      }
  return (
    <>
   
   <main>
        <div className="imag2">
          <form className="formin" onSubmit={handleSubmit(handleFormSubmit)}>
            <FaUserCircle className="l1"  />
            <h1 className="topo">Redefinir senha</h1>
            <div className="alinha">
            <label className="labe">Senha atual</label>
            <input
              className="inp"
              placeholder="digite a senha atual"
              name="atual"
              id="atual"
              {...register("atual", { required: true })}
              onChange={envio}
            ></input>
            <br />
            {errors.atual && (
              <span className="mens">Senha atual é obrigatório</span>
            )}
            <br />
            <br />
            <br />

            <label className="labe">Nova senha</label>
            <input
              className="inp"
              placeholder="digite a nova senha "
              name="nova"
              id="nova"
              {...register("nova", { required: true })}
              onChange={envio}
            ></input>
            <br />
            {errors.nova && <span className="mens">Nova senha é obrigatório</span>}
            <br />
            <br />
            <br />

            <label className="labe">Repita a senha</label>
            <input
              className="inp"
              placeholder="repita a senha"
              name="confirmar"
              id="confirmar"
              {...register("confirmar", { required: true })}
              onChange={envio}
            ></input>
            <br />
            {errors.confirmar && <span className="mens">Senha não confere</span>}
            </div>
            <input className="sub2" type="submit" value="Alterar"></input>
            <p className="logg">
              <Link href="/login">
                <a className="log">Login?</a>
              </Link>
              </p>
          </form>
        </div>
      </main>
    
    </>
  );
};

export default New4;
