import { Header } from '../../src/components/Header/Header'
import { Footer } from '../../src/components/Footer/Footer'
import s from '../../styles/container.module.scss'
import conectarDB from '../../lib/dbConnect';
import Empresa from '../../models/Empresa';
import Link from 'next/link';
import Image from 'next/image'
import comercio1 from '../../public/static/agroveterinaria.jpg'

import { useSession, signIn, signOut } from "next-auth/react"


export default function Listar({ empresas }) {
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
      <button className={s.out} onClick={() =>{
                        signOut({redirect: false})
                    } }>Encerrar</button>
      <section className={s.container}>
        <div>
        
          <h2 className={s.h2}>Lista de Empresas AES</h2>
          <Link href="/admin/empresa/new">
            <button className={s.cadastro}>Cadastrar Nova Empresa</button>
          </Link>
          
        <div>
        </div>
        
          <div className={s.containerGrid}>
            {
              empresas.map(({ _id, namefantasia }) => (
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

