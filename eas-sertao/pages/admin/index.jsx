import { Header } from '../../src/components/Header/Header'
import { Footer } from '../../src/components/Footer/Footer'
import CardMarket from '../../src/components/CardMarket/CardMarket'
import s from '../../styles/container.module.scss'
import Link from 'next/link';


export default function Home() {
  return (
    <section>
      <header>
        <Header />
      </header>
      <section className={s.container}>
        <div>
        <Link href="/admin/new"><a className="btn btn-dark w-100 mb-2">Nova Empressa</a></Link>
        </div>
        <div>
          <h2>Lista de empresas admin</h2>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </section>
  )
}
