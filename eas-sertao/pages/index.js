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

export default function Home({ empresas }) {
  return (
    <section className='index'>
      <header>
        <Header />
      </header>
      <section className={s.container}>
        <div>
          <h2  className="text-center">Empresas</h2>
          <div className='mb-5'>
            {
              empresas.map(({ _id, namefantasia }) => (
                <div className={s.cardEmpresa} key={_id}>
                    <Image 
                    src={comercio1}
                    alt="Picture do comercio"
                    />
                    {/* <svg className="bd-placeholder-img " width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
                    {/* <h2 className="fw-normal text-center">{namefantasia}</h2> */}
                    <h2 className="fw-normal text-center">Agro Veterinaria</h2>
                    <div className="text-center">
                      <Link href={`/public/${_id}`}>
                        <a className="btn btn-success btn-sm">+Info</a>
                      </Link>
                    </div>
                </div>
              ))
            }
            {
              empresas.map(({ _id, namefantasia }) => (
                <div className={s.cardEmpresa} key={_id}>
                    <Image 
                    src={comercio2}
                    alt="Picture do comercio"
                    />
                    {/* <svg className="bd-placeholder-img " width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
                    {/* <h2 className="fw-normal text-center">{namefantasia}</h2> */}
                    <h2 className="fw-normal text-center">Dom Matias</h2>
                    <div className="text-center">
                      <Link href={`/public/${_id}`}>
                        <a className="btn btn-success btn-sm">+Info</a>
                      </Link>
                    </div>
                </div>
              ))
            }
            {
              empresas.map(({ _id, namefantasia }) => (
                <div className={s.cardEmpresa} key={_id}>
                    <Image 
                    src={comercio3}
                    alt="Picture do comercio"
                    />
                    {/* <svg className="bd-placeholder-img " width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
                    {/* <h2 className="fw-normal text-center">{namefantasia}</h2> */}
                    <h2 className="fw-normal text-center">Exata Agricola</h2>
                    <div className="text-center">
                      <Link href={`/public/${_id}`}>
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