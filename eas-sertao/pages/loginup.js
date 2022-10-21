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
        <div class="imag">
          <form class="formin" onSubmit={handleSubmit(handleFormSubmit)}>
            <FaUserCircle class="l1" size={90} />
            <h1 class="topo">Redefinir senha</h1>
            <div class="alinha">
            <label class="labe">Senha atual:</label>
            <input
              class="inp"
              placeholder="digite a senha atual"
              name="atual"
              id="atual"
              {...register("atual", { required: true })}
              onChange={envio}
            ></input>
            {errors.atual && (
              <span class="mens">Senha atual é obrigatório</span>
            )}
            <br />
            <br />
            <br />

            <label class="labe">Nova senha:</label>
            <input
              class="inp"
              placeholder="digite a nova senha "
              name="nova"
              id="nova"
              {...register("nova", { required: true })}
              onChange={envio}
            ></input>
            {errors.nova && <span class="mens">Nova senha é obrigatório</span>}
            <br />
            <br />
            <br />

            <label class="labe">Repita a senha:</label>
            <input
              class="inp"
              placeholder="repita a senha"
              name="confirmar"
              id="confirmar"
              {...register("confirmar", { required: true })}
              onChange={envio}
            ></input>
            {errors.confirmar && <span class="mens">Senha não confere</span>}
            </div>
            <input class="sub2" type="submit" value="Alterar"></input>
            <p class="logg">
              <Link href="/">
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
