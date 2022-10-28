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
        <div className="imag">
          <form className="formin" onSubmit={handleSubmit(handleFormSubmit)}>
            <FaUserCircle className="l1" size={90} />
            <h1 className="topo">Login</h1>
            <div className="alinha">
            <label className="labe">Email:</label>
            <div className="ca">
              <AiOutlineUser className="l" size={30} />
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

            <label className="labe">Senha:</label>
            <div className="ca">
              <AiFillLock className="l" size={30} />
              <input
                className="inp"
                placeholder="digite sua senha"
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
