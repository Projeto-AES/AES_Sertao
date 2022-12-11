import { Header } from '../src/components/Header/Header'
import { Footer } from '../src/components/Footer/Footer'
import s from '../styles/container.module.scss'
import conectarDB from '../lib/dbConnect';
import Empresa from '../models/Empresa';
import Link from 'next/link';
import { BiSearchAlt2 } from "react-icons/bi";
import ButtonDown from '../src/components/ButtonDown/ButtonDown';

export default function Home({ empresas }) {
  return (
    <section className='index'>
      <header>
        <Header />
      </header>
      <div className={s.conteudo2}>
        <Link href={`/public/empresa/`}>
          <a className="btn btn-success btn-lg">Empresas</a>
        </Link>
      </div>
      

      <div className={s.conteudo2}>
        <div className={s.botao}></div>
        <p>Texto que o peessoal quer</p>
      </div>
      <section className={s.container}>
        <div className={s.containerGrid}>

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