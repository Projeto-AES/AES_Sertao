//import Form from "../components/login";
//import Base from "../components/base";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Link from 'next/link';
import { FaUserCircle } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
const New3 = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const [texto, setTexto] = useState({
    email: "",
    senha: ""
  });

  function envio(event) {
    texto[event.target.name] = event.target.value;
    setTexto(texto);
  }

  async function handleFormSubmit() {
    console.log(texto);
  }

  return (
    <>
   <main>
        <div class="imag">
          <form class="formin" onSubmit={handleSubmit(handleFormSubmit)}>
            <FaUserCircle class="l1" size={90} />
            <h1 class="topo">Login</h1>
            <div class="alinha">
            <label class="labe">Email:</label>
            <div class="ca">
              <AiOutlineUser class="l" size={30} />
              <input
                class="inp"
                placeholder="digite seu email"
                name="email"
                id="email"
                {...register("email", { required: true })}
                onChange={envio}
              ></input>
            </div>
            {errors.email && <span class="mens">Email é obrigatório</span>}
            

            <br />
            <br />
            <br />

            <label class="labe">Senha:</label>
            <div class="ca">
              <AiFillLock class="l" size={30} />
              <input
                class="inp"
                placeholder="digite sua senha"
                name="senha"
                id="senha"
                {...register("senha", { required: true })}
                onChange={envio}
              ></input>
            </div>
            {errors.senha && <span class="mens">Senha é obrigatório</span>}
            </div>
            <input class="sub1" type="submit" value="Login"></input>
            <p class="logg">
              <Link href="/loginup">
                <a className="log">Alterar minha senha?</a>
              </Link>
            </p>
          </form>
        </div>
      </main>
      
    
    </>
  );
};

export default New3;
