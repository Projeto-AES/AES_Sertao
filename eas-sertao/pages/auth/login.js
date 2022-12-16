import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Link from 'next/link';
import { FaUserCircle } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { signIn } from "next-auth/react";

import { useRouter } from "next/dist/client/router";

const New3 = () => {
  const router = useRouter();

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

    const res = await signIn('credentials',{
      email: texto.email,
      senha: texto.senha,
      redirect: false
    })
    console.log(res);
    if(res.status === 200){
      router.push("/admin");
    }
  }

  return (
    <>
   <main>
        <div className="imag">
                <a className="btn btn-dark btn-sm me-2" onClick={()=>window.history.back()}>Voltar</a>
          <form className="formin" onSubmit={handleSubmit(handleFormSubmit)}>
          <Link href="/">
            <FaUserCircle className="l1"  />
            </Link>
            <h1 className="topo">Login</h1>
            <div className="alinha">
            <label className="labe">Email</label>
            <div className="ca">
              <AiOutlineUser className="l"  />
              <input
                className="inp"
                placeholder="digite seu email"
                name="email"
                id="email"
                {...register("email", { required: true })}
                onChange={envio}
              ></input>
            </div>
            {errors.email && <span className="mens">Email é obrigatório</span>}
            

            <br />
            <br />
            <br />

            <label className="labe">Senha</label>
            <div className="ca">
              <AiFillLock className="l"  />
              <input
                className="inp"
                placeholder="digite sua senha"
                type="password"
                name="senha"
                id="senha"
                {...register("senha", { required: true })}
                onChange={envio}
              ></input>
            </div>
            {errors.senha && <span className="mens">Senha é obrigatório</span>}
            </div>
            <input className="sub1" type="submit" value="Login"></input>
            <p className="logg">
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
