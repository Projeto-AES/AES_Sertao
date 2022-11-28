import { Header } from '../src/components/Header/Header'
import { Footer } from '../src/components/Footer/Footer'
import s from '../styles/container.module.scss'
import conectarDB from '../lib/dbConnect';
import Empresa from '../models/Empresa';
import Link from 'next/link';
import Image from 'next/image'
import comercio1 from '../public/static/agroveterinaria.jpg'
import comercio2 from '../public/static/dommatias.jpg'
import comercio3 from '../public/static/exataagricola.jpg'
import { BiSearchAlt2 } from "react-icons/bi";
import ButtonDown from '../src/components/ButtonDown/ButtonDown';

export default function Home({ empresas }) {
  return (
    <section className='index'>
      <header>
        <Header />
      </header>
        <form className={s.busca}>
          <ButtonDown/>
          <input
            className={s.pesquisa}
            type="text"
            placeholder="Search"
            name="pesquisa"
            id="pesquisa"
          />
          <button className={s.but} type='submit'><BiSearchAlt2 size={25} /></button>
          
        </form>
      <section className={s.container}>
        <div className={s.containerGrid}>
          {
            empresas.map(({ _id, namefantasia }) => (
              <div className={s.cardEmpresa} key={_id}>
                <div className={s.cardEmpresaImg}>
                  <Image
                    src={comercio1}
                    alt="Picture do comercio"
                  />
                </div>
                <h2 className={s.titleCard}>{namefantasia}</h2>
                <div className="text-center">
                  <Link href={`/public/${_id}`}>
                    <a className="btn btn-success btn-sm">+Info</a>
                  </Link>
                </div>
              </div>
            ))
          }
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