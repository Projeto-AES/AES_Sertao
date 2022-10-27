import { Header } from '../src/components/Header/Header'
import { Footer } from '../src/components/Footer/Footer'
import s from '../styles/container.module.scss'
import conectarDB from '../lib/dbConnect';
import Empresa from '../models/Empresa';
import Link from 'next/link';

export default function Home({empresas}) {
  return (
    <section>
      <header>
        <Header />
      </header>
      <section className={s.container}>
      <div>
          <h2>Empresas</h2>
          <div className="d-flex">
            {
              empresas.map(({ _id, namefantasia }) => (
                <div className="" key={_id}>
                  <div className="justify-content-center m-3">
                    <svg className="bd-placeholder-img " width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                    <h2 className="fw-normal text-center">{namefantasia}</h2>
                    <div className="text-center">
                      <Link href={`/public/${_id}`}>
                        <a className="btn btn-success btn-sm">+Info</a>
                      </Link>
                    </div>

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