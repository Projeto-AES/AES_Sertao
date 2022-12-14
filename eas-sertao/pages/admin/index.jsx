import { Header } from '../../src/components/Header/Header'
import { Footer } from '../../src/components/Footer/Footer'
import s from '../../styles/container.module.scss'
import conectarDB from '../../lib/dbConnect';
import Empresa from '../../models/Empresa';
import Link from 'next/link';
import Image from 'next/image'
import comercio1 from '../../public/static/agroveterinaria.jpg'
import { BiLogOut } from "react-icons/bi";

import { useSession, signIn, signOut } from "next-auth/react"

import { BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";
export default function Listar({ empresas }) {
  const [busca, setBusca] = useState('');

  //ordenação
  const ordenadas = empresas.sort( (a,b) =>
  a.namefantasia.localeCompare(b.namefantasia));

  //sessão
  const {data: session } = useSession({
    required: true
  });

  if(!session) {
    return <></>
  }
  
  return (
    <section className='index'>
      <header>
        <Header />
      </header>
      
      <section className={s.container}>
        <div>
        
          <h2 className={s.h2}>Lista de Empresas AES 
          <button className={s.out} onClick={() =>{
                        signOut({redirect: false})
                    } }>sair<BiLogOut size={35} /></button>
          </h2>
          <Link href="/admin/empresa/new">
            <button className={s.cadastro}>Cadastrar Nova Empresa</button>
          </Link>
          
        <div>
        </div>
        <form className={s.busca}>
          <input
            className={s.pesquisa}
            type="text"
            placeholder="Search"
            name="busca"
            id="busca"
            value={busca}
            onChange={(ev)=> setBusca(ev.target.value)}
          />
          <button className={s.but} type='submit'><BiSearchAlt2 size={25} /></button>
          
        </form>
          <div className={s.containerGrid}>
            {
              ordenadas.filter(e=>e.namefantasia.toLowerCase().startsWith(busca.toLowerCase()) && e.pagamento == "true").map(({ _id, namefantasia }) => (
                <div className={s.cardEmpresa} key={_id}>
                  <Image
                    src={comercio1}
                    alt="Picture do comercio"
                  />
                  <h2 className="fw-normal text-center">{namefantasia}</h2>
                  <div className="text-center">
                    <Link href={`/admin/empresa/${_id}`}>
                      <a className="btn btn-success btn-sm">+Info</a>
                    </Link>
                  </div>
                </div>
              ))
            }
            {
              ordenadas.filter(e=>e.namefantasia.toLowerCase().startsWith(busca.toLowerCase()) && e.pagamento != "true").map(({ _id, namefantasia }) => (
                <div className={s.cardEmpresa} style={{backgroundColor: "rgb(237, 113,104)"}} key={_id}>
                  <Image
                    src={comercio1}
                    alt="Picture do comercio"
                  />
                  <h2 className="fw-normal text-center">{namefantasia}</h2>
                  <div className="text-center">
                    <Link href={`/admin/empresa/${_id}`}>
                      <a className="btn btn-success btn-sm">+Info</a>
                    </Link>
                  </div>
                </div>
              ))
            }
            
          </div>
        </div>

      </section>
      <footer>
        <Footer />
      </footer>
    </section>
  )
}

export async function getServerSideProps() {
  try {
    await conectarDB()

    const res = await Empresa.find({});

    const empresas = res.map(doc => {
      const empresa = doc.toObject();
      empresa._id = `${empresa._id}`;
      return empresa;
    })

    return { props: { empresas } };
  } catch (error) {
    console.log(error);
  }
}

