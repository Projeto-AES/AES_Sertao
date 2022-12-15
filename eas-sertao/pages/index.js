import { Header } from '../src/components/Header/Header'
import { Footer } from '../src/components/Footer/Footer'
import s from '../styles/container.module.scss'
import conectarDB from '../lib/dbConnect';
import Empresa from '../models/Empresa';
import { BiSearchAlt2 } from "react-icons/bi";
import ButtonDown from '../src/components/ButtonDown/ButtonDown';
import Empresas from '../src/components/Empresa/Empresas';
import Sobre from '../src/components/Sobre/Sobre'

export default function Home({ empresas }) {
  return (
    <section className='index'>
      <header>
        <Header />
      </header>
      <div className={s.divCategoriasEmpresas}>
        <div>
          <form className={s.busca}>
            <ButtonDown />
            <input
              className={s.pesquisa}
              type="text"
              placeholder="Search"
              name="pesquisa"
              id="pesquisa"
            />
            <button className={s.but} type='submit'><BiSearchAlt2 size={25} /></button>

          </form>
          <Empresas />
        </div>
      </div>

      <div className={s.conteudo2}>
        <div className={s.botao}></div>
        <Sobre />
      </div>
      <div className={s.containerGrid}>
      <br/>
      <br/>
      <br/>
      </div>
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